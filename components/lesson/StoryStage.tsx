"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Play, Pause, FastForward, ArrowRight } from "lucide-react";

interface StoryStageProps {
  onNext: () => void;
}

export function StoryStage({ onNext }: StoryStageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mock audio player logic
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Real implementation would sync with an audio element
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">
        
        {/* Listen Mode Player */}
        <div className="card-3d bg-slate-900 border-slate-800 p-4 text-white flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center hover:bg-brand-purple-dark transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Listen Mode</h4>
                <p className="text-[10px] text-slate-400 font-medium">Chapter 3: The Photon</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-white">
              <FastForward className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-slate-400 font-mono">0:00</span>
            <div className="h-1.5 flex-1 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-teal transition-all duration-300"
                style={{ width: `${isPlaying ? 45 : progress}%` }} 
              />
            </div>
            <span className="text-[9px] text-slate-400 font-mono">2:34</span>
          </div>
        </div>

        {/* Story Text */}
        <div className="space-y-5 font-outfit px-1">
          <p className={`text-lg leading-relaxed font-medium transition-colors duration-500 ${isPlaying ? 'text-brand-slate' : 'text-slate-600'}`}>
            It is 1905. The air in the patent office in Bern, Switzerland, is thick with dust and the ticking of clocks.
          </p>
          <p className={`text-lg leading-relaxed font-medium transition-colors duration-500 ${isPlaying ? 'text-slate-400' : 'text-slate-600'}`}>
            A 26-year-old patent clerk named Albert Einstein is staring out the window. Physicists worldwide are baffled: why does shining light on metal sometimes knock electrons loose, but other times—no matter how bright the light is—nothing happens?
          </p>
          <p className={`text-lg leading-relaxed font-medium transition-colors duration-500 ${isPlaying ? 'text-slate-400' : 'text-slate-600'}`}>
            Classical physics says light is a wave. A continuous, rolling ocean wave. But Einstein has a radical, dangerous idea. What if light isn't a wave at all? What if light is made of tiny, indivisible bullets of energy?
          </p>
          <p className="text-lg leading-relaxed font-bold text-brand-purple">
            He is about to shatter everything physicists believed about light.
          </p>
        </div>

      </div>

      <div className="pt-6 mt-auto">
        <Button onClick={onNext} variant="primary" size="lg" className="w-full h-14 flex items-center justify-center gap-2">
          <span>Run Experiment</span>
          <ArrowRight className="w-5 h-5 stroke-[3px]" />
        </Button>
      </div>
    </div>
  );
}
