import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function EntryScreen() {
  return (
    <main className="flex-1 flex flex-col items-center justify-between px-6 py-12 relative overflow-hidden bg-gradient-to-b from-[#FDFEFE] to-[#F2F5FA] min-h-screen">
      {/* TOP HEADER */}
      <div className="z-10 text-center flex items-center flex-col pt-4">
        <Image src="/images/logo-text.png" width={200} height={40} alt="logo" />
        <p className="text-slate-500 font-medium text-sm mt-1 max-w-[280px] mx-auto leading-relaxed">
          Embark on a subatomic playground quest!
        </p>
      </div>

      {/* MIDDLE MASCOT AREA */}
      <div className="z-10 flex flex-col items-center my-6 relative w-full max-w-[300px]">
        {/* Animated Speech Bubble */}
        <div className="speech-bubble bg-white text-brand-slate font-bold text-xs p-4 rounded-2xl shadow-md border-2 border-slate-100 max-w-[220px] text-center mb-6 relative animate-float">
          <span>"Hey there, explorer! I'm Quiro. Let's bend physics together!"</span>
        </div>

        {/* Glow behind Mascot */}
        <div className="absolute top-24 w-36 h-36 bg-gradient-to-tr from-brand-teal to-brand-purple opacity-20 rounded-full blur-2xl animate-pulse" />

        {/* Mascot Image */}
        <div className="w-48 h-48 relative animate-float">
          <Image
            src="/images/quiro.png"
            alt="Quiro the Quantum Spirit Mascot"
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