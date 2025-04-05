
import React, { useState } from 'react';
import FeatureToggle from './FeatureToggle';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FarmingPanel: React.FC = () => {
  const [autoFarm, setAutoFarm] = useState(false);
  const [farmSpeed, setFarmSpeed] = useState([50]);
  const [farmTarget, setFarmTarget] = useState("closest");
  const [autoCollect, setAutoCollect] = useState(false);
  const [autoQuest, setAutoQuest] = useState(false);

  return (
    <div className="space-y-4">
      <FeatureToggle 
        title="Auto Farm" 
        description="Automatically attacks and farms the nearest enemies based on your selected target preference."
        enabled={autoFarm} 
        onToggle={setAutoFarm} 
      />

      {autoFarm && (
        <div className="space-y-4 p-3 border border-solo/30 rounded-md bg-solo-muted/10">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm text-white">Farm Speed</label>
              <span className="text-xs text-solo-light">{farmSpeed[0]}%</span>
            </div>
            <Slider 
              value={farmSpeed} 
              onValueChange={setFarmSpeed} 
              max={100} 
              step={1}
              className="[&_[data-orientation=horizontal]]:h-2 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[data-orientation=horizontal]]:bg-solo/30"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-white">Target Selection</label>
            <Select value={farmTarget} onValueChange={setFarmTarget}>
              <SelectTrigger className="w-full border-solo/30 bg-solo-muted/20">
                <SelectValue placeholder="Select target" />
              </SelectTrigger>
              <SelectContent className="bg-solo-muted border-solo/30">
                <SelectItem value="closest">Closest Enemy</SelectItem>
                <SelectItem value="strongest">Strongest Enemy</SelectItem>
                <SelectItem value="weakest">Weakest Enemy</SelectItem>
                <SelectItem value="highest-xp">Highest XP</SelectItem>
                <SelectItem value="boss">Boss Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      
      <FeatureToggle 
        title="Auto Collect" 
        description="Automatically collects all drops and rewards in your vicinity."
        enabled={autoCollect} 
        onToggle={setAutoCollect} 
      />
      
      <FeatureToggle 
        title="Auto Quest" 
        description="Automatically accepts and completes quests to maximize efficiency."
        enabled={autoQuest} 
        onToggle={setAutoQuest} 
      />

      <div className="mt-4 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-solo via-solo-light to-solo rounded-lg blur opacity-30"></div>
        <button className="relative solo-button w-full py-2.5 font-medium">
          ACTIVATE ALL FARMING FEATURES
        </button>
      </div>
    </div>
  );
};

export default FarmingPanel;
