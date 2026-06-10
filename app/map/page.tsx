import { Header } from "@/components/ui/Header";
import { CurrentLessonCard } from "@/components/dashboard/CurrentLessonCard";
import { DailyGoalCard } from "@/components/dashboard/DailyGoalCard";
import { DailyPuzzleCard } from "@/components/dashboard/DailyPuzzleCard";
import { QuestPathway } from "@/components/dashboard/QuestPathway";

export default function MapScreen() {
  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />
      
      <div className="px-5 pt-6 flex-1 overflow-y-auto space-y-8">
        
        {/* PRIMARY FOCUS: CURRENT LESSON & PATHWAY */}
        <div className="space-y-6">
          <CurrentLessonCard />
          <QuestPathway />
        </div>

        {/* SECONDARY ACTIONS: WIDGETS */}
        <div className="pt-4 border-t-2 border-slate-100">
          <h3 className="font-outfit font-black text-slate-400 uppercase tracking-wider text-xs mb-4">Daily Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DailyGoalCard />
            <DailyPuzzleCard />
          </div>
        </div>

      </div>
    </main>
  );
}