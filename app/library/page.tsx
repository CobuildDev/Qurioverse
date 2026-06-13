import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Sparkles, BookOpen, FlaskConical, Atom, Cat, Waves } from "lucide-react";

export default function LibraryScreen() {
  const concepts = [
    {
      title: "Superposition Sparklers",
      desc: "How particles can exist in multiple states at once! Like a spinning coin that's both heads and tails until it stops.",
      color: "border-brand-teal text-brand-teal bg-cyan-50/50",
      tag: "WAVES",
      icon: Atom,
    },
    {
      title: "Spooky Entanglement",
      desc: "Instant communication between twin particles separated by galaxies! Einstein called it 'spooky action at a distance.'",
      color: "border-brand-purple text-brand-purple bg-purple-50/50",
      tag: "PARTICLES",
      icon: Sparkles,
    },
    {
      title: "Schrödinger's Kitty",
      desc: "A legendary fuzzy friend who is both sleeping and awake inside a box until you peek. Peek-a-boo physics!",
      color: "border-orange-400 text-orange-600 bg-orange-50/40",
      tag: "THEORIES",
      icon: Cat,
    },
    {
      title: "Wave-Particle Puppets",
      desc: "Is light a continuous ocean wave or a stream of bouncy marbles? Spoiler alert: it's both! Depend on how you check.",
      color: "border-brand-yellow-dark text-brand-yellow-dark bg-yellow-50/40",
      tag: "ENERGY",
      icon: Waves,
    },
  ];

  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />

      <div className="px-5 pt-6 flex-1 overflow-y-auto space-y-6">

        {/* HEADER TEXT */}
        <div className="space-y-1">
          {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft-teal border-2 border-cyan-200/50 rounded-full text-brand-teal text-xs font-black uppercase tracking-wider">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>SUBATOMIC PLAYGROUND</span>
          </div> */}
          <h1 className="text-3xl font-black text-brand-slate tracking-tight font-outfit">
            Discovery Lab
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            Tap a card to trigger experiments and sandbox simulations!
          </p>
        </div>

        {/* CONCEPT CARDS LIST */}
        <div className="space-y-5">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <div
                key={index}
                className={`card-3d bg-white p-5 border-2 border-b-6 border-slate-200 flex flex-col gap-4`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center`}>
                      <Icon className="w-5 h-5 stroke-[2.5px]" />
                    </div>
                    <h3 className="font-extrabold text-brand-slate text-sm">{concept.title}</h3>
                  </div>
                  <span className="text-[9px] font-black uppercase bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full">
                    {concept.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {concept.desc}
                </p>

                <div className="flex gap-2.5 mt-1">
                  <Button variant="secondary" className="flex-1 h-10 text-[10px]">
                    Sandbox Lab
                  </Button>
                  <Button variant="outline" className="flex-1 h-10 text-[10px]">
                    Quizzlet
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
