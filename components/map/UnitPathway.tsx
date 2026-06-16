"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Lock, Play } from "lucide-react";

export function UnitPathway({ lessons, activeUnit, unitId }: { lessons: any[], activeUnit: boolean, unitId: number }) {
  
  const getColClass = (index: number) => {
    const cycle = index % 4;
    if (cycle === 0) return "col-start-1";
    if (cycle === 1) return "col-start-2";
    if (cycle === 2) return "col-start-3";
    if (cycle === 3) return "col-start-2";
    return "col-start-1";
  };

  return (
    <div className="py-6 relative overflow-hidden w-full max-w-sm mx-auto">
      
      {/* Vertical Connecting SVG Line */}
      <div className="absolute top-10 bottom-10 left-0 right-0 pointer-events-none flex justify-center z-0">
        <svg className="w-full h-full" viewBox="0 0 240 800" preserveAspectRatio="none">
          <path 
            d="M 40 40 Q 120 100 120 160 T 200 280 T 120 400 T 40 520 T 120 640 T 200 760" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="6" 
            strokeLinecap="round"
            strokeDasharray="12 12"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* zig-zag bubbles */}
      <div className="grid grid-cols-3 gap-y-10 relative z-10 px-2">
        {lessons.map((node, index) => {
          const isCompleted = node.status === "completed";
          const isActive = node.status === "active";
          const isLocked = node.status === "locked";
          const colClass = getColClass(index);

          return (
            <div key={node.globalId} className={`${colClass} flex flex-col items-center group relative justify-self-center`}>
              
              {isActive && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                  <div className="bg-brand-purple text-white text-[9px] font-black py-1 px-2.5 rounded-full shadow-md border border-brand-purple-dark whitespace-nowrap mb-1 animate-float">
                    "Tap me!"
                  </div>
                  <div className="w-11 h-11 relative animate-float">
                    <Image
                      src="/images/quiro.png"
                      alt="Quiro cheering"
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              )}

              {/* Level bubble */}
              <Link href={isLocked ? "#" : `/lesson/${node.globalId}`} className="pointer-events-auto">
                <button
                  disabled={isLocked}
                  className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-b-6 transition-all font-outfit text-lg font-black select-none ${
                    isCompleted
                      ? "bg-brand-teal border-brand-teal-dark text-white active:translate-y-[4px] active:border-b-2"
                      : isActive
                      ? "bg-brand-purple border-brand-purple-dark text-white active:translate-y-[4px] active:border-b-2 shadow-[0_0_15px_rgba(139,92,246,0.4)] animate-pulse-subtle"
                      : "bg-white border-slate-300 text-slate-400 active:translate-y-0 cursor-not-allowed"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6 stroke-[3.5px]" />
                  ) : isLocked ? (
                    <Lock className="w-5 h-5 stroke-[2.5px]" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5 stroke-[2.5px]" />
                  )}
                </button>
              </Link>

              {/* Bubble Title */}
              <span className={`text-[10px] font-black text-center mt-2.5 uppercase tracking-wide px-2 py-1 rounded-md max-w-[100px] truncate shadow-sm ${
                isActive ? "text-brand-purple bg-white border border-brand-soft-purple" : isCompleted ? "text-brand-teal bg-white border border-cyan-100" : "text-slate-500 bg-white border border-slate-200"
              }`}>
                {node.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
