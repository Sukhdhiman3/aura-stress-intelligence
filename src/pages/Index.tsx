import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import TechnologySection from '@/components/TechnologySection';
import LiveDemo from '@/components/LiveDemo';
import VisionSection from '@/components/VisionSection';

import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / maxScrollHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enhanced Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Add different animations based on data attributes
            if (target.classList.contains('scroll-reveal')) {
              target.classList.add('revealed');
            } else if (target.classList.contains('scroll-reveal-left')) {
              target.classList.add('revealed');
            } else if (target.classList.contains('scroll-reveal-right')) {
              target.classList.add('revealed');
            } else if (target.classList.contains('scroll-reveal-scale')) {
              target.classList.add('revealed');
            } else {
              // Default animation
              target.classList.add('animate-fade-in-up');
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger animation slightly before element is fully visible
      }
    );

    // Observe all sections and elements with scroll-reveal classes
    const elementsToObserve = document.querySelectorAll('section, .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ 
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: 'left'
        }}
      />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* How It Works */}
        <HowItWorks />
        
        {/* Technology */}
        <TechnologySection />
        
        {/* Live Demo */}
        <LiveDemo />
        
        {/* Vision */}
        <VisionSection />
        
        {/* Contact */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-secondary/10 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-sm text-muted-foreground">
                © 2025 Aura Intelligence. All rights reserved.
              </span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
