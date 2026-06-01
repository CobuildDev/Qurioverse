import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function EntryScreen() {
  return (
    <main className="flex-1 flex flex-col items-center justify-between px-6 py-12 relative overflow-hidden bg-gradient-to-b from-[#FDFEFE] to-[#F2F5FA] min-h-screen">
      
      {/* Background Decorative Quantum Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-cyan-100 rounded-full animate-orbit-cw pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-purple-100 rounded-full animate-orbit-ccw pointer-events-none" />

      {/* TOP HEADER */}
      <div className="z-10 text-center pt-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft-purple border-2 border-purple-200/50 rounded-full text-brand-purple text-xs font-black tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>Ages 5-17</span>
        </div>
        <h1 className="text-5xl font-black tracking-tight font-outfit text-brand-slate uppercase">
          <span className="text-brand-purple">Qurio</span>
          <span className="text-brand-teal">verse</span>
        </h1>
        <p className="text-slate-500 font-medium text-sm mt-1 max-w-[280px] mx-auto leading-relaxed">
          Embark on a subatomic playground quest! 🌟
        </p>
      </div>

      {/* MIDDLE MASCOT AREA */}
      <div className="z-10 flex flex-col items-center my-6 relative w-full max-w-[300px]">
        {/* Animated Speech Bubble */}
        <div className="speech-bubble bg-white text-brand-slate font-bold text-xs p-4 rounded-2xl shadow-md border-2 border-slate-100 max-w-[220px] text-center mb-6 relative animate-float">
          <span>"Hey there, explorer! I'm Quarky. Let's bend physics together!"</span>
        </div>
        
        {/* Glow behind Mascot */}
        <div className="absolute top-24 w-36 h-36 bg-gradient-to-tr from-brand-teal to-brand-purple opacity-20 rounded-full blur-2xl animate-pulse" />
        
        {/* 3D Mascot Image */}
        <div className="w-48 h-48 relative animate-float">
          <Image
            src="/images/quarky.png"
            alt="Quarky the Quantum Spirit Mascot"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <div className="z-10 w-full flex flex-col items-center gap-4 max-w-[280px]">
        <Link href="/dashboard" className="w-full">
          <Button variant="accent" size="lg" className="w-full h-16 text-base tracking-wide flex items-center justify-center gap-2">
            <span>Start Quest</span>
            <ArrowRight className="w-5 h-5 stroke-[3px]" />
          </Button>
        </Link>
        
        <Link href="/library" className="w-full">
          <Button variant="outline" size="default" className="w-full text-xs">
            Enter Concept Lab
          </Button>
        </Link>
      </div>

    </main>
  );
}