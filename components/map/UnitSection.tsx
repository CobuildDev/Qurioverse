"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { UnitPathway } from "./UnitPathway";

export function UnitSection({ 
  unit, 
  isExpanded, 
  onToggle 
}: { 
  unit: any, 
  isExpanded: boolean, 
  onToggle: () => void 
}) {
  const totalLessons = unit.lessons.length;
  const completedLessonsCount = unit.lessons.filter((l: any) => l.status === "completed").length;
  const isUnitCompleted = completedLessonsCount === totalLessons;
  const isUnitActive = unit.lessons.some((l: any) => l.status === "active");

  return (
    <div className="w-full flex flex-col items-center">
      {/* Unit Header / Banner */}
      <div 
        onClick={onToggle}
        className={`w-full max-w-sm rounded-2xl border-2 p-4 cursor-pointer shadow-md transition-all active:scale-[0.98] ${
          isUnitCompleted 
            ? "bg-brand-teal border-brand-teal-dark text-white" 
            : isUnitActive
            ? "bg-brand-purple border-brand-purple-dark text-white shadow-brand-purple/30 shadow-xl"
            : "bg-slate-800 border-slate-900 text-white"
        }`}
      >
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-outfit font-black text-xl">Unit {unit.id}</h2>
          {isExpanded ? <ChevronUp className="w-6 h-6 opacity-80" /> : <ChevronDown className="w-6 h-6 opacity-80" />}
        </div>
        <p className="font-medium text-sm opacity-90 leading-snug mb-3 line-clamp-2">
          {unit.title}
        </p>
        <div className="flex items-center gap-2">
          {/* Progress bar */}
          <div className="flex-1 h-2.5 bg-black/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${(completedLessonsCount / totalLessons) * 100}%` }}
            />
          </div>
          <span className="text-xs font-bold font-outfit">{completedLessonsCount}/{totalLessons}</span>
        </div>
      </div>

      {/* Expanded Content (The Pathway) */}
      <div 
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[1500px] opacity-100 mt-2 mb-8" : "max-h-0 opacity-0 my-0"
        }`}
      >
        <UnitPathway lessons={unit.lessons} activeUnit={isExpanded} unitId={unit.id} />
      </div>
    </div>
  );
}
