import Link from "next/link";
import { Zap, Flame, Sparkles, User } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="px-6 py-4 bg-slate-50 flex items-center justify-between sticky top-0 z-30 border-b-2 border-slate-100/80 backdrop-blur-md">

      {/* BRAND logo */}
      <Link href="/dashboard" className="flex items-center">
        <Image src="/images/logo-text.png" width={110} height={40} alt="logo" />
      </Link>


      {/* STATS HUDS */}
      <div className="flex items-center gap-2 font-outfit">

        {/* Streak Pill */}
        <div className="flex items-center gap-1 px-2.5 py-1 bg-white border-2 border-b-4 border-slate-100 rounded-full text-orange-500 text-xs font-black shadow-sm">
          <Flame className="w-4 h-4 fill-current animate-pulse-subtle" />
          <span>12</span>
        </div>

        {/* Energy Pill */}
        <div className="flex items-center gap-1 px-2.5 py-1 bg-white border-2 border-b-4 border-slate-100 rounded-full text-brand-yellow-dark text-xs font-black shadow-sm">
          <Zap className="w-4 h-4 fill-current" />
          <span>95</span>
        </div>

        {/* Sparkles / Crystals Pill */}
        <div className="flex items-center gap-1 px-2.5 py-1 bg-white border-2 border-b-4 border-slate-100 rounded-full text-brand-teal text-xs font-black shadow-sm">
          <Sparkles className="w-4 h-4 fill-current" />
          <span>450</span>
        </div>

        {/* Avatar Slot */}
        <Link href="/progress" className="w-8 h-8 rounded-full bg-brand-soft-purple border-2 border-brand-purple flex items-center justify-center overflow-hidden transition-all active:scale-90 shadow-sm">
          <User className="w-4 h-4 text-brand-purple" />
        </Link>

      </div>
    </header>
  );
}
