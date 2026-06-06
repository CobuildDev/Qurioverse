import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Flame } from "lucide-react";

export function CurrentLessonCard() {
  return (
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
  );
}
