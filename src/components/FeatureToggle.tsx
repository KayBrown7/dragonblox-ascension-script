
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FeatureToggleProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: (checked: boolean) => void;
}

const FeatureToggle: React.FC<FeatureToggleProps> = ({ title, description, enabled, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-3 border border-solo/30 rounded-md bg-solo-muted/20 mb-3 backdrop-blur-sm">
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-medium text-white">{title}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="ml-1.5">
                  <Info className="w-3.5 h-3.5 text-solo-light opacity-70" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-solo-dark text-white border-solo max-w-xs">
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <span className="text-xs text-gray-400">{enabled ? 'Active' : 'Inactive'}</span>
      </div>
      
      <Switch
        checked={enabled}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-solo data-[state=checked]:border-solo-light"
      />
    </div>
  );
};

export default FeatureToggle;
