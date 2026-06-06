"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Lightbulb, Zap } from "lucide-react";

interface DiscoverStageProps {
  onNext: () => void;
}

export function DiscoverStage({ onNext }: DiscoverStageProps) {
  const [frequency, setFrequency] = useState(40);
  const [intensity, setIntensity] = useState(50);

  // Photoelectric effect threshold logic
  const isEjecting = frequency >= 60;
  const electronCount = isEjecting ? Math.floor(intensity / 20) + 1 : 0;

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">
        
        <div className="text-center">
          <h2 className="text-xl font-black text-brand-slate uppercase tracking-wide font-outfit">
            Photoelectric Effect
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Try to knock the electrons off the metal plate!
          </p>
        </div>

        {/* Simulation Area */}
        <div className="card-3d bg-slate-900 border-slate-800 p-6 h-64 md:h-[450px] lg:h-[550px] relative overflow-hidden flex items-end justify-center">
          
          {/* Light Beam (Color changes with frequency) */}
          <div 
            className="absolute top-[-20%] left-[-10%] w-full h-full origin-top-left -rotate-45"
            style={{
              background: `linear-gradient(180deg, ${
                frequency < 40 ? 'rgba(239, 68, 68, 0.4)' : 
                frequency < 60 ? 'rgba(234, 179, 8, 0.4)' : 
                frequency < 80 ? 'rgba(59, 130, 246, 0.4)' : 
                'rgba(168, 85, 247, 0.4)'
              } 0%, transparent 100%)`,
              opacity: intensity / 100,
            }}
          />

          {/* Metal Plate */}
          <div className="w-full h-12 bg-slate-400 rounded-t-xl border-t-4 border-slate-300 relative z-10 flex items-center justify-around px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            {/* Render Electrons */}
            {[...Array(5)].map((_, i) => (
              <div key={`static-${i}`} className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] border-2 border-cyan-200" />
            ))}
          </div>

          {/* Ejected Electrons Animation */}
          {isEjecting && [...Array(electronCount)].map((_, i) => (
            <div 
              key={`eject-${i}`}
              className="absolute bottom-12 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] border-2 border-cyan-200 z-20"
              style={{
                left: `${30 + (i * 15)}%`,
                animation: `float-up ${1 + (i * 0.2)}s infinite ease-out`
              }}
            />
          ))}

          {/* CSS for custom float-up animation */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes float-up {
              0% { transform: translateY(0) scale(1); opacity: 1; }
              100% { transform: translateY(-150px) translateX(${Math.random() > 0.5 ? '20px' : '-20px'}) scale(0.5); opacity: 0; }
            }
          `}} />
        </div>

        {/* Controls */}
        <div className="space-y-4 bg-white p-5 rounded-3xl border-2 border-slate-200 border-b-4">
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-brand-purple" /> Light Frequency (Color)</span>
              <span>{frequency} THz</span>
            </div>
            <input 
              type="range" 
              min="20" max="100" 
              value={frequency} 
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-purple" 
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1"><Lightbulb className="w-3.5 h-3.5 text-brand-yellow" /> Light Intensity (Brightness)</span>
              <span>{intensity}%</span>
            </div>
            <input 
              type="range" 
              min="0" max="100" 
              value={intensity} 
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-yellow" 
            />
          </div>

        </div>

      </div>

      <div className="pt-6 mt-auto">
        <Button onClick={onNext} variant={isEjecting ? "primary" : "outline"} size="lg" className="w-full h-14 flex items-center justify-center gap-2">
          <span>I Understand</span>
          <ArrowRight className="w-5 h-5 stroke-[3px]" />
        </Button>
      </div>
    </div>
  );
}
