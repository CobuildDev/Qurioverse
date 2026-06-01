import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/ui/Header";
import { Flame, Lock, Check, Play, BookOpen, BrainCircuit, Target, Sparkles } from "lucide-react";

export default function Dashboard() {
  const pathNodes = [
    { id: 1, title: "Quantum Intro", subtitle: "Unit 0: What is Quantum?", status: "completed", pos: "col-start-1 justify-self-center" },
    { id: 2, title: "The Blackbody Problem", subtitle: "Unit 1: The Crisis of Classical Physics", status: "completed", pos: "col-start-2 justify-self-center" },
    { id: 3, title: "Planck's Constant", subtitle: "Unit 1: The Birth of the Constant", status: "active", pos: "col-start-3 justify-self-center" },
    { id: 4, title: "The Photoelectric Effect", subtitle: "Unit 2: Einstein's Particles", status: "locked", pos: "col-start-2 justify-self-center" },
    { id: 5, title: "Wave-Particle Duality", subtitle: "Unit 2: Matter Waves", status: "locked", pos: "col-start-1 justify-self-center" },
    { id: 6, title: "Quantum Tunneling", subtitle: "Unit 3: Passing Through Walls", status: "locked", pos: "col-start-2 justify-self-center" },
  ];

  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />
      
      <div className="px-5 pt-6 flex-1 overflow-y-auto space-y-6">
        
        {/* CURRENT LESSON CARD */}
        <div className="card-3d bg-white p-5 border-2 border-b-6 border-slate-200">
          <div className="flex justify-between items-start">
            <span className="inline-block px-3 py-1 bg-brand-soft-purple text-brand-purple text-[10px] font-black uppercase tracking-widest rounded-full">
              CURRENT UNIT
            </span>
            <div className="flex items-center gap-1 text-orange-500 font-bold text-xs bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>Unit 1</span>
            </div>
          </div>

          <h2 className="text-lg font-black text-brand-slate mt-3 leading-snug">
            Planck's Quantum & Wave Packets
          </h2>
          <p className="text-xs text-slate-400 mt-1 mb-4 flex items-center gap-1.5 font-medium">
            <span>Next Mission:</span>
            <span className="text-brand-purple font-bold">3. Planck's Constant (h)</span>
          </p>

          {/* Progress Bar */}
          <div className="mb-5">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">
              <span>Path Progress</span>
              <span className="text-brand-purple">45%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full border border-slate-200/50 p-0.5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-brand-purple to-violet-400 rounded-full w-[45%]" />
            </div>
          </div>

          <Link href="/completion">
            <Button variant="primary" size="default" className="w-full h-12">
              Resume Quest
            </Button>
          </Link>
        </div>

        {/* DOUBLE WIDGET GRID */}
        <div className="grid grid-cols-2 gap-4">
          {/* Daily Goal Card */}
          <div className="card-3d bg-white p-4 border-2 border-b-6 border-slate-200 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-brand-teal text-[10px] font-black uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Daily Goal</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="relative w-11 h-11 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-brand-teal"
                    strokeDasharray="75, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="text-[10px] font-black text-brand-teal font-outfit">3/4</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-slate text-xs">Lessons Done</h4>
                <p className="text-[9px] text-slate-400 font-medium">Almost there!</p>
              </div>
            </div>
          </div>

          {/* Quick Lab Card */}
          <Link href="/library" className="card-3d bg-brand-soft-teal p-4 border-2 border-b-6 border-cyan-200 flex flex-col justify-between text-left active:translate-y-[4px] active:border-b-2">
            <div className="flex items-center gap-1.5 text-cyan-700 text-[10px] font-black uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Concept Lab</span>
            </div>
            <div className="mt-3">
              <h4 className="font-bold text-cyan-900 text-xs">Unlock Cards</h4>
              <p className="text-[9px] text-cyan-600 font-medium">Browse 12+ modules</p>
            </div>
          </Link>
        </div>

        {/* THE QUEST PATHWAY */}
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
                  {isActive && (
                    <div className="absolute -top-14 -right-16 z-20 flex flex-col items-center pointer-events-none">
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

        {/* AI TUTOR WIDGET */}
        <div className="card-3d bg-white p-5 border-2 border-b-6 border-slate-200 flex items-center gap-4">
          <div className="w-14 h-14 relative shrink-0 bg-brand-soft-purple rounded-2xl flex items-center justify-center border border-purple-200/50">
            <div className="w-10 h-10 relative">
              <Image src="/images/quarky.png" fill alt="Quarky" className="object-contain" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-extrabold text-sm text-brand-slate">Stuck on a concept?</h3>
            <p className="text-[10px] text-slate-400 font-medium">Chat with Quarky for funny analogies!</p>
            <Link href="/tutor" className="inline-block mt-2">
              <span className="text-[10px] font-black uppercase text-brand-purple hover:underline">
                Start Chat &rarr;
              </span>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}