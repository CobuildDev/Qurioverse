import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Award, Zap, Star, Sparkles, ArrowRight } from "lucide-react";

export default function CompletionScreen() {
  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />

      <div className="px-5 pt-6 flex-1 overflow-y-auto space-y-6">
        
        {/* CELEBRATION HEADER */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 border-2 border-yellow-200/50 rounded-full text-yellow-600 text-xs font-black tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 fill-current animate-spin" style={{ animationDuration: '3s' }} />
            <span>MISSION ACCOMPLISHED</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-brand-slate leading-tight font-outfit">
            QUANTUM EXPLORER!
          </h1>
          <p className="text-xs text-slate-400 font-medium max-w-[280px] mx-auto">
            You successfully measured Planck's constant and unlocked the secret grid of energy!
          </p>
        </div>

        {/* THREE GOLDEN STARS */}
        <div className="flex justify-center items-end gap-3 py-2">
          <Star className="w-10 h-10 text-brand-yellow fill-current -rotate-12 animate-float" style={{ animationDelay: '0.2s' }} />
          <Star className="w-14 h-14 text-brand-yellow fill-current -translate-y-2 animate-float" />
          <Star className="w-10 h-10 text-brand-yellow fill-current rotate-12 animate-float" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* MASTERY STICKER & LEVEL UP CARD */}
        <div className="card-3d bg-white p-5 border-2 border-b-6 border-slate-200 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-brand-soft-teal rounded-bl-full flex items-center justify-center pointer-events-none">
            <Sparkles className="w-4 h-4 text-brand-teal" />
          </div>
          
          <div className="w-14 h-14 bg-brand-soft-purple rounded-full border-4 border-white shadow-md flex items-center justify-center mx-auto mb-3">
             <Award className="w-7 h-7 text-brand-purple" />
          </div>
          
          <h3 className="font-black text-brand-slate text-base">Level Up!</h3>
          <p className="text-[10px] font-black text-brand-purple uppercase tracking-widest">
            Quantum Apprentice Rank II
          </p>
          
          {/* XP details */}
          <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-[10px] text-slate-400 font-bold uppercase">XP Gained</span>
              <span className="font-outfit font-black text-brand-teal text-lg">+80 XP</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="block text-[10px] text-slate-400 font-bold uppercase">Accuracy</span>
              <span className="font-outfit font-black text-brand-purple text-lg">90%</span>
            </div>
          </div>
        </div>

        {/* MASCOT DIALOGUE */}
        <div className="flex items-center gap-4 bg-brand-soft-purple/40 border-2 border-purple-100/50 p-4 rounded-3xl">
          <div className="w-16 h-16 relative shrink-0">
            <Image src="/images/quarky.png" fill alt="Quarky happy" className="object-contain animate-float" />
          </div>
          <div>
            <h4 className="font-black text-xs text-brand-purple">QUARKY SAYS:</h4>
            <p className="text-xs text-slate-600 font-medium mt-0.5 leading-relaxed">
              "Amazing job! Planck would be so proud. Energy is discrete, and your brain power is infinite!"
            </p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3">
          <Link href="/dashboard" className="w-full">
            <Button variant="accent" size="lg" className="w-full h-14 flex items-center justify-center gap-2">
              <span>Next Mission</span>
              <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </Button>
          </Link>

          <Link href="/library" className="w-full">
            <Button variant="outline" size="default" className="w-full">
              Explore Concept Cards
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
}