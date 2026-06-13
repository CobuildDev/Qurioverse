"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Play, Pause } from "lucide-react";
import { useReadAloud } from "@/components/ui/useReadAloud";
import { useUserStore } from "@/lib/store";

interface SummaryStageProps {
  data: any;
  onNext: () => void;
}

export function SummaryStage({ data, onNext }: SummaryStageProps) {
  const { play, stop, isPlaying, isPaused } = useReadAloud();
  const { completeLesson } = useUserStore();

  const fullText = "Summary Points. " + data.summaryPoints.join(". ");

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const togglePlay = () => {
    play(fullText);
  };

  const handleComplete = () => {
    completeLesson(data.globalId);
    onNext();
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">

        <div className="text-center">
          <h2 className="text-xl font-black text-brand-slate uppercase tracking-wide font-outfit">
            Summary
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Key takeaways from this lesson.
          </p>
        </div>

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
                <p className="text-[10px] text-slate-400 font-medium truncate max-w-[200px]">Summary Points</p>
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

        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 border-b-4 space-y-4">
          <ul className="space-y-4">
            {data.summaryPoints.map((point: string, idx: number) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <p className="text-slate-700 font-medium leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="pt-6 mt-auto">
        <Button onClick={handleComplete} variant="primary" size="lg" className="w-full h-14 flex items-center justify-center gap-2">
          <span>Complete Lesson</span>
          <ArrowRight className="w-5 h-5 stroke-[3px]" />
        </Button>
      </div>
    </div>
  );
}
