"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StoryStage } from "@/components/lesson/StoryStage";
import { DiscoverStage } from "@/components/lesson/DiscoverStage";
import { ReflectStage } from "@/components/lesson/ReflectStage";
import { X } from "lucide-react";

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentStage, setCurrentStage] = useState<1 | 2 | 3>(1);

  const handleNext = () => {
    if (currentStage === 1) setCurrentStage(2);
    else if (currentStage === 2) setCurrentStage(3);
    else if (currentStage === 3) router.push("/completion");
  };

  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen font-fredoka">
      
      {/* Lesson Header Area */}
      <div className="px-5 pt-6 pb-2 sticky top-0 z-30 bg-[#F8FAFC]">
        <div className="flex items-center justify-between gap-4">
          
          <button 
            onClick={() => router.push('/map')} 
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors shrink-0"
          >
            <X className="w-6 h-6 stroke-[3px]" />
          </button>

          {/* Progress Indicator */}
          <div className="flex-1 flex items-center gap-2">
            {[1, 2, 3].map((stage) => (
              <div 
                key={stage} 
                className={`h-3 flex-1 rounded-full transition-colors ${
                  stage <= currentStage ? "bg-brand-purple shadow-sm" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
        
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mt-3 ml-12">
          {currentStage === 1 ? "STAGE 1: STORY" : currentStage === 2 ? "STAGE 2: DISCOVER" : "STAGE 3: REFLECT"}
        </p>
      </div>

      {/* Stage Container */}
      <div className="flex-1 flex flex-col px-5 pt-4 pb-6 overflow-y-auto">
        {currentStage === 1 && <StoryStage onNext={handleNext} />}
        {currentStage === 2 && <DiscoverStage onNext={handleNext} />}
        {currentStage === 3 && <ReflectStage onNext={handleNext} />}
      </div>
    </main>
  );
}
