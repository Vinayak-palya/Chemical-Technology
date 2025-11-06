from fastapi import FastAPI, HTTPException 
import torch
from neuralop.models import FNO, SFNO
import os
import base64
import io
import torch
from fastapi import HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import cloudinary
import cloudinary.uploader
from PIL import Image
import numpy as np
import matplotlib.cm as cm

cloudinary.config(
    cloud_name="YOUR_CLOUD_NAME",
    api_key="CLOUDINARY_API_KEY",
    api_secret="API_SECRET"
)

app = FastAPI(title="CFD Model Inference API")

origins = [
    "http://localhost:9000",  # frontend dev server
    "http://localhost:8080",  # add frontend origin seen in request headers
    "http://10.39.18.176:8000",  # server IP for remote clients (adjust port if needed)
    "http://10.39.18.176:9000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=False,
    allow_methods=["GET" , "POST"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def index():
    print('request hit')
    return {"message": "API is running!"}
# -------------------------
# DEVICE CONFIG
# -------------------------
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# -------------------------
# MODEL CACHE
# -------------------------
def load_model(eqn: str):
    """Load and cache model based on equation type"""
    print('load_model : ' , eqn)
    model_path = ""
    if eqn == "darcy":
        model = FNO(
            n_modes=(16, 16),
            in_channels=1,
            out_channels=1,
            hidden_channels=48,
            projection_channel_ratio=2,
        )
        model_path = r"C:\Users\Vivek Kumar\OneDrive\Documents\ml_models_vscode\CFD_app\model_state_dict_darcy_high.pt"

    elif eqn == "shallow-water":
        model = SFNO(
            n_modes=(32, 64),
            in_channels=3,
            out_channels=3,
            hidden_channels=128,
            domain_padding=[0.05, 0.05],
            n_layers=2,
        )
        model_path = r"C:\Users\Vivek Kumar\OneDrive\Documents\ml_models_vscode\CFD_app\model_state_dict_sfno_high.pt"

    elif eqn == "navier-stokes":
        model = FNO(
            n_modes=(16, 16),
            in_channels=1,
            out_channels=1,
            hidden_channels=48,
            projection_channel_ratio=2,
        )
        model_path = r"C:\Users\Vivek Kumar\OneDrive\Documents\ml_models_vscode\CFD_app\model_state_dict_nv_high1.pt"

    else:
        raise ValueError(f"Unknown equation type: {eqn}")

    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model file not found: {model_path}")
    print('model')
    print(device)
    model.to(device)
    print(model)
    try:
        model.load_state_dict(torch.load(model_path, map_location=device, weights_only=False))
    except Exception as e:
        print(e)
    print(model)
    return model




# -------------------------
# INFERENCE ROUTE
# -------------------------
# ...existing code...


@app.post("/predict")

async def predict(request: Request):
    try:
        print("start")
        data = await request.json()
        eqn = data.get("eqn")
        print('eqn', eqn)
        file_data = data.get("file")
        if not eqn:
            raise HTTPException(status_code=400, detail="Missing 'eqn' field")
        if not file_data:
            raise HTTPException(status_code=400, detail="Missing 'file' data")
        print('entering b64')
        # Decode base64-encoded file bytes
        try:
            b64 = file_data.split(",", 1)[1] if isinstance(file_data, str) and file_data.startswith("data:") and "," in file_data else file_data
            tensor_bytes = base64.b64decode(b64)
        except Exception:
            raise HTTPException(status_code=400, detail="Invalid base64 file data")
        print('loading tensor')
        # Load tensor
        try:
            buffer = torch.load(io.BytesIO(tensor_bytes), map_location=device)
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Failed to load tensor: {e}")
        print('buffer loaded')
        if not torch.is_tensor(buffer):
            buffer = torch.tensor(buffer)
        
        x_tensor = buffer.unsqueeze(0).to(device)
        # Load/cache model
        # if eqn not in MODELS:
        #     MODELS[eqn] = load_model(eqn)
        # model = MODELS[eqn]
        model = load_model(eqn)
        model = model.to(device).eval()
        print('model loaded')
        print(model)
        with torch.no_grad():
            print('x_tensor : ' , x_tensor.shape)
            out = model(x_tensor.squeeze(0))
            print('out ' , out.shape)
        
        
        if eqn == "shallow-water":
            out = out.squeeze().detach().cpu().numpy()
        # Convert model output into numpy(s)
        else:
            out = out.squeeze().detach().cpu().numpy()

        print('out ready' , out.shape)
        
        # Normalize and convert arrays to PNG bytes
        def array_to_png_bytes(arr: np.ndarray, cmap_name="viridis") -> bytes:
            a = np.array(arr, dtype=np.float32)

            # Convert channel-first -> channel-last
            if a.ndim == 3 and a.shape[0] in (1,3,4):
                a = np.transpose(a, (1, 2, 0))

            # Case 1: single channel (H, W)
            if a.ndim == 2:
                scalar_field = a

            # Case 2: multi-channel (H, W, C)
            elif a.ndim == 3:
                if a.shape[2] == 1:
                    scalar_field = a[..., 0]
                else:
                    # You can pick one of the following depending on your use case:
                    # Option 1: Magnitude (default)
                    scalar_field = np.linalg.norm(a, axis=2)
                    # Option 2: Mean intensity
                    # scalar_field = a.mean(axis=2)
            else:
                # Fallback: flatten scalar
                scalar_field = np.array(a).reshape(1, 1)

            # Normalize
            mn, mx = scalar_field.min(), scalar_field.max()
            if mx - mn > 0:
                scalar_norm = (scalar_field - mn) / (mx - mn)
            else:
                scalar_norm = np.zeros_like(scalar_field)

            # Apply colormap
            cmap = cm.get_cmap(cmap_name)
            colored = cmap(scalar_norm)[..., :3]  # RGB

            # Convert to 8-bit image
            a8 = np.clip(colored * 255, 0, 255).astype(np.uint8)
            img = Image.fromarray(a8, mode="RGB")

            # Save to bytes
            buf = io.BytesIO()
            img.save(buf, format="PNG")
            buf.seek(0)
            return buf.read()

        # If out_np is a stack of images, iterate; else single image
        imgs = []

        for i in range(out.shape[0]):
            imgs.append(out[i])

        uploaded_urls = []
        for idx, arr in enumerate(imgs):
            try:
                png_bytes = array_to_png_bytes(arr)
                upload_resp = cloudinary.uploader.upload(
                    io.BytesIO(png_bytes),
                    folder="predictions",
                    use_filename=True,
                    unique_filename=True,
                    resource_type="image"
                )
                url = upload_resp.get("secure_url") or upload_resp.get("url")
                if url:
                    uploaded_urls.append(url)
                else:
                    uploaded_urls.append(None)
            except Exception as e:
                # include placeholder/None on failure, but continue uploading remaining imgs
                uploaded_urls.append(None)
                print(f"cloudinary upload failed for image {idx}: {e}")

        print("predictions sent, uploaded:", len([u for u in uploaded_urls if u]))
        print('uploaded_url' , uploaded_urls)
        return {"status": "success", "output_urls": uploaded_urls}

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ...existing code...
