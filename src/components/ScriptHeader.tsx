
import React from 'react';
import { Sword, Shield, Activity } from 'lucide-react';

const ScriptHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="relative flex items-center justify-center w-16 h-16 mb-2">
        <div className="absolute inset-0 hexagon bg-solo animate-pulse-blue"></div>
        <Sword className="text-white z-10" size={24} />
      </div>
      
      <h1 className="text-2xl font-bold gradient-text tracking-wider mb-1">DRAGON BLOX ASCENSION</h1>
      <div className="flex items-center text-solo-light text-sm">
        <Activity className="w-4 h-4 mr-1" />
        <span>SYSTEM ONLINE</span>
      </div>
      
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-solo to-transparent my-4"></div>
      
      <div className="flex space-x-6 text-sm text-gray-300">
        <div className="flex items-center">
          <Shield className="w-4 h-4 mr-1 text-solo-light" />
          <span>SECURE MODE</span>
        </div>
        <div className="flex items-center">
          <Activity className="w-4 h-4 mr-1 text-solo-light" />
          <span>v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default ScriptHeader;
