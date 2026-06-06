import Link from "next/link";
import { BookOpen } from "lucide-react";

export function ConceptLabCard() {
  return (
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
  );
}
