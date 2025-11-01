import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp, Github, Mail, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">SimulationML</h1>
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-fast">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-fast">About</a>
              <Link to="/simulation">
                <Button variant="outline" size="sm">Launch Simulation</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
            <span className="text-secondary font-medium text-sm">ML-Powered Scientific Simulation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Advanced Simulation Platform for
            <span className="block gradient-primary bg-clip-text text-transparent mt-2">
              Complex Equations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solve Navier-Stokes, Darcy, and Shallow Water equations with cutting-edge machine learning models. 
            Fast, accurate, and scalable computational fluid dynamics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/simulation">
              <Button size="lg" className="gradient-primary hover:opacity-90 text-white font-semibold shadow-custom-lg hover:shadow-custom-lg transition-base group">
                Start Simulation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-fast" />
              </Button>
            </Link>
            <Link to="/documentation">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Platform Capabilities
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leveraging state-of-the-art ML models for computational physics
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-custom-lg transition-base animate-scale-in border-border bg-card/80 backdrop-blur-sm group">
            <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-base">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">High Performance</h4>
            <p className="text-muted-foreground">
              GPU-accelerated computations deliver results up to 100x faster than traditional solvers.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-custom-lg transition-base animate-scale-in border-border bg-card/80 backdrop-blur-sm group" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-base">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Validated Accuracy</h4>
            <p className="text-muted-foreground">
              Models trained on verified datasets ensure reliable and reproducible results.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-custom-lg transition-base animate-scale-in border-border bg-card/80 backdrop-blur-sm group" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-base">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Scalable Solutions</h4>
            <p className="text-muted-foreground">
              Handle complex boundary conditions and large-scale simulations with ease.
            </p>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-custom-lg border-border bg-card/80 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-foreground mb-6">About the Platform</h3>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                SimulationML combines advanced machine learning techniques with computational fluid dynamics 
                to provide researchers and engineers with powerful simulation tools.
              </p>
              <p>
                Our platform supports multiple governing equations and can process custom boundary conditions, 
                making it suitable for a wide range of applications in aerospace, environmental science, 
                and engineering research.
              </p>
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Supported Equations:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong>Navier-Stokes:</strong> Incompressible fluid flow modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong>Darcy's Law:</strong> Porous media flow analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span><strong>Shallow Water:</strong> Free surface flow dynamics</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-2xl gradient-primary shadow-custom-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Run Your First Simulation?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Upload your boundary conditions and get results in minutes
            </p>
            <Link to="/simulation">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
                Launch Simulation Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">SimulationML</h4>
              <p className="text-sm text-muted-foreground">
                Advanced scientific simulation platform powered by machine learning
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Platform</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-fast">Features</a></li>
                <li><Link to="/simulation" className="hover:text-foreground transition-fast">Simulation</Link></li>
                <li><a href="#about" className="hover:text-foreground transition-fast">About</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/documentation" className="hover:text-foreground transition-fast flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Documentation
                </Link></li>
                <li><a href="#" className="hover:text-foreground transition-fast flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:contact@simulationml.dev" className="hover:text-foreground transition-fast flex items-center gap-2">
                  <Mail className="h-4 w-4" /> contact@simulationml.dev
                </a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 SimulationML Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
