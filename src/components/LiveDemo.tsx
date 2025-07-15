import { useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CameraCapture from './CameraCapture';
import AudioRecorder from './AudioRecorder';
import PhysiologicalInputs from './PhysiologicalInputs';
import SurveyInputs from './SurveyInputs';
import StressPrediction from './StressPrediction';

const LiveDemo = () => {
  const [demoState, setDemoState] = useState<'idle' | 'recording' | 'completed'>('idle');

  const handleStartDemo = () => {
    setDemoState('recording');
  };

  const handleResetDemo = () => {
    setDemoState('idle');
  };

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Play className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Interactive Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-neural">Live Demo</span>
            <br />
            <span className="text-foreground">Try Our AI System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of multimodal stress detection. Use your camera, 
            microphone, and input sensors to get real-time stress analysis.
          </p>
        </div>

        {/* Demo Controls */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in-up">
          <Button 
            onClick={handleStartDemo}
            disabled={demoState === 'recording'}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground hover-glow"
          >
            <Play className="h-4 w-4 mr-2" />
            Start Demo
          </Button>
          <Button 
            onClick={handleResetDemo}
            variant="outline"
            size="lg"
            className="glass-button"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        {/* Demo Interface */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Sensors */}
          <div className="space-y-6">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-4 text-center">
                <span className="text-gradient-gold">Live Sensors</span>
              </h3>
              <div className="space-y-4">
                <CameraCapture />
                <AudioRecorder />
              </div>
            </div>
          </div>

          {/* Right Column: Inputs & Analysis */}
          <div className="space-y-6">
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-4 text-center">
                <span className="text-gradient-neural">Data Inputs</span>
              </h3>
              <div className="space-y-4">
                <PhysiologicalInputs />
                <SurveyInputs />
              </div>
            </div>
          </div>
        </div>

        {/* Prediction Panel */}
        <div className="mt-8 max-w-2xl mx-auto animate-fade-in-up">
          <StressPrediction />
        </div>

        {/* Instructions */}
        <div className="mt-16 glass-card p-8 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-4 text-center">How to Use the Demo</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-primary">1. Activate Sensors</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Click "Activate Camera" to enable facial emotion detection and "Start Recording" 
                for voice pattern analysis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">2. Input Data</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Fill in physiological sensor values and complete the self-report survey 
                for comprehensive analysis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">3. Analyze</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Click "Predict Stress Level" to run the AI analysis and get your 
                personalized stress assessment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-accent">4. Review Results</h4>
              <p className="text-sm text-muted-foreground mb-4">
                View your stress level, confidence score, and detailed insights from 
                each AI model's contribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;