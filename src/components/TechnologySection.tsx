import { Brain, Mic, Camera, Activity, BarChart3, Shield, Zap, Target } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: Camera,
      title: 'Facial Emotion AI',
      description: 'Advanced computer vision models analyze micro-expressions and facial landmarks to detect emotional states and stress indicators.',
      features: ['Real-time expression tracking', 'Micro-expression analysis', 'Emotion classification', 'Stress pattern recognition'],
      accuracy: '94.2%',
      color: 'text-primary'
    },
    {
      icon: Mic,
      title: 'Voice Pattern Analysis',
      description: 'Deep learning algorithms process vocal characteristics, tone, and speech patterns to identify stress-related changes.',
      features: ['Vocal stress markers', 'Speech rhythm analysis', 'Tone classification', 'Emotional prosody detection'],
      accuracy: '91.7%',
      color: 'text-accent'
    },
    {
      icon: Activity,
      title: 'Physiological Monitoring',
      description: 'Multi-sensor fusion combines heart rate, skin conductance, and motion data for comprehensive stress assessment.',
      features: ['Heart rate variability', 'Skin conductance analysis', 'Motion pattern detection', 'Biometric correlation'],
      accuracy: '96.5%',
      color: 'text-primary'
    },
    {
      icon: BarChart3,
      title: 'Behavioral Survey AI',
      description: 'Contextual analysis of self-reported data combined with machine learning to enhance prediction accuracy.',
      features: ['Context-aware scoring', 'Behavioral pattern analysis', 'Adaptive questionnaires', 'Predictive modeling'],
      accuracy: '88.3%',
      color: 'text-accent'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Privacy-First Design',
      description: 'All data processing happens locally with end-to-end encryption.',
      color: 'text-primary'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Instant stress detection with sub-second response times.',
      color: 'text-accent'
    },
    {
      icon: Target,
      title: 'Personalized Insights',
      description: 'AI models adapt to individual stress patterns over time.',
      color: 'text-primary'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Advanced AI Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Four AI Models</span>
            <br />
            <span className="text-foreground">Working in Harmony</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our multimodal AI system combines cutting-edge machine learning models 
            to provide the most accurate stress detection available.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <IconComponent className={`h-6 w-6 ${tech.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{tech.title}</h3>
                    <div className="text-sm text-accent font-medium">
                      {tech.accuracy} accuracy
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{tech.description}</p>
                
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/30 rounded-full mb-4">
                  <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Technical Specs */}
        <div className="mt-16 glass-card p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">98.7%</div>
              <div className="text-sm text-muted-foreground">Overall Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">&lt;500ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">4</div>
              <div className="text-sm text-muted-foreground">AI Models</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;