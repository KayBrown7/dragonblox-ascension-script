
import React, { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Minimize2, Maximize2, X, ChevronUp, ChevronDown } from 'lucide-react';
import ScriptHeader from './ScriptHeader';
import FarmingPanel from './FarmingPanel';
import VisualPanel from './VisualPanel';
import RebirthPanel from './RebirthPanel';
import StatsPanel from './StatsPanel';

const ScriptInterface: React.FC = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [currentTab, setCurrentTab] = useState('farming');
  const dragRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (dragRef.current) {
      setDragging(true);
      offsetRef.current = { 
        x: e.clientX - dragRef.current.getBoundingClientRect().left,
        y: e.clientY - dragRef.current.getBoundingClientRect().top
      };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const x = e.clientX - offsetRef.current.x;
        const y = e.clientY - offsetRef.current.y;
        setPosition({ x, y });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <div 
      ref={dragRef}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: minimized ? '320px' : '400px',
      }}
      className={`fixed solo-panel transition-all duration-300 z-50`}
    >
      {/* Header with controls */}
      <div 
        className="flex items-center justify-between p-3 cursor-move bg-gradient-to-r from-solo-dark via-solo to-solo-dark"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-solo-light animate-pulse"></div>
          <span className="text-white font-semibold tracking-wider text-sm">DRAGON BLOX ASCENSION</span>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className="text-white/80 hover:text-white transition p-1"
            onClick={toggleMinimize}
          >
            {minimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
          </button>
          
          <button 
            className="text-white/80 hover:text-white transition p-1"
            onClick={toggleCollapse}
          >
            {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>
          
          <button className="text-white/80 hover:text-solo-accent transition p-1">
            <X size={14} />
          </button>
        </div>
      </div>
      
      {/* Main content */}
      {!collapsed && (
        <div className="p-4">
          <ScriptHeader />
          
          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="w-full bg-solo-muted/30 mb-4">
              <TabsTrigger 
                value="farming" 
                className="data-[state=active]:bg-solo data-[state=active]:text-white flex-1"
              >
                Farming
              </TabsTrigger>
              <TabsTrigger 
                value="rebirth" 
                className="data-[state=active]:bg-solo data-[state=active]:text-white flex-1"
              >
                Rebirth
              </TabsTrigger>
              <TabsTrigger 
                value="visuals" 
                className="data-[state=active]:bg-solo data-[state=active]:text-white flex-1"
              >
                ESP
              </TabsTrigger>
              <TabsTrigger 
                value="stats" 
                className="data-[state=active]:bg-solo data-[state=active]:text-white flex-1"
              >
                Stats
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="farming">
              <FarmingPanel />
            </TabsContent>
            
            <TabsContent value="rebirth">
              <RebirthPanel />
            </TabsContent>
            
            <TabsContent value="visuals">
              <VisualPanel />
            </TabsContent>
            
            <TabsContent value="stats">
              <StatsPanel />
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 p-3 border border-solo/30 rounded-md bg-solo-muted/30 text-xs text-center text-gray-400">
            <p>System Status: <span className="text-solo-light">Running</span></p>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-solo-light/30 to-transparent my-2"></div>
            <p>Created with Solo Leveling System Architecture</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScriptInterface;
