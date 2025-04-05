
import React, { useState } from 'react';
import FeatureToggle from './FeatureToggle';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles, ArrowUpCircle } from 'lucide-react';

const RebirthPanel: React.FC = () => {
  const [autoRebirth, setAutoRebirth] = useState(false);
  const [rebirthThreshold, setRebirthThreshold] = useState("1000000");
  const [preserveStats, setPreserveStats] = useState(true);
  const [preserveItems, setPreserveItems] = useState(true);
  const [rebirthType, setRebirthType] = useState("standard");

  return (
    <div className="space-y-4">
      <FeatureToggle 
        title="Auto Rebirth" 
        description="Automatically rebirth when conditions are met while preserving selected stats and items."
        enabled={autoRebirth} 
        onToggle={setAutoRebirth} 
      />

      {autoRebirth && (
        <div className="space-y-4 p-3 border border-solo/30 rounded-md bg-solo-muted/10">
          <div className="space-y-2">
            <label className="text-sm text-white">Rebirth Type</label>
            <Select value={rebirthType} onValueChange={setRebirthType}>
              <SelectTrigger className="w-full border-solo/30 bg-solo-muted/20">
                <SelectValue placeholder="Select rebirth type" />
              </SelectTrigger>
              <SelectContent className="bg-solo-muted border-solo/30">
                <SelectItem value="standard">Standard Rebirth</SelectItem>
                <SelectItem value="advanced">Advanced Rebirth</SelectItem>
                <SelectItem value="celestial">Celestial Rebirth</SelectItem>
                <SelectItem value="divine">Divine Rebirth</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-white">Power Threshold</label>
            <div className="flex">
              <Input 
                value={rebirthThreshold} 
                onChange={(e) => setRebirthThreshold(e.target.value)}
                className="border-solo/30 bg-solo-muted/20"
                placeholder="Enter power level"
              />
              <div className="ml-2 px-3 bg-solo/80 rounded-md flex items-center">
                <ArrowUpCircle className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-sm text-white">Preservation Settings</span>
            
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="preserve-stats" 
                checked={preserveStats} 
                onCheckedChange={(checked) => setPreserveStats(!!checked)}
                className="data-[state=checked]:bg-solo data-[state=checked]:border-solo-light mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="preserve-stats" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
                  Preserve Stats
                </label>
                <p className="text-xs text-gray-400">Keeps your strength, defense, and speed stats after rebirth</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="preserve-items" 
                checked={preserveItems} 
                onCheckedChange={(checked) => setPreserveItems(!!checked)}
                className="data-[state=checked]:bg-solo data-[state=checked]:border-solo-light mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="preserve-items" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
                  Preserve Items
                </label>
                <p className="text-xs text-gray-400">Keeps your weapons, armor, and special items after rebirth</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between p-3 border border-solo/30 rounded-md bg-solo-muted/20 my-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-solo-dark/60 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-solo-light" />
          </div>
          <div>
            <p className="text-sm text-white">Rebirth Multiplier</p>
            <p className="text-xs text-solo-light">Current: <span className="font-bold">x10.5</span></p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-xs text-gray-400">Next Rebirth</p>
          <p className="text-sm text-white font-medium">x12.8</p>
        </div>
      </div>

      <div className="mt-4 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-solo via-solo-accent to-solo-light rounded-lg blur opacity-30"></div>
        <button className="relative solo-button w-full py-2.5 font-medium bg-gradient-to-r from-solo to-solo-accent">
          INITIATE MANUAL REBIRTH
        </button>
      </div>
    </div>
  );
};

export default RebirthPanel;
