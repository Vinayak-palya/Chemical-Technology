import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronLeft, BookOpen, Code2, Cpu, Workflow, Sparkles, Rocket } from "lucide-react";

const Documentation = () => {
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
            <h1 className="text-xl font-bold text-foreground">Documentation</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="animate-fade-in">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <BookOpen className="h-4 w-4 text-secondary" />
              <span className="text-secondary font-medium text-sm">Technical Documentation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SimulationML Platform Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation for ML-powered computational fluid dynamics
            </p>
          </div>

          {/* Introduction */}
          <Card className="p-8 md:p-10 mb-8 shadow-custom-lg border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Introduction</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Computational Fluid Dynamics (CFD)</strong> is a critical tool in modern engineering and scientific research, 
                enabling the simulation of complex fluid flows, heat transfer, and related phenomena. Traditional CFD methods rely on numerical 
                techniques such as finite element analysis or finite difference methods, which solve governing partial differential equations (PDEs) 
                across discretized domains.
              </p>
              <p>
                While accurate, these classical approaches are computationally expensive, often requiring hours or days to simulate complex scenarios, 
                especially when dealing with high-resolution meshes or turbulent flows.
              </p>
              <p>
                <strong className="text-foreground">Machine learning (ML)</strong> offers a transformative alternative. By learning patterns from data, ML models can approximate 
                solutions to PDEs with significantly reduced computational cost. This paradigm shift enables real-time simulations, rapid prototyping, 
                and exploration of larger parameter spaces previously infeasible with traditional methods.
              </p>
              <div className="mt-6 p-5 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
                <p className="text-foreground font-semibold mb-2">Project Goals:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Develop an ML-powered platform that solves classical fluid dynamics equations orders of magnitude faster than traditional solvers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Provide an intuitive interface for researchers and engineers to run simulations without deep ML expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Maintain scientific accuracy while achieving dramatic speedups through neural operator learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Support multiple governing equations relevant to diverse engineering applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Governing Equations */}
          <Card className="p-8 md:p-10 mb-8 shadow-custom-lg border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg gradient-accent flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Governing Equations</h2>
            </div>
            <div className="space-y-8">
              {/* Navier-Stokes */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-secondary">1.</span> Navier-Stokes Equations
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Navier-Stokes equations describe the motion of viscous fluid substances. They are fundamental to fluid mechanics 
                  and apply to a wide range of applications from aerodynamics to blood flow modeling.
                </p>
                <div className="bg-muted/30 p-5 rounded-lg border border-border font-mono text-sm overflow-x-auto">
                  <div className="mb-3 text-foreground">Momentum equation:</div>
                  <code className="text-primary">
                    ρ(∂u/∂t + u·∇u) = -∇p + μ∇²u + f
                  </code>
                  <div className="mt-4 mb-3 text-foreground">Continuity equation (incompressible flow):</div>
                  <code className="text-primary">
                    ∇·u = 0
                  </code>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Where:</strong></p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <code className="text-primary">u</code>: velocity field</li>
                    <li>• <code className="text-primary">ρ</code>: fluid density</li>
                    <li>• <code className="text-primary">p</code>: pressure</li>
                    <li>• <code className="text-primary">μ</code>: dynamic viscosity</li>
                    <li>• <code className="text-primary">f</code>: body forces</li>
                  </ul>
                </div>
              </div>

              {/* Darcy's Law */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-secondary">2.</span> Darcy's Law
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Darcy's Law describes fluid flow through porous media, critical for groundwater hydrology, petroleum engineering, 
                  and filtration processes.
                </p>
                <div className="bg-muted/30 p-5 rounded-lg border border-border font-mono text-sm overflow-x-auto">
                  <code className="text-primary">
                    u = -(K/μ)∇p
                  </code>
                  <div className="mt-4 mb-3 text-foreground font-sans">Combined with continuity:</div>
                  <code className="text-primary">
                    ∇·(K∇p) = q
                  </code>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Where:</strong></p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <code className="text-primary">K</code>: permeability tensor</li>
                    <li>• <code className="text-primary">p</code>: pressure</li>
                    <li>• <code className="text-primary">μ</code>: fluid viscosity</li>
                    <li>• <code className="text-primary">q</code>: source/sink term</li>
                  </ul>
                </div>
              </div>

              {/* Shallow Water */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-secondary">3.</span> Shallow Water Equations
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The shallow water equations model free-surface flows where horizontal length scales are much larger than vertical scales, 
                  applicable to ocean dynamics, tsunami modeling, and hydraulic engineering.
                </p>
                <div className="bg-muted/30 p-5 rounded-lg border border-border font-mono text-sm overflow-x-auto">
                  <div className="mb-3 text-foreground">Mass conservation:</div>
                  <code className="text-primary">
                    ∂h/∂t + ∇·(hu) = 0
                  </code>
                  <div className="mt-4 mb-3 text-foreground">Momentum conservation:</div>
                  <code className="text-primary">
                    ∂(hu)/∂t + ∇·(huu) + gh∇h = 0
                  </code>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Where:</strong></p>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <code className="text-primary">h</code>: water depth</li>
                    <li>• <code className="text-primary">u</code>: depth-averaged velocity</li>
                    <li>• <code className="text-primary">g</code>: gravitational acceleration</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Machine Learning Approach */}
          <Card className="p-8 md:p-10 mb-8 shadow-custom-lg border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Machine Learning Approach</h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our platform leverages <strong className="text-foreground">Fourier Neural Operators (FNO)</strong>, a state-of-the-art neural network 
                architecture specifically designed for learning mappings between function spaces. Unlike traditional neural networks that operate 
                on finite-dimensional data, FNOs can handle infinite-dimensional operators, making them ideal for solving PDEs.
              </p>
              
              <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-lg p-5">
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Advantages of FNO:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Resolution Independence:</strong> Models trained on one mesh resolution can be applied to different resolutions without retraining
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Speed:</strong> Once trained, FNOs achieve 100-1000x speedup compared to traditional numerical solvers
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Zero-Shot Generalization:</strong> Can handle unseen boundary conditions and parameter regimes with high accuracy
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Global Receptive Field:</strong> Fourier layers capture long-range dependencies naturally
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">How FNO Works:</h3>
                <p className="mb-4">
                  The FNO architecture operates in the Fourier domain, performing convolutions in frequency space. This approach is computationally 
                  efficient and captures global interactions in the solution field.
                </p>
                <div className="bg-muted/30 p-5 rounded-lg border border-border">
                  <div className="font-mono text-sm text-primary space-y-2">
                    <div>1. Input: Initial conditions u₀(x)</div>
                    <div>2. Transform to Fourier space: FFT(u₀)</div>
                    <div>3. Apply learned spectral convolutions</div>
                    <div>4. Transform back: IFFT</div>
                    <div>5. Apply pointwise nonlinearities</div>
                    <div>6. Output: Solution field u(x,t)</div>
                  </div>
                </div>
              </div>

              <p>
                Our models are trained on large datasets of numerical simulations covering diverse boundary conditions, Reynolds numbers, 
                and flow regimes. This extensive training enables the network to learn the underlying physics and generalize to new scenarios.
              </p>
            </div>
          </Card>

          {/* Simulation Workflow */}
          <Card className="p-8 md:p-10 mb-8 shadow-custom-lg border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg gradient-accent flex items-center justify-center">
                <Workflow className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Simulation Workflow</h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-semibold text-lg">
                Running a simulation on our platform is straightforward:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Upload Boundary Conditions</h3>
                    <p>
                      Prepare your initial boundary conditions as a NumPy array (<code className="text-primary">.npy</code> file). 
                      This should represent your domain's initial state, including velocity fields, pressure, or any relevant physical quantities. 
                      The array format should match the equation requirements (e.g., 2D or 3D velocity fields for Navier-Stokes).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Select Governing Equation</h3>
                    <p>
                      Choose from the dropdown menu which physical equation governs your system:
                    </p>
                    <ul className="mt-3 space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span><strong className="text-foreground">Navier-Stokes:</strong> For incompressible fluid flow problems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span><strong className="text-foreground">Darcy:</strong> For flow through porous media</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span><strong className="text-foreground">Shallow Water:</strong> For free-surface flow dynamics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Run Simulation</h3>
                    <p>
                      Click the "Run Simulation" button. Our backend will:
                    </p>
                    <ul className="mt-3 space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">→</span>
                        <span>Load the pre-trained FNO model for your selected equation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">→</span>
                        <span>Process your boundary conditions through the neural operator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">→</span>
                        <span>Generate the solution field in seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">→</span>
                        <span>Return visualization images and data arrays</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">View Results</h3>
                    <p>
                      Once processing completes, results are displayed directly in the interface. You'll receive:
                    </p>
                    <ul className="mt-3 space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span>Visualization images (contour plots, streamlines, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span>Numerical data for further analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span>Key metrics and statistics about the solution</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-foreground font-semibold mb-2">⚡ Performance Note:</p>
                <p>
                  Traditional CFD solvers might take hours or days for complex 3D simulations. Our ML-powered approach 
                  delivers results in seconds to minutes, even for high-resolution problems.
                </p>
              </div>
            </div>
          </Card>

          {/* Benefits */}
          <Card className="p-8 md:p-10 mb-8 shadow-custom-lg border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Benefits & Advantages</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-muted/30 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-secondary">⚡</span> Unprecedented Speed
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Achieve 100-1000x faster computation compared to traditional numerical solvers. What took hours now takes seconds, 
                  enabling rapid iteration and real-time decision making.
                </p>
              </div>

              <div className="p-5 bg-muted/30 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-secondary">🎯</span> High Accuracy
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Models trained on verified simulation data maintain scientific rigor. Validation against ground-truth solvers 
                  shows typical errors below 1-2% for most flow regimes.
                </p>
              </div>

              <div className="p-5 bg-muted/30 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-secondary">🔄</span> Easy Integration
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Simple file upload interface with no complex preprocessing. Standard NumPy format ensures compatibility 
                  with existing workflows and tools.
                </p>
              </div>

              <div className="p-5 bg-muted/30 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-secondary">📊</span> Scalable Architecture
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Resolution-independent models work across different mesh sizes. Handle complex geometries and 
                  boundary conditions without model retraining.
                </p>
              </div>

              <div className="p-5 bg-muted/30 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-secondary">💰</span> Cost Effective
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Reduced computational requirements mean lower cloud computing costs. Run more simulations 
                  for the same budget, accelerating research and development cycles.
                </p>
              </div>

              <div className="p-5 bg-muted/30 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-secondary">🌍</span> Wide Applicability
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  From aerospace to environmental engineering, our multi-equation support addresses diverse 
                  applications across industries and research domains.
                </p>
              </div>
            </div>
          </Card>

          {/* Future Work */}
          <Card className="p-8 md:p-10 mb-8 shadow-custom-lg border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg gradient-accent flex items-center justify-center">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Future Work & Roadmap</h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                While the current platform demonstrates the power of neural operators for CFD, we have ambitious plans 
                to expand capabilities and improve user experience:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-secondary text-2xl">→</span> Additional Equation Support
                  </h3>
                  <p>
                    Extend to compressible flows (Euler equations), heat transfer (energy equations), multiphase flows, 
                    and turbulence models (RANS, LES). Each requires specialized model architecture and training data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-secondary text-2xl">→</span> Interactive Visualization
                  </h3>
                  <p>
                    Real-time 3D visualization with user controls for rotating, zooming, and slicing solution fields. 
                    Time-series animations for transient simulations. Export capabilities for publication-quality figures.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-secondary text-2xl">→</span> Custom Geometry Support
                  </h3>
                  <p>
                    Enable CAD file imports and automatic mesh generation. Support arbitrary domain shapes beyond 
                    simple rectangular grids. Integration with standard geometry formats (STL, STEP).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-secondary text-2xl">→</span> Uncertainty Quantification
                  </h3>
                  <p>
                    Provide confidence intervals and error estimates for predictions. Ensemble methods and Bayesian 
                    approaches to quantify model uncertainty and guide users on result reliability.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-secondary text-2xl">→</span> API Access
                  </h3>
                  <p>
                    RESTful API for programmatic access, enabling integration with optimization workflows, parameter 
                    studies, and automated design tools. Python SDK for seamless integration with scientific computing stacks.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-secondary text-2xl">→</span> Transfer Learning & Fine-tuning
                  </h3>
                  <p>
                    Allow users to fine-tune models on their specific applications. Upload custom training data 
                    to specialize models for particular geometries, flow regimes, or boundary condition types.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-secondary text-2xl">→</span> Hybrid Solver Integration
                  </h3>
                  <p>
                    Combine ML predictions with traditional numerical methods for regions requiring extra accuracy. 
                    Use neural operators for coarse predictions and refine with local high-resolution solvers.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-primary rounded-lg">
                <p className="text-white font-semibold text-lg mb-2">
                  🎯 Long-term Vision
                </p>
                <p className="text-white/90">
                  Our ultimate goal is to democratize high-performance CFD simulation, making it accessible to engineers 
                  and researchers worldwide regardless of computational resources. We envision a future where simulation 
                  becomes an interactive design tool rather than a batch-processing bottleneck.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center p-8 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience ML-Powered CFD?
            </h3>
            <p className="text-muted-foreground mb-6">
              Try our simulation platform and see the speed difference yourself
            </p>
            <Link to="/simulation">
              <Button size="lg" className="gradient-primary hover:opacity-90 text-white font-semibold shadow-custom-lg">
                Launch Simulation Platform
              </Button>
            </Link>
          </div>
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

export default Documentation;
