import { useState } from 'react';
import { Brain, Zap, Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface PredictionResult {
  stressLevel: 'low' | 'moderate' | 'high';
  confidence: number;
  modalityContributions: {
    facial: number;
    voice: number;
    physiological: number;
    survey: number;
  };
  insights: string[];
}

const StressPrediction = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const { toast } = useToast();

  const mockPrediction = (): PredictionResult => {
    const stressLevels = ['low', 'moderate', 'high'] as const;
    const randomStressLevel = stressLevels[Math.floor(Math.random() * stressLevels.length)];
    
    return {
      stressLevel: randomStressLevel,
      confidence: Math.floor(Math.random() * 20) + 80, // 80-100%
      modalityContributions: {
        facial: Math.floor(Math.random() * 30) + 20,
        voice: Math.floor(Math.random() * 30) + 20,
        physiological: Math.floor(Math.random() * 30) + 20,
        survey: Math.floor(Math.random() * 30) + 20
      },
      insights: [
        'Facial expressions indicate mild tension',
        'Voice patterns show normal emotional state',
        'Physiological markers within normal range',
        'Self-reported stress levels are consistent with biometric data'
      ]
    };
  };

  const handlePrediction = async () => {
    setIsAnalyzing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const prediction = mockPrediction();
      setResult(prediction);
      
      toast({
        title: "Analysis Complete",
        description: `Stress level: ${prediction.stressLevel.toUpperCase()} (${prediction.confidence}% confidence)`,
        variant: prediction.stressLevel === 'high' ? 'destructive' : 'default'
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Unable to complete stress analysis. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getStressColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-500';
      case 'moderate': return 'text-yellow-500';
      case 'high': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  const getStressIcon = (level: string) => {
    switch (level) {
      case 'low': return CheckCircle;
      case 'moderate': return AlertTriangle;
      case 'high': return AlertTriangle;
      default: return Brain;
    }
  };

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">AI Stress Analysis</h3>
      </div>
      
      {!result ? (
        <div className="space-y-6">
          {/* Prediction Button */}
          <div className="text-center">
            <Button
              onClick={handlePrediction}
              disabled={isAnalyzing}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-4 hover-glow"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Analyzing Stress Patterns...
                </>
              ) : (
                <>
                  <Target className="h-5 w-5 mr-3" />
                  Predict Stress Level
                </>
              )}
            </Button>
          </div>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing facial expressions</span>
                  <span className="text-accent">●</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Analyzing voice patterns</span>
                  <span className="text-accent">●</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Evaluating physiological signals</span>
                  <span className="text-accent">●</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Integrating survey responses</span>
                  <span className="text-accent">●</span>
                </div>
              </div>
              
              <Progress value={33} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">
                AI models are processing your multimodal data...
              </p>
            </div>
          )}

          {/* Information */}
          <div className="p-4 bg-secondary/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">AI Analysis Features</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Facial emotion recognition</li>
              <li>• Voice stress pattern analysis</li>
              <li>• Physiological signal processing</li>
              <li>• Contextual behavior assessment</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Result Header */}
          <div className="text-center p-6 bg-secondary/30 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              {(() => {
                const Icon = getStressIcon(result.stressLevel);
                return <Icon className={`h-8 w-8 ${getStressColor(result.stressLevel)}`} />;
              })()}
              <span className={`text-2xl font-bold ${getStressColor(result.stressLevel)}`}>
                {result.stressLevel.toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Stress Level Detected
            </p>
          </div>

          {/* Confidence Score */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Confidence Score</span>
              <span className="text-sm font-semibold text-accent">{result.confidence}%</span>
            </div>
            <Progress value={result.confidence} className="h-2" />
          </div>

          {/* Modality Contributions */}
          <div>
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Data Source Contributions
            </h4>
            <div className="space-y-2">
              {Object.entries(result.modalityContributions).map(([key, value]) => (
                <div key={key} className="flex items-center gap-3">
                  <div className="w-16 text-xs text-muted-foreground capitalize">{key}</div>
                  <div className="flex-1">
                    <Progress value={value} className="h-1" />
                  </div>
                  <div className="text-xs font-medium">{value}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <h4 className="text-sm font-medium mb-3">AI Insights</h4>
            <ul className="space-y-2">
              {result.insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>

          {/* Action */}
          <Button 
            onClick={() => setResult(null)}
            variant="outline"
            className="w-full glass-button"
          >
            New Analysis
          </Button>
        </div>
      )}
    </div>
  );
};

export default StressPrediction;