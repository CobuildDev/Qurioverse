import Link from "next/link";
import { Hexagon, Play } from "lucide-react";

export function DailyPuzzleCard() {
  return (
    <div className="card-3d bg-white p-5 border-2 border-b-6 border-slate-200">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-soft-purple rounded-xl border border-purple-100 flex items-center justify-center">
            <Hexagon className="w-4 h-4 text-brand-purple fill-purple-100" />
          </div>
          <div>
            <h3 className="text-sm font-black text-brand-slate uppercase tracking-wide">Daily Puzzle</h3>
            <p className="text-[10px] text-slate-400 font-medium">Earn +20 Bonus Sparks</p>
          </div>
        </div>
        <span className="text-[9px] font-black uppercase text-brand-teal bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded-full">
          Ready
        </span>
      </div>
      
      <Link href="/puzzle" className="block mt-4">
        <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 rounded-xl flex items-center justify-center gap-1.5 transition-colors group">
          <span className="text-xs font-bold text-slate-600 group-hover:text-brand-purple transition-colors">Play Now</span>
          <Play className="w-3.5 h-3.5 fill-current text-slate-400 group-hover:text-brand-purple transition-colors" />
        </button>
      </Link>
    </div>
  );
}
