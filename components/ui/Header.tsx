import Link from "next/link";
import { Menu, Zap } from "lucide-react";

export function Header() {
  return (
    <header className="px-6 py-4 bg-white flex items-center justify-between sticky top-0 z-10">
      <button className="p-2 -ml-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-all">
        <Menu className="w-5 h-5" />
      </button>
      
      <Link href="/dashboard" className="font-bold text-lg text-slate-900 tracking-tight">
        Qurioverse
      </Link>
      
      <div className="flex items-center gap-3">
        <button className="text-indigo-500 hover:text-indigo-600 transition-colors">
          <Zap className="w-4 h-4 fill-current" />
        </button>
        {/* Avatar Placeholder */}
        <div className="w-7 h-7 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center overflow-hidden">
            <span className="text-[10px] font-bold text-indigo-700">V</span>
        </div>
      </div>
    </header>
  );
}