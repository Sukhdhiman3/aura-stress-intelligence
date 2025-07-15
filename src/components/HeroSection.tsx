import { ArrowRight, Play, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in-down">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Premium AI Health Technology
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient-gold">AI-Powered</span>
            <br />
            <span className="text-foreground">Stress Intelligence</span>
            <br />
            <span className="text-gradient-neural">for Every Moment</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Advanced multimodal AI system that analyzes facial expressions, voice patterns, 
            physiological signals, and behavioral data to predict stress levels with 
            unprecedented accuracy.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98.7%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4</div>
              <div className="text-sm text-muted-foreground">AI Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Real-time</div>
              <div className="text-sm text-muted-foreground">Detection</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group"
            >
              Try Live Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="glass-button group"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 mt-16 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">10M+ Users</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;