import pako from "pako"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Upload, PlayCircle, FileText, ChevronLeft } from "lucide-react";
import { Form, Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios"

const Simulation = () => {
  const [file, setFile] = useState<File | null>(null);
  const [equation, setEquation] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultImages, setResultImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith('.pt')) {
        setFile(selectedFile);
        toast.success("File uploaded successfully");
      } else {
        toast.error("Please upload a .pt file");
      }
    }
  };

const handleSubmit = async () => {
  if (!file) {
    toast.error("Please upload a boundary conditions file");
    return;
  }
  if (!equation) {
    toast.error("Please select an equation");
    return;
  }

  setIsRunning(true);
  setProgress(0);
  setResultImages([]);
  const interval = setInterval(() => {
    setProgress((prev) => (prev >= 90 ? 90 : prev + 10));
  }, 500);

  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const base64Data = reader.result?.toString().split(",")[1]; // remove prefix

      const payload = {
        eqn: equation,
        filename: file.name,
        file: base64Data,
      };
      console.log(payload);
      const response = await axios.post(
        "http://172.20.93.111:8000/predict",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      clearInterval(interval);
      setProgress(100);
      setIsRunning(false);

      if (response.data?.data?.image) {
        setResultImages([response.data.data.image]);
        toast.success("Simulation completed successfully!");
      } else {
        toast.error("Unexpected server response");
      }
    } catch (error: any) {
      console.error("Simulation error:", error);
      clearInterval(interval);
      setIsRunning(false);
      toast.error(error.response?.data?.message || "Simulation failed");
    }
  };

  reader.onerror = () => {
    clearInterval(interval);
    setIsRunning(false);
    toast.error("Failed to read the file");
  };

  // Start reading file
  reader.readAsDataURL(file);
};



  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-secondary transition-fast">
              <ChevronLeft className="h-5 w-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold text-foreground">SimulationML Platform</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Run Your Simulation
            </h2>
            <p className="text-muted-foreground text-lg">
              Upload your initial boundary conditions and select the equation to begin
            </p>
          </div>

          <Card className="p-8 shadow-custom-lg animate-scale-in">
            <div className="space-y-6">
              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Initial Boundary Conditions
                  <span className="text-muted-foreground font-normal ml-2">(pytorch tensor file .pt file)</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pt"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary hover:bg-muted/50 transition-base group"
                  >
                    <Upload className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-fast" />
                    <div className="text-center">
                      {file ? (
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-secondary" />
                          <span className="text-foreground font-medium">{file.name}</span>
                        </div>
                      ) : (
                        <>
                          <p className="text-foreground font-medium">Click to upload or drag and drop</p>
                          <p className="text-sm text-muted-foreground">Pytorch tensor file for boundary condition (.pt)</p>
                        </>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* Equation Selector */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Select Equation
                  <span className="text-muted-foreground font-normal ml-2">(Choose governing equation)</span>
                </label>
                <Select value={equation} onValueChange={setEquation}>
                  <SelectTrigger className="h-12 bg-background">
                    <SelectValue placeholder="Choose an equation" />
                  </SelectTrigger>
                  <SelectContent className="bg-card">
                    <SelectItem value="navier-stokes">Navier-Stokes Equations</SelectItem>
                    <SelectItem value="darcy">Darcy's Law</SelectItem>
                    <SelectItem value="shallow-water">Shallow Water Equation</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-2">
                  The ML model will solve the selected equation with your boundary conditions
                </p>
              </div>

              {/* Progress Bar */}
              {isRunning && (
                <div className="animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Running simulation...</span>
                    <span className="text-sm text-muted-foreground">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={isRunning}
                className="w-full h-12 gradient-primary hover:opacity-90 text-white font-semibold shadow-custom-md hover:shadow-custom-lg transition-base"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                {isRunning ? "Running..." : "Run Simulation"}
              </Button>

              {/* Info Section */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <h4 className="font-semibold text-sm text-foreground mb-2">How it works</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Upload your initial boundary conditions as a NumPy array</li>
                  <li>• Select the governing equation for your simulation</li>
                  <li>• Our ML model will process and solve the equation</li>
                  <li>• Results will be displayed upon completion</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          {resultImages.length > 0 && (
            <Card className="p-8 mt-8 shadow-custom-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">Simulation Results</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {resultImages.map((imageUrl, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-border bg-muted/30">
                    <img 
                      src={imageUrl} 
                      alt={`Simulation result ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> These visualization images are generated by the backend ML model. 
                  In production, replace the mock images with actual API responses containing your simulation results.
                </p>
              </div>
            </Card>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 SimulationML Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Simulation;
