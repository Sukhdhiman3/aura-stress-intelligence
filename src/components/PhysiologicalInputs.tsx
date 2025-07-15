import { useState } from 'react';
import { Activity, Thermometer, Zap, Move3D } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PhysiologicalInputs = () => {
  const [physiologicalData, setPhysiologicalData] = useState({
    eda: '',
    bvp: '',
    temp: '',
    x: '',
    y: '',
    z: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setPhysiologicalData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const inputFields = [
    {
      id: 'eda',
      label: 'EDA (Electrodermal Activity)',
      placeholder: '0.0 - 10.0 µS',
      icon: Zap,
      description: 'Skin conductance measurement',
      color: 'text-primary'
    },
    {
      id: 'bvp',
      label: 'BVP (Blood Volume Pulse)',
      placeholder: '60 - 180 BPM',
      icon: Activity,
      description: 'Heart rate variability',
      color: 'text-accent'
    },
    {
      id: 'temp',
      label: 'Temperature',
      placeholder: '36.0 - 38.0 °C',
      icon: Thermometer,
      description: 'Body temperature',
      color: 'text-primary'
    },
    {
      id: 'x',
      label: 'X-Axis Motion',
      placeholder: '-2.0 to 2.0 g',
      icon: Move3D,
      description: 'Accelerometer X-axis',
      color: 'text-accent'
    },
    {
      id: 'y',
      label: 'Y-Axis Motion',
      placeholder: '-2.0 to 2.0 g',
      icon: Move3D,
      description: 'Accelerometer Y-axis',
      color: 'text-primary'
    },
    {
      id: 'z',
      label: 'Z-Axis Motion',
      placeholder: '-2.0 to 2.0 g',
      icon: Move3D,
      description: 'Accelerometer Z-axis',
      color: 'text-accent'
    }
  ];

  const getValidationColor = (value: string, field: string) => {
    if (!value) return 'border-border';
    
    const num = parseFloat(value);
    if (isNaN(num)) return 'border-destructive';
    
    // Basic validation ranges
    const ranges = {
      eda: [0, 10],
      bvp: [40, 200],
      temp: [35, 40],
      x: [-3, 3],
      y: [-3, 3],
      z: [-3, 3]
    };
    
    const [min, max] = ranges[field as keyof typeof ranges];
    return num >= min && num <= max ? 'border-accent' : 'border-destructive';
  };

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Physiological Sensors</h3>
      </div>
      
      <div className="space-y-4">
        {inputFields.map((field) => {
          const IconComponent = field.icon;
          return (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id} className="flex items-center gap-2">
                <IconComponent className={`h-4 w-4 ${field.color}`} />
                {field.label}
              </Label>
              <Input
                id={field.id}
                type="number"
                step="0.1"
                placeholder={field.placeholder}
                value={physiologicalData[field.id as keyof typeof physiologicalData]}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                className={`glass-card border-2 ${getValidationColor(physiologicalData[field.id as keyof typeof physiologicalData], field.id)} transition-colors`}
              />
              <p className="text-xs text-muted-foreground">{field.description}</p>
            </div>
          );
        })}
      </div>

      {/* Data Summary */}
      <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
        <div className="text-sm text-muted-foreground mb-2">Data Completeness</div>
        <div className="flex gap-2 mb-2">
          {inputFields.map((field) => (
            <div
              key={field.id}
              className={`h-2 flex-1 rounded ${
                physiologicalData[field.id as keyof typeof physiologicalData] 
                  ? 'bg-accent' 
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-muted-foreground">
          {Object.values(physiologicalData).filter(Boolean).length} / {inputFields.length} sensors active
        </div>
      </div>
    </div>
  );
};

export default PhysiologicalInputs;