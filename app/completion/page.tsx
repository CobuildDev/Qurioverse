import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Award, Zap } from "lucide-react";

export default function CompletionScreen() {
  return (
    <main className="flex-1 flex flex-col bg-slate-50  min-h-screen pb-24">
      <Header />

      <div className="px-6 pt-6 flex-1 overflow-y-auto space-y-6">
        
        {/* COMPLETION HEADER TEXT */}
        <div>
          {/* <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-3">
            Exploration Complete
          </p> */}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
            You've discovered the birth of Quantum Mechanics.
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Energy is quantized. The classical world's continuity fades as we peer into the discrete nature of reality.
          </p>
        </div>

        {/* MASTERY CARD */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Unit 1 Mastery</h2>
              <p className="text-xs text-slate-500">Foundations of Modern Physics</p>
            </div>
            <span className="text-3xl font-bold text-indigo-600">85%</span>
          </div>

          {/* Continuous Progress Bar */}
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-indigo-600 rounded-full w-[85%]" />
          </div>
          
          {/* Segmented Progress Bar (Faked with flex layout) */}
          <div className="flex gap-1 h-1 w-full">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className={`h-full flex-1 rounded-full ${i < 6 ? 'bg-indigo-600' : 'bg-slate-100'}`} 
              />
            ))}
          </div>
        </div>

        {/* LEVEL UP CARD */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-[#F8F9FF] rounded-full flex items-center justify-center mb-4 border-[4px] border-white shadow-sm">
             <Award className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">Level Up</h3>
          <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
            Quantum Apprentice
          </p>
        </div>

        {/* KEY CONCEPT CARD (With Faked Image) */}
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
          {/* Faked Image using CSS Gradients */}
          <div className="h-40 w-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/40 via-slate-900 to-slate-900"></div>
             <div className="w-12 h-12 bg-white/10 rounded-full blur-md"></div>
             <div className="w-4 h-4 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(103,232,249,0.8)] z-10"></div>
             {/* Faked wireframe lines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-slate-900 mb-2">Key Concept</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              The Ultraviolet Catastrophe was the catalyst for Planck's revolutionary constant.
            </p>
          </div>
        </div>

        {/* UP NEXT CARD */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3 block">
            Up Next
          </span>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Planck's Constant</h3>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Quantifying the very small: h = 6.626 × 10⁻³⁴ J·s
          </p>
          
          <Button variant="primary" className="w-full flex items-center justify-center gap-2">
            Begin Mission
            <Zap className="w-4 h-4 fill-current" />
          </Button>
        </div>

      </div>
    </main>
  );
}