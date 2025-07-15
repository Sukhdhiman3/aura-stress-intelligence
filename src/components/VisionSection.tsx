import { Heart, Shield, Globe, Users, Sparkles, TrendingUp } from 'lucide-react';

const VisionSection = () => {
  const visionPoints = [
    {
      icon: Heart,
      title: 'Mental Health Revolution',
      description: 'Transforming how we understand and respond to stress in our daily lives through AI-powered insights.',
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: 'Preventive Healthcare',
      description: 'Early stress detection to prevent burnout, anxiety, and stress-related health complications.',
      color: 'text-accent'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making stress detection accessible worldwide, regardless of location or economic status.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Workplace Wellness',
      description: 'Helping organizations create healthier work environments through real-time stress monitoring.',
      color: 'text-accent'
    }
  ];

  const futureFeatures = [
    'Continuous biometric monitoring',
    'Predictive stress forecasting',
    'Personalized intervention recommendations',
    'Integration with health ecosystems',
    'Advanced behavioral pattern analysis',
    'Real-time workplace wellness dashboards'
  ];

  return (
    <section id="vision" className="py-20 bg-neural relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Future of Wellness</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Our Vision</span>
            <br />
            <span className="text-foreground">for Tomorrow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We envision a world where stress detection is seamless, accessible, and 
            integrated into every aspect of modern life—from personal wellness to 
            healthcare and workplace environments.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {visionPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <IconComponent className={`h-8 w-8 ${point.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{point.title}</h3>
                </div>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Future Roadmap */}
        <div className="glass-card p-8 mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <TrendingUp className="h-6 w-6 text-accent" />
            Future Developments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-secondary/20 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-fade-in-up">
            <div className="text-3xl font-bold text-primary mb-2">76%</div>
            <div className="text-sm text-muted-foreground">of employees report workplace stress</div>
          </div>
          <div className="text-center animate-fade-in-up">
            <div className="text-3xl font-bold text-accent mb-2">$300B</div>
            <div className="text-sm text-muted-foreground">annual cost of workplace stress</div>
          </div>
          <div className="text-center animate-fade-in-up">
            <div className="text-3xl font-bold text-primary mb-2">50%</div>
            <div className="text-sm text-muted-foreground">increase in mental health issues</div>
          </div>
          <div className="text-center animate-fade-in-up">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">monitoring potential</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join the Wellness Revolution</h3>
            <p className="text-muted-foreground mb-6">
              Be part of the future where AI helps create healthier, happier, and more 
              productive environments for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button px-8 py-3 hover-glow">
                Partner with Us
              </button>
              <button className="glass-button px-8 py-3 hover-glow">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;