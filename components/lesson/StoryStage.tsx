"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Play, Pause, ArrowRight, MapPin, Clock } from "lucide-react";
import { useReadAloud } from "@/components/ui/useReadAloud";

interface StoryStageProps {
  data: any;
  onNext: () => void;
}

export function StoryStage({ data, onNext }: StoryStageProps) {
  const { play, stop, isPlaying, isPaused } = useReadAloud();

  const fullText = [
    data.location && `Location: ${data.location}.`,
    data.era && `Era: ${data.era}.`,
    data.story,
    data.quote && `Quote: ${data.quote}`,
    data.scientist && `Scientist profile: ${data.scientist}`
  ].filter(Boolean).join(" ");

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const togglePlay = () => {
    play(fullText);
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">
        
        {/* Listen Mode Player */}
        <div className="card-3d bg-slate-900 border-slate-800 p-4 text-white flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center hover:bg-brand-purple-dark transition-colors"
              >
                {isPlaying && !isPaused ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Listen Mode</h4>
                <p className="text-[10px] text-slate-400 font-medium truncate max-w-[200px]">{data.title}</p>
              </div>
            </div>
            {isPlaying && !isPaused && (
               <div className="flex gap-1">
                 <div className="w-1 h-3 bg-brand-teal animate-pulse" />
                 <div className="w-1 h-4 bg-brand-teal animate-pulse delay-75" />
                 <div className="w-1 h-2 bg-brand-teal animate-pulse delay-150" />
               </div>
            )}
          </div>
        </div>

        {/* Location / Era Tags */}
        {(data.location || data.era) && (
          <div className="flex flex-wrap gap-2">
            {data.location && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100/50 border border-orange-200 rounded-full text-orange-600 text-[10px] font-black uppercase tracking-wider">
                <MapPin className="w-3 h-3" />
                <span>{data.location}</span>
              </div>
            )}
            {data.era && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100/50 border border-blue-200 rounded-full text-blue-600 text-[10px] font-black uppercase tracking-wider">
                <Clock className="w-3 h-3" />
                <span>{data.era}</span>
              </div>
            )}
          </div>
        )}

        {/* Story Text */}
        <div className="space-y-5 font-outfit px-1 text-slate-600">
          {data.story.split('\n\n').map((paragraph: string, idx: number) => (
            <p key={idx} className="text-lg leading-relaxed font-medium">
              {paragraph}
            </p>
          ))}

          {data.quote && (
            <blockquote className="border-l-4 border-brand-purple pl-4 py-1 italic text-brand-slate font-medium">
              "{data.quote}"
            </blockquote>
          )}

          {data.scientist && (
            <div className="bg-white p-4 rounded-xl border-2 border-slate-200 mt-6 shadow-sm">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">The Scientist</h4>
              <p className="text-sm font-medium text-slate-600 leading-relaxed whitespace-pre-line">
                {data.scientist}
              </p>
            </div>
          )}
        </div>

      </div>

      <div className="pt-8 mt-auto">
        <Button onClick={onNext} variant="primary" size="lg" className="w-full h-14 flex items-center justify-center gap-2">
          <span>Run Experiment</span>
          <ArrowRight className="w-5 h-5 stroke-[3px]" />
        </Button>
      </div>
    </div>
  );
}
