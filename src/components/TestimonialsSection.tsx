import { Star, Quote, Building, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer',
      company: 'HealthTech Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b0c21fd7?w=150&h=150&fit=crop&crop=face',
      content: 'The accuracy of this stress detection system is remarkable. We\'ve seen a 40% improvement in early intervention rates since implementing it in our clinics.',
      rating: 5,
      color: 'text-primary'
    },
    {
      name: 'Michael Rodriguez',
      role: 'HR Director',
      company: 'Fortune 500 Corporation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Our employee wellness program has been transformed. The real-time stress monitoring has helped us create a healthier workplace environment.',
      rating: 5,
      color: 'text-accent'
    },
    {
      name: 'Prof. Emma Watson',
      role: 'Research Director',
      company: 'MIT AI Lab',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'The multimodal approach is groundbreaking. This technology represents the future of preventive mental health care.',
      rating: 5,
      color: 'text-primary'
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      company: 'Digital Health Startup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The integration was seamless and the results are impressive. Our users report feeling more in control of their stress levels.',
      rating: 5,
      color: 'text-accent'
    },
    {
      name: 'Dr. Lisa Park',
      role: 'Clinical Psychologist',
      company: 'Wellness Institute',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face',
      content: 'Finally, a tool that provides objective stress measurement. It\'s revolutionizing how we approach mental health assessment.',
      rating: 5,
      color: 'text-primary'
    },
    {
      name: 'James Thompson',
      role: 'CTO',
      company: 'Enterprise Solutions',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      content: 'The technical implementation is flawless. Privacy, security, and accuracy—everything we needed for enterprise deployment.',
      rating: 5,
      color: 'text-accent'
    }
  ];

  const stats = [
    { value: '10M+', label: 'Active Users' },
    { value: '500+', label: 'Healthcare Partners' },
    { value: '98.7%', label: 'Accuracy Rate' },
    { value: '24/7', label: 'Monitoring' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <User className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Trusted by Professionals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">What Our</span>
            <br />
            <span className="text-gradient-gold">Partners Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading healthcare professionals, researchers, and organizations trust 
            our AI-powered stress detection technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-accent opacity-50" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-accent">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mt-16 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Trusted by Leading Organizations</h3>
            <p className="text-muted-foreground">Join 500+ healthcare and enterprise partners</p>
          </div>
          <div className="flex justify-center items-center gap-12 opacity-50">
            {/* Company logos would go here */}
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <Building className="h-5 w-5" />
              <span className="text-sm">HealthTech Inc.</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <Building className="h-5 w-5" />
              <span className="text-sm">MedAI Solutions</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <Building className="h-5 w-5" />
              <span className="text-sm">Wellness Corp</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2">
              <Building className="h-5 w-5" />
              <span className="text-sm">Enterprise Health</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-muted-foreground mb-6">
              Join leading healthcare organizations and enterprises using our 
              AI-powered stress detection technology.
            </p>
            <button className="glass-button px-8 py-3 hover-glow">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;