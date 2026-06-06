import Image from "next/image";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { BarChart2, Flame, Award, Zap, Star, Shield, Lock, Eye } from "lucide-react";

export default function ProgressScreen() {
  const stickers = [
    { title: "First Spark", desc: "Completed Unit 0: Quantum Intro", unlocked: true, icon: Zap, bg: "bg-cyan-100 text-cyan-600 border-cyan-300" },
    { title: "Cat Protector", desc: "Learned about Schrödinger's box", unlocked: true, icon: Star, bg: "bg-orange-100 text-orange-600 border-orange-300" },
    { title: "Constant Master", desc: "Measured Planck's Constant", unlocked: true, icon: Award, bg: "bg-purple-100 text-brand-purple border-purple-300" },
    { title: "Twin Entangler", desc: "Link twin particles together", unlocked: false, icon: Lock, bg: "bg-slate-100 text-slate-400 border-slate-300" },
    { title: "Tunnel Traveler", desc: "Pass through a quantum barrier", unlocked: false, icon: Lock, bg: "bg-slate-100 text-slate-400 border-slate-300" },
  ];

  const costumes = [
    { name: "Original Spirit", cost: "Unlocked", status: "Equipped", img: "/images/quiro.png" },
    { name: "Quantum Scientist", cost: "500 Sparks", status: "Locked", img: "/images/quiro.png" },
    { name: "Subatomic Space Suit", cost: "800 Sparks", status: "Locked", img: "/images/quiro.png" },
  ];

  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />

      <div className="px-5 pt-6 flex-1 overflow-y-auto space-y-6">
        
        {/* TOP INFO AREA */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 border-2 border-yellow-200/50 rounded-full text-brand-yellow-dark text-xs font-black uppercase tracking-wider">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>MY ACHIEVEMENTS</span>
          </div>
          <h1 className="text-3xl font-black text-brand-slate tracking-tight font-outfit">
            STATS & STICKERS
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            Review your subatomic growth, sticker collection, and unlock custom costumes!
          </p>
        </div>

        {/* GENERAL STATS PANEL */}
        <div className="grid grid-cols-3 gap-3">
          <div className="card-3d bg-white p-3 border-2 border-b-6 border-slate-200 text-center">
            <Zap className="w-6 h-6 text-brand-yellow-dark fill-current mx-auto mb-1.5" />
            <span className="block text-[8px] font-bold text-slate-400 uppercase">Sparks</span>
            <span className="font-outfit font-black text-brand-slate text-sm">320</span>
          </div>
          <div className="card-3d bg-white p-3 border-2 border-b-6 border-slate-200 text-center">
            <Flame className="w-6 h-6 text-orange-500 fill-current mx-auto mb-1.5" />
            <span className="block text-[8px] font-bold text-slate-400 uppercase">Streak</span>
            <span className="font-outfit font-black text-brand-slate text-sm">12 Days</span>
          </div>
          <div className="card-3d bg-white p-3 border-2 border-b-6 border-slate-200 text-center">
            <Award className="w-6 h-6 text-brand-purple fill-current mx-auto mb-1.5" />
            <span className="block text-[8px] font-bold text-slate-400 uppercase">Level</span>
            <span className="font-outfit font-black text-brand-slate text-sm">Appr II</span>
          </div>
        </div>

        {/* STICKER BOOK AREA */}
        <div>
          <h3 className="font-black text-brand-slate text-sm mb-3 font-outfit">STICKER BOOK</h3>
          <div className="space-y-3">
            {stickers.map((sticker, idx) => {
              const Icon = sticker.icon;
              return (
                <div 
                  key={idx} 
                  className={`card-3d bg-white p-3 border-2 border-b-4 border-slate-200 flex items-center gap-3.5 ${
                    !sticker.unlocked ? "opacity-60" : ""
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 shadow-sm ${sticker.bg}`}>
                    <Icon className="w-5 h-5 stroke-[2.5px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate text-xs flex items-center gap-1.5">
                      <span>{sticker.title}</span>
                      {sticker.unlocked && (
                        <span className="text-[8px] bg-brand-soft-teal text-brand-teal px-1.5 py-0.5 rounded-full font-black uppercase">
                          UNLOCKED
                        </span>
                      )}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium">{sticker.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* QUIRO COSTUME SHOP */}
        <div className="pb-6">
          <h3 className="font-black text-brand-slate text-sm mb-3 font-outfit">QUIRO'S WARDROBE</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {costumes.map((costume, idx) => {
              const isLocked = costume.status === "Locked";
              return (
                <div 
                  key={idx} 
                  className="card-3d bg-white p-4 border-2 border-b-6 border-slate-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Tiny Mascot Avatar Costume Preview */}
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl relative overflow-hidden flex items-center justify-center">
                      <div className="w-8 h-8 relative animate-float">
                        <Image src={costume.img} fill alt="Quiro Costume" className="object-contain" />
                      </div>
                      {isLocked && (
                        <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-xs flex items-center justify-center text-slate-500">
                          <Lock className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-slate text-xs">{costume.name}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">Cost: {costume.cost}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant={isLocked ? "outline" : "primary"} 
                    className="h-9 px-3.5 text-[9px] tracking-wider font-black"
                    disabled={isLocked}
                  >
                    {costume.status}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}
