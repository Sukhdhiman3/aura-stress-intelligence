import { Mail, Phone, MapPin, Send, Clock, Shield, Users } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast({
        title: "Message Failed",
        description: "Unable to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@auraintelligence.com',
      description: 'Get in touch with our team'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Speak with our experts'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'HIPAA compliant and secure'
    },
    {
      icon: Users,
      title: 'Dedicated Success Team',
      description: 'Personal account management'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Mail className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-neural">Ready to Get</span>
            <br />
            <span className="text-foreground">Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our team to learn how our AI-powered stress detection system 
            can transform your organization's approach to wellness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="John Doe"
                    required
                    className="glass-card border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@company.com"
                    required
                    className="glass-card border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your Company Name"
                    className="glass-card border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                    className="glass-card border-border"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-right">
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 bg-secondary/30 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">{info.title}</div>
                          <div className="text-foreground">{info.content}</div>
                          <div className="text-sm text-muted-foreground">{info.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Features */}
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 bg-secondary/30 rounded-lg">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-semibold">{feature.title}</div>
                          <div className="text-sm text-muted-foreground">{feature.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-bold mb-4">Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">General Inquiries</span>
                    <span className="text-sm font-medium text-accent">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Technical Support</span>
                    <span className="text-sm font-medium text-accent">2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Sales Inquiries</span>
                    <span className="text-sm font-medium text-accent">1 hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;