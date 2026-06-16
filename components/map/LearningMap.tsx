"use client";

import { useState } from "react";
import Image from "next/image";
import curriculum from "@/data/curriculum.json";
import { useUserStore } from "@/lib/store";
import { UnitSection } from "./UnitSection";

export function LearningMap() {
  const { unlockedLessons, completedLessons } = useUserStore();

  // Annotate curriculum with user progress status
  const annotatedCurriculum = curriculum.map((unit) => {
    return {
      ...unit,
      lessons: unit.lessons.map((lesson) => {
        let status = "locked";
        if (completedLessons.includes(lesson.globalId)) {
          status = "completed";
        } else if (unlockedLessons.includes(lesson.globalId)) {
          status = "active";
        }
        return { ...lesson, status };
      })
    };
  });

  // Find the unit with an "active" lesson to open by default
  const defaultActiveUnitId = annotatedCurriculum.find(u => u.lessons.some(l => l.status === "active"))?.id || 1;

  const [expandedUnitId, setExpandedUnitId] = useState<number | null>(defaultActiveUnitId);

  const toggleUnit = (id: number) => {
    // Accordion style: only one unit open at a time
    setExpandedUnitId(expandedUnitId === id ? null : id);
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] rounded-3xl overflow-hidden border-4 border-slate-200">
      {/* Background Map Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/map_bg.png" 
          alt="Learning Map Background" 
          fill 
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 px-4 py-8 space-y-6 max-w-lg mx-auto h-full overflow-y-auto">
        {annotatedCurriculum.map((unit) => (
          <UnitSection 
            key={unit.id}
            unit={unit}
            isExpanded={expandedUnitId === unit.id}
            onToggle={() => toggleUnit(unit.id)}
          />
        ))}
        
        {/* Extra padding at bottom for scrolling */}
        <div className="h-20" />
      </div>
    </div>
  );
}
