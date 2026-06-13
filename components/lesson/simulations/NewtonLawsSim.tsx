"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Box, MoveRight } from "lucide-react";

export function NewtonLawsSim({ onComplete }: { onComplete: (success: boolean) => void }) {
  const [mass, setMass] = useState(10); // kg
  const [force, setForce] = useState(0); // N
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // F = ma -> a = F/m
  const acceleration = force / mass;

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (isRunning) {
        const deltaTime = (time - lastTime) / 1000; // in seconds
        
        setVelocity((prevV) => prevV + acceleration * deltaTime * 10); // *10 for visual speedup
        setPosition((prevP) => {
          const newPos = prevP + velocity * deltaTime * 10;
          if (newPos > 100) {
            return 100;
          }
          return newPos;
        });
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    if (isRunning) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, acceleration, velocity]);

  // Handle completion side-effect safely
  useEffect(() => {
    if (position >= 100 && isRunning) {
      setIsRunning(false);
      onComplete(true);
    }
  }, [position, isRunning, onComplete]);

  const handleApplyForce = () => {
    if (force > 0) {
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setPosition(0);
    setVelocity(0);
  };

  return (
    <div className="space-y-6">
      
      {/* Simulation Screen */}
      <div className="card-3d bg-slate-900 border-slate-800 p-6 h-64 md:h-[400px] relative overflow-hidden flex flex-col justify-end rounded-3xl">
        
        {/* Graph Paper Grid Background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Telemetry HUD */}
        <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm border border-slate-700 p-3 rounded-xl z-20 font-mono text-xs text-brand-teal">
          <div className="flex justify-between gap-4"><span>Force (F):</span> <span className="text-white">{force} N</span></div>
          <div className="flex justify-between gap-4"><span>Mass (m):</span> <span className="text-white">{mass} kg</span></div>
          <div className="h-px bg-slate-700 my-1" />
          <div className="flex justify-between gap-4 font-bold text-brand-yellow">
            <span>Acc (a=F/m):</span> 
            <span className="text-white">{acceleration.toFixed(2)} m/s²</span>
          </div>
          <div className="flex justify-between gap-4 mt-1 text-slate-400">
            <span>Velocity:</span> 
            <span className="text-white">{velocity.toFixed(1)} m/s</span>
          </div>
        </div>

        {/* The Track */}
        <div className="w-full h-2 bg-slate-700 rounded-full relative z-10 mb-8">
          {/* Distance Markers */}
          <div className="absolute top-4 left-0 text-[10px] text-slate-500 font-mono">0m</div>
          <div className="absolute top-4 right-0 text-[10px] text-slate-500 font-mono">100m</div>
          
          {/* The Block */}
          <div 
            className="absolute bottom-2 w-16 flex flex-col items-center z-20"
            style={{ left: `calc(${position}% - 32px)` }}
          >
            {/* Force Vector Arrow */}
            {force > 0 && (
              <div 
                className="absolute top-1/2 -right-4 flex items-center text-brand-yellow animate-pulse"
                style={{ width: `${Math.min(100, force * 2)}px`, transform: 'translateY(-50%)' }}
              >
                <div className="h-1 bg-brand-yellow flex-1" />
                <ArrowRight className="w-4 h-4 -ml-2 fill-current" />
              </div>
            )}
            
            {/* The Mass */}
            <div className={`
              flex items-center justify-center font-black text-white rounded-lg shadow-lg border-b-4 
              ${mass <= 20 ? 'w-12 h-12 bg-brand-purple border-brand-purple-dark text-sm' : 
                mass <= 50 ? 'w-16 h-16 bg-blue-500 border-blue-700 text-base' : 
                'w-20 h-20 bg-slate-600 border-slate-800 text-lg'}
               transition-all duration-300
            `}>
              {mass}kg
            </div>
          </div>
        </div>
        
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 rounded-3xl border-2 border-slate-200 border-b-4">
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs font-bold text-slate-600 uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><Box className="w-4 h-4 text-brand-purple" /> Mass (kg)</span>
            <span>{mass} kg</span>
          </div>
          <input 
            type="range" 
            min="5" max="100" step="5"
            value={mass} 
            onChange={(e) => setMass(Number(e.target.value))}
            disabled={isRunning || position > 0}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-purple disabled:opacity-50" 
          />
          <p className="text-[10px] text-slate-400 font-medium">Heavier objects resist acceleration (Inertia).</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs font-bold text-slate-600 uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><MoveRight className="w-4 h-4 text-brand-yellow" /> Applied Force (N)</span>
            <span>{force} N</span>
          </div>
          <input 
            type="range" 
            min="0" max="200" step="10"
            value={force} 
            onChange={(e) => setForce(Number(e.target.value))}
            disabled={isRunning || position > 0}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-yellow disabled:opacity-50" 
          />
          <p className="text-[10px] text-slate-400 font-medium">More force creates more acceleration.</p>
        </div>

        <div className="col-span-1 md:col-span-2 flex gap-3 pt-2">
          <button 
            onClick={handleReset}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Reset
          </button>
          <button 
            onClick={handleApplyForce}
            disabled={force === 0 || isRunning || position > 0}
            className="flex-[2] py-3 px-4 rounded-xl font-bold text-sm bg-brand-teal text-white hover:bg-teal-500 transition-colors shadow-sm disabled:opacity-50"
          >
            Apply Force & Run
          </button>
        </div>

      </div>
    </div>
  );
}
