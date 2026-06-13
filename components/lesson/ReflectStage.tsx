"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Send } from "lucide-react";

interface ReflectStageProps {
  data: any;
  onNext: () => void;
}

export function ReflectStage({ data, onNext }: ReflectStageProps) {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showTutor, setShowTutor] = useState(false);

  const handleSubmit = () => {
    if (!answer.trim()) return;
    setSubmitted(true);
    // Simulate API delay for AI tutor
    setTimeout(() => {
      setShowTutor(true);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-6">

        <div className="text-center">
          <h2 className="text-xl font-black text-brand-slate uppercase tracking-wide font-outfit">
            Reflect
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-1">
            No right or wrong answers. Just your thoughts.
          </p>
        </div>

        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 border-b-4 space-y-4">
          <h3 className="font-bold text-slate-700 whitespace-pre-line">
            {data.reflection.question}
          </h3>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={submitted}
            placeholder="I noticed that..."
            className="w-full h-32 p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl resize-none focus:outline-none focus:border-brand-purple focus:ring-4 focus:ring-brand-soft-purple transition-all text-slate-700 disabled:opacity-50"
          />

          {!submitted && (
            <Button onClick={handleSubmit} variant="accent" className="w-full flex justify-center gap-2">
              <span>Submit to Quiro</span>
              <Send className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* AI Tutor Response Bubble */}
        {showTutor && (
          <div className="flex gap-4 items-end animate-float" style={{ animationDuration: '4s' }}>
            <div className="w-12 h-12 relative shrink-0 bg-brand-soft-purple rounded-xl border border-purple-100 flex items-center justify-center mb-2">
              <div className="w-9 h-9 relative">
                <Image src="/images/quiro.png" fill alt="Quiro" className="object-contain" />
              </div>
            </div>

            <div className="flex-1 bg-brand-purple text-white p-4 rounded-3xl rounded-bl-sm shadow-md border-2 border-brand-purple-dark relative">
              <span className="text-xs font-black uppercase text-purple-200 block mb-1">Quiro (AI Tutor)</span>
              <p className="text-sm font-medium leading-relaxed whitespace-pre-line">
                {data.reflection.correctInsight}
              </p>
            </div>
          </div>
        )}

      </div>

      {showTutor && (
        <div className="pt-6 mt-auto">
          <Button onClick={onNext} variant="primary" size="lg" className="w-full h-14 flex items-center justify-center gap-2">
            <span>Next: Summary</span>
            <ArrowRight className="w-5 h-5 stroke-[3px]" />
          </Button>
        </div>
      )}
    </div>
  );
}
