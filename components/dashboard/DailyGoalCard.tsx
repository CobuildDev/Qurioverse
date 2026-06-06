import { Target } from "lucide-react";

export function DailyGoalCard() {
  return (
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
  );
}
