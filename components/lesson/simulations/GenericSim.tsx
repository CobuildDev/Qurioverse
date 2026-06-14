"use client";

import { Settings, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function GenericSim({ onComplete, title }: { onComplete: (success: boolean) => void, title: string }) {
  // We remove the 2 second auto-complete so the user can actually read it
  // and click a button to proceed manually.

  return (
    <div className="card-3d bg-slate-900 border-slate-800 p-8 h-64 md:h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden rounded-3xl">
      
      {/* Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-6 z-10">
        <Settings className="w-8 h-8 text-brand-purple animate-spin-slow" />
      </div>
      
      <h3 className="text-xl font-black text-white mb-2 z-10 font-outfit tracking-wide uppercase">
        Lab Calibrating
      </h3>
      
      <p className="text-sm font-medium text-slate-400 max-w-sm mb-8 z-10">
        The interactive simulation for <span className="text-brand-teal font-bold">{title}</span> is currently undergoing calibration by Quiro. 
      </p>

      <Button onClick={() => onComplete(true)} variant="accent" className="z-10 shadow-lg">
        Bypass Simulation
      </Button>
    </div>
  );
}
