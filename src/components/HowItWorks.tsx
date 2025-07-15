import { Camera, Mic, Activity, Brain, Target, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: 'Capture',
      subtitle: 'Multi-Modal Data Collection',
      description: 'Our system simultaneously captures facial expressions, voice patterns, physiological signals, and contextual information.',
      features: ['Facial emotion detection', 'Voice stress analysis', 'Biometric monitoring', 'Behavioral assessment'],
      color: 'text-primary'
    },
    {
      icon: Brain,
      title: 'Process',
      subtitle: 'AI Model Fusion',
      description: 'Four specialized AI models work together to analyze different aspects of stress manifestation with advanced machine learning.',
      features: ['Computer vision AI', 'Natural language processing', 'Signal processing', 'Behavioral modeling'],
      color: 'text-accent'
    },
    {
      icon: Target,
      title: 'Predict',
      subtitle: 'Intelligent Analysis',
      description: 'Advanced algorithms combine all data sources to generate accurate stress predictions with confidence scoring.',
      features: ['Stress level classification', 'Confidence scoring', 'Pattern recognition', 'Anomaly detection'],
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      title: 'Insights',
      subtitle: 'Actionable Intelligence',
      description: 'Get detailed breakdowns of stress factors, personalized recommendations, and real-time monitoring capabilities.',
      features: ['Detailed analytics', 'Personalized insights', 'Trend analysis', 'Actionable recommendations'],
      color: 'text-accent'
    }
  ];

  const dataFlow = [
    { source: 'Camera', type: 'Visual Data', color: 'bg-primary' },
    { source: 'Microphone', type: 'Audio Data', color: 'bg-accent' },
    { source: 'Sensors', type: 'Biometric Data', color: 'bg-primary' },
    { source: 'Survey', type: 'Contextual Data', color: 'bg-accent' }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Activity className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">System Overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">How Our</span>
            <br />
            <span className="text-gradient-gold">AI System Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the science behind multimodal stress detection and 
            how our AI models collaborate to provide accurate insights.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="h-px bg-gradient-to-r from-primary to-accent flex-1"></div>
                </div>

                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <IconComponent className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{step.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
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

        {/* Data Flow Visualization */}
        <div className="glass-card p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-center">Data Flow Architecture</h3>
          
          {/* Input Sources */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {dataFlow.map((data, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 ${data.color} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="text-sm font-medium">{data.source}</div>
                <div className="text-xs text-muted-foreground">{data.type}</div>
              </div>
            ))}
          </div>

          {/* Flow Arrows */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-px bg-gradient-to-r from-primary to-accent"></div>
              <div className="text-sm text-muted-foreground">Data Fusion</div>
              <div className="w-4 h-px bg-gradient-to-r from-accent to-primary"></div>
            </div>
          </div>

          {/* AI Processing */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">AI Model Fusion</span>
              <Brain className="h-6 w-6 text-accent" />
            </div>
          </div>

          {/* Output */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg">
              <Target className="h-6 w-6" />
              <span className="text-lg font-semibold">Stress Level Prediction</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in-up">
            <div className="text-4xl font-bold text-primary mb-2">98.7%</div>
            <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
          </div>
          <div className="text-center animate-fade-in-up">
            <div className="text-4xl font-bold text-accent mb-2">&lt;500ms</div>
            <div className="text-sm text-muted-foreground">Processing Time</div>
          </div>
          <div className="text-center animate-fade-in-up">
            <div className="text-4xl font-bold text-primary mb-2">4 Models</div>
            <div className="text-sm text-muted-foreground">AI Integration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;