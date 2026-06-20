"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Flame } from "lucide-react";
import { useUserStore } from "@/lib/store";
import curriculum from "@/data/curriculum.json";

export function CurrentLessonCard() {
  const { unlockedLessons, completedLessons } = useUserStore();
  
  // Find the last unlocked lesson that is NOT completed
  const activeLessonId = unlockedLessons.find(id => !completedLessons.includes(id)) || unlockedLessons[unlockedLessons.length - 1];

  let currentUnit = curriculum[0];
  let currentLesson = currentUnit.lessons[0];

  for (const unit of curriculum) {
    const lesson = unit.lessons.find(l => l.globalId === activeLessonId);
    if (lesson) {
      currentUnit = unit;
      currentLesson = lesson;
      break;
    }
  }

  // Calculate unit progress
  const unitCompletedLessons = currentUnit.lessons.filter(l => completedLessons.includes(l.globalId)).length;
  const progressPercent = Math.round((unitCompletedLessons / currentUnit.lessons.length) * 100);

  return (
    <div className="card-3d bg-white p-5 border-2 border-b-6 border-slate-200">
      <div className="flex justify-between items-start">
        <span className="inline-block text-brand-purple text-[10px] font-black">
          Current Unit
        </span>
        <div className="flex items-center gap-1 text-orange-500 font-bold text-xs">
          <Flame className="w-3.5 h-3.5 fill-current" />
          <span>Unit {currentUnit.id}</span>
        </div>
      </div>

      <h2 className="text-lg font-black text-brand-slate mt-3 leading-snug truncate">
        {currentUnit.title}
      </h2>
      <p className="text-xs text-slate-400 mt-1 mb-4 flex items-center gap-1.5 font-medium truncate">
        <span className="shrink-0">Next Mission:</span>
        <span className="text-brand-purple font-bold truncate">{currentLesson.title}</span>
      </p>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
          <span>Unit Progress</span>
          <span className="text-brand-purple">{progressPercent}%</span>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full border border-slate-200/50 p-0.5 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-purple to-violet-400 rounded-full transition-all duration-1000" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <Link href={`/lesson/${activeLessonId}`}>
        <Button variant="primary" size="default" className="w-full h-12 animate-float">
          Resume Quest
        </Button>
      </Link>
    </div>
  );
}
