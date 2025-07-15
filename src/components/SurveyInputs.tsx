import { useState } from 'react';
import { ClipboardList, User, Battery, Users, Heart } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const SurveyInputs = () => {
  const [surveyData, setSurveyData] = useState({
    activity: '',
    pressure: '',
    energy: '',
    companionship: '',
    fatigue: ''
  });

  const handleSelectChange = (field: string, value: string) => {
    setSurveyData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const surveyFields = [
    {
      id: 'activity',
      label: 'Current Activity',
      placeholder: 'Select your current activity',
      icon: User,
      color: 'text-primary',
      options: [
        { value: 'working', label: 'Working' },
        { value: 'studying', label: 'Studying' },
        { value: 'exercising', label: 'Exercising' },
        { value: 'socializing', label: 'Socializing' },
        { value: 'relaxing', label: 'Relaxing' },
        { value: 'commuting', label: 'Commuting' },
        { value: 'eating', label: 'Eating' },
        { value: 'sleeping', label: 'Sleeping' }
      ]
    },
    {
      id: 'pressure',
      label: 'Pressure Level',
      placeholder: 'How much pressure do you feel?',
      icon: Battery,
      color: 'text-accent',
      options: [
        { value: '1', label: 'Very Low' },
        { value: '2', label: 'Low' },
        { value: '3', label: 'Moderate' },
        { value: '4', label: 'High' },
        { value: '5', label: 'Very High' }
      ]
    },
    {
      id: 'energy',
      label: 'Energy Level',
      placeholder: 'How energetic do you feel?',
      icon: Battery,
      color: 'text-primary',
      options: [
        { value: '1', label: 'Very Low' },
        { value: '2', label: 'Low' },
        { value: '3', label: 'Moderate' },
        { value: '4', label: 'High' },
        { value: '5', label: 'Very High' }
      ]
    },
    {
      id: 'companionship',
      label: 'Social Context',
      placeholder: 'Who are you with?',
      icon: Users,
      color: 'text-accent',
      options: [
        { value: 'alone', label: 'Alone' },
        { value: 'family', label: 'With Family' },
        { value: 'friends', label: 'With Friends' },
        { value: 'colleagues', label: 'With Colleagues' },
        { value: 'strangers', label: 'With Strangers' },
        { value: 'mixed', label: 'Mixed Group' }
      ]
    },
    {
      id: 'fatigue',
      label: 'Fatigue Level',
      placeholder: 'How tired do you feel?',
      icon: Heart,
      color: 'text-primary',
      options: [
        { value: '1', label: 'Very Alert' },
        { value: '2', label: 'Alert' },
        { value: '3', label: 'Moderate' },
        { value: '4', label: 'Tired' },
        { value: '5', label: 'Very Tired' }
      ]
    }
  ];

  const getCompletionPercentage = () => {
    const completed = Object.values(surveyData).filter(Boolean).length;
    return Math.round((completed / surveyFields.length) * 100);
  };

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <ClipboardList className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-semibold">Self-Report Survey</h3>
      </div>
      
      <div className="space-y-4">
        {surveyFields.map((field) => {
          const IconComponent = field.icon;
          return (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id} className="flex items-center gap-2">
                <IconComponent className={`h-4 w-4 ${field.color}`} />
                {field.label}
              </Label>
              <Select
                value={surveyData[field.id as keyof typeof surveyData]}
                onValueChange={(value) => handleSelectChange(field.id, value)}
              >
                <SelectTrigger className="glass-card border-2 border-border hover:border-accent transition-colors">
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent className="glass-card border border-border/20 backdrop-blur-xl">
                  {field.options.map((option) => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value}
                      className="hover:bg-accent/20 focus:bg-accent/20 transition-colors"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-muted-foreground">Survey Progress</div>
          <div className="text-sm font-semibold text-accent">{getCompletionPercentage()}%</div>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${getCompletionPercentage()}%` }}
          />
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          {Object.values(surveyData).filter(Boolean).length} / {surveyFields.length} questions completed
        </div>
      </div>

      {/* Contextual Insights */}
      {getCompletionPercentage() > 60 && (
        <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
          <div className="text-sm font-medium text-accent mb-1">Contextual Insights</div>
          <div className="text-xs text-muted-foreground">
            Survey data will be combined with biometric sensors for enhanced stress prediction accuracy.
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveyInputs;