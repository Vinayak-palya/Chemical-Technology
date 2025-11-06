!pip install neuraloperator -q
import torch
import matplotlib.pyplot as plt
import sys
from neuralop.models import FNO
from neuralop.models import SFNO

# -------------------------
# USER CONFIG
# -------------------------

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
if eqn=='darcy_flow':
    model = FNO(
        n_modes=(16, 16),
        in_channels=1,
        out_channels=1,
        hidden_channels=48,
        projection_channel_ratio=2,
    )
    model_path = 'C:\Users\Vivek Kumar\OneDrive\Documents\ml_models_vscode\CFD_app\model_state_dict_darcy_high.pt' 
    model.load_state_dict(torch.load(model_path, map_location=device , weights_only = False))

elif eqn=='Swe':
    model = SFNO(
    n_modes=(32, 64),
    in_channels=3,
    out_channels=3,
    hidden_channels=128,
    domain_padding=[0.05, 0.05],
    n_layers=2,
    )
    model_path = 'C:\Users\Vivek Kumar\OneDrive\Documents\ml_models_vscode\CFD_app\model_state_dict_sfno_high.pt' 
    model.load_state_dict(torch.load(model_path, map_location=device , weights_only = False))

elif eqn=='nv_stokes':
    model = FNO(
    n_modes=(16, 16),           # Fourier modes for each dimension
    in_channels=1,              # Input channels
    out_channels=1,             # Output channels
    hidden_channels=48,         # Hidden layer width
    projection_channel_ratio=2  # Channel expansion ratio
    )
    model_path = 'C:\Users\Vivek Kumar\OneDrive\Documents\ml_models_vscode\CFD_app\model_state_dict_nv_high1.pt' 
    model.load_state_dict(torch.load(model_path, map_location=device , weights_only = False))

    
# -------------------------
# LOAD MODEL
# -------------------------

model = model.to(device)
model.eval()
x = x.unsqueeze(0).to(device)

out = model(x)

if eqn == 'Swe':
    out = out.squeeze()[0, ...].detach().cpu().numpy()
else :
    out = out.squeeze().detach().numpy()

return out 





