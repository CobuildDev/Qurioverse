"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function DailyPuzzleScreen() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState("14:22:05");

  // Mock countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, calculate time to midnight. Just a visual mock here.
      setTimeLeft("14:22:04");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const puzzleData = {
    question: "If a light source emits photons with an energy of 2.5 eV, and the metal's work function is 2.0 eV, what is the maximum kinetic energy of the ejected electrons?",
    options: [
      { id: 1, text: "0.5 eV" },
      { id: 2, text: "2.0 eV" },
      { id: 3, text: "2.5 eV" },
      { id: 4, text: "4.5 eV" }
    ],
    correctId: 1
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />

      <div className="px-5 pt-6 flex-1 flex flex-col">

        {/* HEADER */}
        <div className="text-center space-y-2 mb-6">
          {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft-purple border-2 border-purple-200/50 rounded-full text-brand-purple text-xs font-black uppercase tracking-wider">
            <Hexagon className="w-3.5 h-3.5" />
            <span>DAILY PUZZLE</span>
          </div> */}
          <h1 className="text-3xl font-black text-brand-slate tracking-tight font-outfit">
            Brain Teaser
          </h1>
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium font-mono bg-slate-200/50 py-1 px-3 rounded-full w-fit mx-auto">
            <span>Next puzzle in {timeLeft}</span>
          </div>
        </div>

        {/* PUZZLE CARD */}
        <div className="flex-1 card-3d bg-white p-6 border-2 border-b-6 border-slate-200 flex flex-col">

          <h3 className="text-lg font-black text-slate-700 leading-snug mb-8">
            {puzzleData.question}
          </h3>

          <div className="space-y-3 flex-1">
            {puzzleData.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrect = option.id === puzzleData.correctId;

              let btnClass = "border-slate-200 text-slate-600 hover:bg-slate-50";
              if (isSelected && !isSubmitted) {
                btnClass = "border-brand-purple bg-brand-soft-purple text-brand-purple font-bold";
              } else if (isSubmitted) {
                if (isCorrect) {
                  btnClass = "border-brand-teal bg-brand-soft-teal text-brand-teal-dark font-bold";
                } else if (isSelected && !isCorrect) {
                  btnClass = "border-red-400 bg-red-50 text-red-700 font-bold opacity-60";
                } else {
                  btnClass = "border-slate-200 text-slate-400 opacity-50";
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => !isSubmitted && setSelectedAnswer(option.id)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all relative ${btnClass}`}
                >
                  <span className="text-sm">{option.text}</span>
                  {isSubmitted && isCorrect && (
                    <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-teal" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-6 mt-auto">
            {!isSubmitted ? (
              <Button
                onClick={handleSubmit}
                variant={selectedAnswer !== null ? "primary" : "outline"}
                size="lg"
                className="w-full h-14"
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </Button>
            ) : (
              <div className="space-y-4">
                <div className={`text-center p-3 rounded-xl border ${selectedAnswer === puzzleData.correctId ? "bg-cyan-50 border-cyan-200 text-cyan-700" : "bg-red-50 border-red-200 text-red-700"}`}>
                  <h4 className="font-black uppercase text-xs">
                    {selectedAnswer === puzzleData.correctId ? "+20 Sparks!" : "Keep Trying Next Time!"}
                  </h4>
                  <p className="text-[10px] font-medium mt-0.5">
                    {selectedAnswer === puzzleData.correctId
                      ? "Energy of Photon (2.5) - Work Function (2.0) = Kinetic Energy (0.5)"
                      : "Remember: Kinetic Energy = Photon Energy - Work Function"}
                  </p>
                </div>
                <Button
                  onClick={() => router.push("/map")}
                  variant="primary"
                  size="lg"
                  className="w-full h-14"
                >
                  Back to Dashboard
                </Button>
              </div>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
