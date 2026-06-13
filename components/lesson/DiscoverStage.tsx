"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Pause } from "lucide-react";
import { SimulationRegistry } from "@/components/lesson/simulations/SimulationRegistry";
import { useReadAloud } from "@/components/ui/useReadAloud";

interface DiscoverStageProps {
  data: any;
  onNext: () => void;
}

export function DiscoverStage({ data, onNext }: DiscoverStageProps) {
  const [simCompleted, setSimCompleted] = useState(false);
  const { play, stop, isPlaying, isPaused } = useReadAloud();

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const togglePlay = () => {
    play(data.simulation.brief);
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">
        
        <div className="text-center">
          <h2 className="text-xl font-black text-brand-slate uppercase tracking-wide font-outfit">
            Experiment
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <button 
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300 transition-colors shrink-0"
            >
              {isPlaying && !isPaused ? (
                <Pause className="w-3.5 h-3.5 text-slate-600 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 text-slate-600 fill-current ml-0.5" />
              )}
            </button>
            <p className="text-xs text-slate-500 font-medium whitespace-pre-line text-left">
              {data.simulation.brief}
            </p>
          </div>
        </div>

        {/* Dynamic Simulation Area */}
        <SimulationRegistry 
          type={data.simulation.type} 
          onComplete={(success) => setSimCompleted(success)} 
        />

        {simCompleted && data.simulation.discoveryOutcome && (
           <div className="bg-brand-soft-purple border border-brand-purple p-4 rounded-2xl animate-fade-in">
             <h4 className="text-xs font-black text-brand-purple uppercase tracking-widest mb-1">Discovery!</h4>
             <p className="text-sm font-medium text-brand-slate leading-relaxed">
               {data.simulation.discoveryOutcome}
             </p>
           </div>
        )}

      </div>

      <div className="pt-6 mt-auto">
        <Button 
          onClick={onNext} 
          variant={simCompleted ? "primary" : "outline"} 
          size="lg" 
          className="w-full h-14 flex items-center justify-center gap-2"
        >
          <span>I Understand</span>
          <ArrowRight className="w-5 h-5 stroke-[3px]" />
        </Button>
      </div>
    </div>
  );
}
