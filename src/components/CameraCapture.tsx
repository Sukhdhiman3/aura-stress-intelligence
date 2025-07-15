import { useState, useRef, useCallback } from 'react';
import { Camera, CameraOff, RotateCcw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const CameraCapture = () => {
  const [isActive, setIsActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const startCamera = useCallback(async () => {
    try {
      setIsLoading(true);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: 640, 
          height: 480,
          facingMode: 'user'
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsActive(true);
      }
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsActive(false);
  }, []);

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setCapturedImage(imageData);
        stopCamera();
        
        toast({
          title: "Photo Captured",
          description: "Face data captured successfully for stress analysis.",
        });
      }
    }
  }, [stopCamera, toast]);

  const resetCapture = useCallback(() => {
    setCapturedImage(null);
  }, []);

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-3 mb-4">
        <Camera className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Face Recognition Sensor</h3>
      </div>
      
      <div className="space-y-4">
        {/* Camera Preview */}
        <div className="relative bg-secondary/50 rounded-lg overflow-hidden aspect-video">
          {capturedImage ? (
            <img 
              src={capturedImage} 
              alt="Captured face" 
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-full object-cover ${isActive ? 'block' : 'hidden'}`}
              />
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <CameraOff className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Camera inactive</p>
                  </div>
                </div>
              )}
            </>
          )}
          
          {/* Capture overlay */}
          {isActive && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-4 border-2 border-primary/50 rounded-lg">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          {!isActive && !capturedImage && (
            <Button 
              onClick={startCamera}
              disabled={isLoading}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Activating...
                </>
              ) : (
                <>
                  <Camera className="h-4 w-4 mr-2" />
                  Activate Camera
                </>
              )}
            </Button>
          )}
          
          {isActive && (
            <>
              <Button 
                onClick={capturePhoto}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Check className="h-4 w-4 mr-2" />
                Capture Face
              </Button>
              <Button 
                onClick={stopCamera}
                variant="outline"
                className="glass-button"
              >
                <CameraOff className="h-4 w-4" />
              </Button>
            </>
          )}
          
          {capturedImage && (
            <Button 
              onClick={resetCapture}
              variant="outline"
              className="flex-1 glass-button"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake
            </Button>
          )}
        </div>

        {/* Status */}
        <div className="text-sm text-muted-foreground">
          {capturedImage ? (
            <span className="text-accent">✓ Face data captured</span>
          ) : isActive ? (
            <span className="text-primary">● Camera active - Position your face in frame</span>
          ) : (
            <span>Click to activate camera for facial emotion analysis</span>
          )}
        </div>
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default CameraCapture;