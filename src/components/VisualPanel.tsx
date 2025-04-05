
import React, { useState } from 'react';
import FeatureToggle from './FeatureToggle';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, Users, BarChart3, Target } from 'lucide-react';

const VisualPanel: React.FC = () => {
  const [playerESP, setPlayerESP] = useState(false);
  const [npcESP, setNpcESP] = useState(false);
  const [itemESP, setItemESP] = useState(false);
  const [espDistance, setEspDistance] = useState([500]);
  const [espColor, setEspColor] = useState("dynamic");
  const [showPower, setShowPower] = useState(true);
  const [showHealth, setShowHealth] = useState(true);
  const [showDistance, setShowDistance] = useState(true);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3 mb-2">
        <div className={`p-3 rounded-md border border-solo/30 flex flex-col items-center justify-center transition-all ${playerESP ? 'bg-solo/20' : 'bg-solo-muted/10'}`}>
          <button onClick={() => setPlayerESP(!playerESP)} className="w-full h-full flex flex-col items-center">
            <Users className={`w-6 h-6 mb-1 ${playerESP ? 'text-solo-light' : 'text-gray-400'}`} />
            <span className={`text-xs ${playerESP ? 'text-white' : 'text-gray-400'}`}>Players</span>
          </button>
        </div>
        
        <div className={`p-3 rounded-md border border-solo/30 flex flex-col items-center justify-center transition-all ${npcESP ? 'bg-solo/20' : 'bg-solo-muted/10'}`}>
          <button onClick={() => setNpcESP(!npcESP)} className="w-full h-full flex flex-col items-center">
            <Target className={`w-6 h-6 mb-1 ${npcESP ? 'text-solo-light' : 'text-gray-400'}`} />
            <span className={`text-xs ${npcESP ? 'text-white' : 'text-gray-400'}`}>NPCs</span>
          </button>
        </div>
        
        <div className={`p-3 rounded-md border border-solo/30 flex flex-col items-center justify-center transition-all ${itemESP ? 'bg-solo/20' : 'bg-solo-muted/10'}`}>
          <button onClick={() => setItemESP(!itemESP)} className="w-full h-full flex flex-col items-center">
            <Eye className={`w-6 h-6 mb-1 ${itemESP ? 'text-solo-light' : 'text-gray-400'}`} />
            <span className={`text-xs ${itemESP ? 'text-white' : 'text-gray-400'}`}>Items</span>
          </button>
        </div>
      </div>

      <div className="p-3 border border-solo/30 rounded-md bg-solo-muted/10">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm text-white">ESP Distance</label>
              <span className="text-xs text-solo-light">{espDistance[0]} studs</span>
            </div>
            <Slider 
              value={espDistance} 
              onValueChange={setEspDistance} 
              max={1000} 
              step={10}
              className="[&_[data-orientation=horizontal]]:h-2 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[data-orientation=horizontal]]:bg-solo/30"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-white">ESP Color Mode</label>
            <Select value={espColor} onValueChange={setEspColor}>
              <SelectTrigger className="w-full border-solo/30 bg-solo-muted/20">
                <SelectValue placeholder="Select color mode" />
              </SelectTrigger>
              <SelectContent className="bg-solo-muted border-solo/30">
                <SelectItem value="dynamic">Dynamic (Based on Power)</SelectItem>
                <SelectItem value="team">Team Colors</SelectItem>
                <SelectItem value="custom">Custom Colors</SelectItem>
                <SelectItem value="rainbow">Rainbow Effect</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-white mb-2">Display Information</p>
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => setShowPower(!showPower)}
              className={`text-xs p-2 border rounded ${showPower ? 'bg-solo/30 border-solo/50 text-white' : 'bg-solo-muted/10 border-solo/20 text-gray-400'}`}
            >
              <BarChart3 className="w-4 h-4 mx-auto mb-1" />
              Power
            </button>
            <button 
              onClick={() => setShowHealth(!showHealth)}
              className={`text-xs p-2 border rounded ${showHealth ? 'bg-solo/30 border-solo/50 text-white' : 'bg-solo-muted/10 border-solo/20 text-gray-400'}`}
            >
              <svg className="w-4 h-4 mx-auto mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Health
            </button>
            <button 
              onClick={() => setShowDistance(!showDistance)}
              className={`text-xs p-2 border rounded ${showDistance ? 'bg-solo/30 border-solo/50 text-white' : 'bg-solo-muted/10 border-solo/20 text-gray-400'}`}
            >
              <svg className="w-4 h-4 mx-auto mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 21L12 17M12 17L16 21M12 17V12M12 12V4M12 12H4M12 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Distance
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-solo-light to-solo rounded-lg blur opacity-20"></div>
        <button className="relative solo-button w-full py-2">
          UPDATE ESP SETTINGS
        </button>
      </div>
    </div>
  );
};

export default VisualPanel;
