import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function EntryScreen() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden bg-white min-h-screen">
      
    

      <div className="z-10 flex flex-col items-center text-center mt-32">
        <h1 className="text-4xl font-bold tracking-tighter text-slate-900 mb-4">
          Qurioverse
        </h1>
          <h3 className="font-semibold tracking-tighter text-indigo-600 mb-4">
          Discover how reality breaks and rebuilds itself
        </h3>
        <p className="text-slate-500 text-sm mb-12 max-w-[400px] leading-relaxed">
          Embark on a journey into the quantum realm and uncover the secrets of the universe.
        </p>

        <Link 
          href="/dashboard" 
          className="w-full max-w-[280px] bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-12 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
        >
          Start Journey
          <ArrowRight className="w-4 h-4" />
        </Link>
        
        <button className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 hover:text-slate-600 transition-colors">
          Explore Documentation
        </button> 
      </div>

    </main>
  );
}