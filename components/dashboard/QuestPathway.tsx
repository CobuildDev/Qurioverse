import Link from "next/link";
import Image from "next/image";
import { Check, Lock, Play } from "lucide-react";

export function QuestPathway() {
  const pathNodes = [
    { id: 1, title: "Quantum Intro", subtitle: "Unit 0: What is Quantum?", status: "completed", pos: "col-start-1 justify-self-center" },
    { id: 2, title: "The Blackbody Problem", subtitle: "Unit 1: The Crisis of Classical Physics", status: "completed", pos: "col-start-2 justify-self-center" },
    { id: 3, title: "Planck's Constant", subtitle: "Unit 1: The Birth of the Constant", status: "active", pos: "col-start-3 justify-self-center" },
    { id: 4, title: "The Photoelectric Effect", subtitle: "Unit 2: Einstein's Particles", status: "locked", pos: "col-start-2 justify-self-center" },
    { id: 5, title: "Wave-Particle Duality", subtitle: "Unit 2: Matter Waves", status: "locked", pos: "col-start-1 justify-self-center" },
    { id: 6, title: "Quantum Tunneling", subtitle: "Unit 3: Passing Through Walls", status: "locked", pos: "col-start-2 justify-self-center" },
  ];

  return (
    <div className="py-8 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200/60 relative">
      
      {/* Vertical Connecting SVG Line */}
      <div className="absolute top-12 bottom-12 left-0 right-0 pointer-events-none flex justify-center z-0">
        <svg className="w-full h-full" style={{ minHeight: "450px" }}>
          <path 
            d="M 60 40 Q 180 100 180 160 T 60 280 T 180 400 T 60 520" 
            fill="none" 
            stroke="#E2E8F0" 
            strokeWidth="6" 
            strokeLinecap="round"
            strokeDasharray="12 12"
          />
        </svg>
      </div>

      {/* zig-zag bubbles */}
      <div className="grid grid-cols-3 gap-y-12 relative z-10 px-6">
        {pathNodes.map((node) => {
          const isCompleted = node.status === "completed";
          const isActive = node.status === "active";
          const isLocked = node.status === "locked";

          return (
            <div key={node.id} className={`${node.pos} flex flex-col items-center group relative`}>
              
              {/* Floating Quarky mascot next to current active node */}
              {/* Fixed placement: centered above the node to avoid breaking out of viewport */}
              {isActive && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                  <div className="bg-brand-purple text-white text-[9px] font-black py-1 px-2.5 rounded-full shadow-md border border-brand-purple-dark whitespace-nowrap mb-1 animate-float">
                    "Tap me!"
                  </div>
                  <div className="w-11 h-11 relative animate-float">
                    <Image
                      src="/images/quarky.png"
                      alt="Quarky cheering"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Level bubble */}
              <Link href={isLocked ? "#" : "/completion"} className="pointer-events-auto">
                <button
                  disabled={isLocked}
                  className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-b-6 transition-all font-outfit text-lg font-black select-none ${
                    isCompleted
                      ? "bg-brand-teal border-brand-teal-dark text-white active:translate-y-[4px] active:border-b-2"
                      : isActive
                      ? "bg-brand-purple border-brand-purple-dark text-white active:translate-y-[4px] active:border-b-2 shadow-[0_0_15px_rgba(139,92,246,0.4)] animate-pulse-subtle"
                      : "bg-slate-200 border-slate-300 text-slate-400 active:translate-y-0 cursor-not-allowed"
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
              <span className={`text-[10px] font-black text-center mt-2.5 uppercase tracking-wide px-2 py-0.5 rounded-md ${
                isActive ? "text-brand-purple bg-brand-soft-purple" : isCompleted ? "text-brand-teal bg-cyan-50" : "text-slate-400"
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
