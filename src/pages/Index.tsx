
import ScriptInterface from '@/components/ScriptInterface';

const Index = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 gradient-text">DRAGON BLOX ASCENSION</h1>
        <p className="text-xl text-solo-light mb-8">Ultimate Script Interface</p>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          This is an interactive demo of what a Dragon Blox Ultimate script interface might look like, 
          inspired by the futuristic UI of Solo Leveling. The interface is draggable and collapsible.
        </p>
      </div>
      
      {/* The script interface is rendered as an overlay */}
      <ScriptInterface />
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Hexagonal grid pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-[radial-gradient(#4361ee_1px,transparent_1px)] [background-size:24px_24px] [background-position:center]"></div>
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-solo rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-solo-light rounded-full filter blur-[100px] opacity-5 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Index;
