import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp, Github, Mail, FileText } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="gradient-mesh absolute inset-0 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
      {/* Header */}
      <header className="border-b border-border glass-strong sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SimulationML
            </h1>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth hover:scale-105">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth hover:scale-105">About</a>
              <Link to="/simulation">
                <Button variant="outline" size="sm" className="hover:shadow-glow transition-smooth">Launch Simulation</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <AnimatedBackground />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-5 py-2 glass rounded-full animate-fade-in shadow-glow">
            <span className="text-accent font-semibold text-sm tracking-wide">ML-Powered Scientific Simulation</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 leading-tight animate-slide-up">
            Advanced Simulation Platform for
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-3 animate-gradient-shift" style={{ backgroundSize: "200% auto" }}>
              Complex Equations
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Solve Navier-Stokes, Darcy, and Shallow Water equations with cutting-edge machine learning models. 
            Fast, accurate, and scalable computational fluid dynamics.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/simulation">
              <Button 
                size="lg" 
                className="gradient-primary hover:scale-105 text-white font-bold shadow-glow-primary hover:shadow-glow transition-smooth group text-base px-8 py-6"
              >
                Start Simulation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-smooth" />
              </Button>
            </Link>
            <Link to="/documentation">
              <Button 
                size="lg" 
                variant="outline" 
                className="glass border-accent/40 hover:border-accent hover:bg-accent/10 transition-smooth hover:scale-105 text-base px-8 py-6 font-semibold"
              >
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24 relative z-10">
        <div 
          id="features-header" 
          data-animate 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible["features-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Platform Capabilities
          </h3>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Leveraging state-of-the-art ML models for computational physics
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            id="feature-1"
            data-animate
            className={`transition-all duration-700 delay-100 ${
              isVisible["feature-1"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <Card className="p-8 h-full glass hover:glass-strong hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group border-accent/20">
              <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-smooth shadow-glow-primary">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">High Performance</h4>
              <p className="text-muted-foreground text-base leading-relaxed">
                GPU-accelerated computations deliver results up to 100x faster than traditional solvers.
              </p>
            </Card>
          </div>

          <div
            id="feature-2"
            data-animate
            className={`transition-all duration-700 delay-200 ${
              isVisible["feature-2"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <Card className="p-8 h-full glass hover:glass-strong hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group border-accent/20">
              <div className="h-14 w-14 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-smooth shadow-glow">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">Validated Accuracy</h4>
              <p className="text-muted-foreground text-base leading-relaxed">
                Models trained on verified datasets ensure reliable and reproducible results.
              </p>
            </Card>
          </div>

          <div
            id="feature-3"
            data-animate
            className={`transition-all duration-700 delay-300 ${
              isVisible["feature-3"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <Card className="p-8 h-full glass hover:glass-strong hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group border-accent/20">
              <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-smooth shadow-glow-primary">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">Scalable Solutions</h4>
              <p className="text-muted-foreground text-base leading-relaxed">
                Handle complex boundary conditions and large-scale simulations with ease.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-24 relative z-10">
        <div 
          id="about-card"
          data-animate
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible["about-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <Card className="p-10 md:p-14 shadow-glow glass-strong border-accent/30 hover:border-accent/50 transition-all duration-500">
            <h3 className="text-4xl font-extrabold text-foreground mb-8">About the Platform</h3>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                SimulationML combines advanced machine learning techniques with computational fluid dynamics 
                to provide researchers and engineers with powerful simulation tools.
              </p>
              <p>
                Our platform supports multiple governing equations and can process custom boundary conditions, 
                making it suitable for a wide range of applications in aerospace, environmental science, 
                and engineering research.
              </p>
              <div className="mt-10 pt-10 border-t border-accent/20">
                <h4 className="font-bold text-foreground mb-6 text-xl">Supported Equations:</h4>
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
      <section className="container mx-auto px-4 py-24 relative z-10">
        <div 
          id="cta-section"
          data-animate
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible["cta-section"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="p-14 rounded-3xl gradient-primary shadow-glow-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
                Ready to Run Your First Simulation?
              </h3>
              <p className="text-white/95 text-xl mb-10 max-w-2xl mx-auto">
                Upload your boundary conditions and get results in minutes
              </p>
              <Link to="/simulation">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 hover:scale-110 font-bold shadow-2xl text-base px-10 py-6 transition-smooth group"
                >
                  Launch Simulation Platform
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-smooth" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 glass-strong relative z-10">
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
