import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function EntryScreen() {
  return (
    <main className="flex-1 flex flex-col items-center justify-between px-6 py-12 relative overflow-hidden bg-gradient-to-b from-[#FDFEFE] to-[#F2F5FA] min-h-screen">
      {/* TOP HEADER */}
      <div className="z-10 text-center flex items-center flex-col pt-4">
        <Image src="/images/logo-text.png" width={240} height={48} alt="logo" />
        <p className="text-slate-500 font-medium text-base md:text-lg mt-2 max-w-[280px] md:max-w-md mx-auto leading-relaxed">
          Embark on a subatomic playground quest!
        </p>
      </div>

      {/* MIDDLE MASCOT AREA */}
      <div className="z-10 flex flex-col items-center my-6 relative w-full max-w-[300px] md:max-w-[400px]">
        {/* Animated Speech Bubble */}
        <div className="speech-bubble bg-white text-brand-slate font-bold text-xs md:text-sm p-4 rounded-2xl shadow-md border-2 border-slate-100 max-w-[220px] md:max-w-[280px] text-center mb-6 relative ">
          <span>"Hey there, explorer! I'm Quiro. Let's bend physics together!"</span>
        </div>

        {/* Glow behind Mascot */}
        <div className="absolute top-24 w-36 h-36 md:w-48 md:h-48 bg-gradient-to-tr from-brand-teal to-brand-purple opacity-20 rounded-full blur-2xl " />

        {/* Mascot Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
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
      <div className="z-10 w-full flex flex-col items-center gap-4 max-w-[280px] md:max-w-[360px]">
        <Link href="/map" className="w-full">
          <Button variant="accent" size="lg" className="w-full h-16 md:h-20 text-lg md:text-xl tracking-wide flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl animate-float transition-all">
            <span>Start Quest</span>
            <ArrowRight className="w-6 h-6 stroke-[3px]" />
          </Button>
        </Link>
      </div>
    </main>
  );
}