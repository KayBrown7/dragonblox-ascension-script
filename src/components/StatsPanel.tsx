
import React, { useState } from 'react';
import { Progress } from '@/components/ui/progress';

const StatsPanel: React.FC = () => {
  const [playerStats] = useState({
    power: 12500,
    health: 8500,
    defense: 4300,
    speed: 520,
    luck: 350,
    rebirths: 5
  });

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm text-white">Power Level</label>
          <span className="text-xs text-solo-light">{playerStats.power.toLocaleString()}</span>
        </div>
        <Progress value={65} className="h-2.5 [&>div]:bg-solo" />
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm text-white">Health</label>
          <span className="text-xs text-solo-light">{playerStats.health.toLocaleString()}</span>
        </div>
        <Progress value={75} className="h-2.5 [&>div]:bg-green-500" />
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm text-white">Defense</label>
          <span className="text-xs text-solo-light">{playerStats.defense.toLocaleString()}</span>
        </div>
        <Progress value={60} className="h-2.5 [&>div]:bg-blue-500" />
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm text-white">Speed</label>
          <span className="text-xs text-solo-light">{playerStats.speed.toLocaleString()}</span>
        </div>
        <Progress value={45} className="h-2.5 [&>div]:bg-yellow-500" />
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm text-white">Luck</label>
          <span className="text-xs text-solo-light">{playerStats.luck.toLocaleString()}</span>
        </div>
        <Progress value={30} className="h-2.5 [&>div]:bg-purple-500" />
      </div>
      
      <div className="p-3 border border-solo/30 rounded-md bg-solo-muted/20 my-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white">Total Rebirths</p>
            <p className="text-xl font-bold gradient-text">{playerStats.rebirths}</p>
          </div>
          
          <div className="w-16 h-16 relative flex items-center justify-center">
            <div className="absolute inset-0 hexagon border border-solo animate-glow"></div>
            <span className="text-solo-light font-bold text-xl">{playerStats.rebirths}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="solo-button py-2.5">
          CHECK OTHER PLAYERS
        </button>
        <button className="solo-button py-2.5 bg-solo-dark">
          HIDE MY STATS
        </button>
      </div>
    </div>
  );
};

export default StatsPanel;
