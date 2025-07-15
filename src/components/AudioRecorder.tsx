import { useState, useRef, useCallback } from 'react';
import { Mic, MicOff, Square, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  const startRecording = useCallback(async () => {
    try {
      setIsLoading(true);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      });
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
        
        toast({
          title: "Recording Complete",
          description: "Voice data captured successfully for emotion analysis.",
        });
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (error) {
      toast({
        title: "Microphone Error",
        description: "Unable to access microphone. Please check permissions.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [isRecording]);

  const playAudio = useCallback(() => {
    if (audioBlob && audioRef.current) {
      const url = URL.createObjectURL(audioBlob);
      audioRef.current.src = url;
      audioRef.current.play();
      setIsPlaying(true);
      
      audioRef.current.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(url);
      };
    }
  }, [audioBlob]);

  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const resetRecording = useCallback(() => {
    setAudioBlob(null);
    setRecordingTime(0);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.src = '';
    }
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-3 mb-4">
        <Mic className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-semibold">Voice Emotion Sensor</h3>
      </div>
      
      <div className="space-y-4">
        {/* Audio Visualizer */}
        <div className="relative bg-secondary/50 rounded-lg p-6 h-32 flex items-center justify-center">
          {isRecording ? (
            <div className="flex items-center gap-1">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="w-1 bg-accent rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 40 + 20}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.5 + Math.random()}s`
                  }}
                />
              ))}
            </div>
          ) : audioBlob ? (
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">{formatTime(recordingTime)}</div>
              <div className="text-sm text-muted-foreground">Recording captured</div>
            </div>
          ) : (
            <div className="text-center">
              <MicOff className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">No audio recorded</p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          {!isRecording && !audioBlob && (
            <Button 
              onClick={startRecording}
              disabled={isLoading}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Initializing...
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4 mr-2" />
                  Start Recording
                </>
              )}
            </Button>
          )}
          
          {isRecording && (
            <>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono">{formatTime(recordingTime)}</span>
                </div>
              </div>
              <Button 
                onClick={stopRecording}
                variant="outline"
                className="glass-button"
              >
                <Square className="h-4 w-4" />
              </Button>
            </>
          )}
          
          {audioBlob && (
            <>
              <Button 
                onClick={isPlaying ? pauseAudio : playAudio}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Play
                  </>
                )}
              </Button>
              <Button 
                onClick={resetRecording}
                variant="outline"
                className="glass-button"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Status */}
        <div className="text-sm text-muted-foreground">
          {audioBlob ? (
            <span className="text-accent">✓ Voice data captured ({formatTime(recordingTime)})</span>
          ) : isRecording ? (
            <span className="text-red-500">● Recording - Speak naturally for emotion analysis</span>
          ) : (
            <span>Click to record your voice for emotion detection</span>
          )}
        </div>
      </div>
      
      <audio ref={audioRef} className="hidden" />
    </div>
  );
};

export default AudioRecorder;