"use client";

import { useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { StoryStage } from "@/components/lesson/StoryStage";
import { DiscoverStage } from "@/components/lesson/DiscoverStage";
import { ReflectStage } from "@/components/lesson/ReflectStage";
import { SummaryStage } from "@/components/lesson/SummaryStage";
import { X } from "lucide-react";
import curriculum from "@/data/curriculum.json";

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [currentStage, setCurrentStage] = useState<1 | 2 | 3 | 4>(1);

  const lessonData = useMemo(() => {
    if (!id) return null;
    for (const unit of curriculum) {
      const found = unit.lessons.find((l) => String(l.globalId) === id);
      if (found) return found;
    }
    return null;
  }, [id]);

  if (!lessonData) return <div className="p-8 text-center text-slate-500 font-bold">Loading lesson...</div>;

  const handleNext = () => {
    if (currentStage === 1) setCurrentStage(2);
    else if (currentStage === 2) setCurrentStage(3);
    else if (currentStage === 3) setCurrentStage(4);
    else if (currentStage === 4) {
      router.push(`/completion?id=${lessonData.globalId}`);
    }
  };

  const getStageTitle = () => {
    if (currentStage === 1) return "STAGE 1: STORY";
    if (currentStage === 2) return "STAGE 2: DISCOVER";
    if (currentStage === 3) return "STAGE 3: REFLECT";
    return "STAGE 4: SUMMARY";
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
            {[1, 2, 3, 4].map((stage) => (
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
          {getStageTitle()}
        </p>
      </div>

      {/* Stage Container */}
      <div className="flex-1 flex flex-col px-5 pt-4 pb-6 overflow-y-auto">
        {currentStage === 1 && <StoryStage data={lessonData} onNext={handleNext} />}
        {currentStage === 2 && <DiscoverStage data={lessonData} onNext={handleNext} />}
        {currentStage === 3 && <ReflectStage data={lessonData} onNext={handleNext} />}
        {currentStage === 4 && <SummaryStage data={lessonData} onNext={handleNext} />}
      </div>
    </main>
  );
}
