import { Header } from "@/components/ui/Header";
import { CurrentLessonCard } from "@/components/dashboard/CurrentLessonCard";
import { DailyGoalCard } from "@/components/dashboard/DailyGoalCard";
import { ConceptLabCard } from "@/components/dashboard/ConceptLabCard";
import { QuestPathway } from "@/components/dashboard/QuestPathway";
import { AiTutorWidget } from "@/components/dashboard/AiTutorWidget";

export default function Dashboard() {
  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />
      
      <div className="px-5 pt-6 flex-1 overflow-y-auto space-y-6">
        
        {/* CURRENT LESSON CARD */}
        <CurrentLessonCard />

        {/* DOUBLE WIDGET GRID */}
        <div className="grid grid-cols-2 gap-4">
          <DailyGoalCard />
          <ConceptLabCard />
        </div>

        {/* THE QUEST PATHWAY */}
        <QuestPathway />

        {/* AI TUTOR WIDGET */}
        <AiTutorWidget />

      </div>
    </main>
  );
}