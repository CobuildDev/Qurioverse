"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { BrainCircuit, Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "quarky";
  text: string;
  avatar?: string;
}

export default function TutorScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "quarky",
      text: "Hey quantum explorer! Ask me anything, like 'What is a quantum?' or 'Why is Schrödinger's cat famous?'. I'll give you super funny analogies! 🚀",
    },
  ]);

  const presetQuestions = [
    { text: "🐱 Is Schrödinger's cat okay?", reply: "Oh, absolutely! It's a hypothetical kitty. It's just a funny way of saying that things in the subatomic world can be in multiple states (alive AND sleeping) until someone opens the box and checks!" },
    { text: "🧱 What does 'quantum' mean?", reply: "Imagine trying to buy water, but instead of a smooth flowing hose, you can ONLY buy it in tiny, individual balloons! That's quantum - energy comes in tiny, packets called 'quanta' instead of one smooth stream." },
    { text: "🌀 What is spin?", reply: "Subatomic particles act like tiny spinning tops, but they spin in weird ways! A quantum spin can point up and down at the same time until we look. Mind-bending, right?" }
  ];

  const handleTapQuestion = (q: string, r: string) => {
    // Avoid duplicates for UI cleanliness
    const id = Date.now();
    setMessages((prev) => [
      ...prev,
      { id: id, sender: "user", text: q },
      { id: id + 1, sender: "quarky", text: r },
    ]);
  };

  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />

      <div className="px-5 pt-6 flex-1 flex flex-col justify-between overflow-hidden">
        
        {/* TOP INFO AREA */}
        <div className="space-y-1 pb-4 border-b border-slate-100">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft-purple border-2 border-purple-200/50 rounded-full text-brand-purple text-xs font-black uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>AI TUTOR LAB</span>
          </div>
          <h1 className="text-3xl font-black text-brand-slate tracking-tight font-outfit">
            ASK QUARKY
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            Get quantum concepts explained with toys, cats, and pizza analogies!
          </p>
        </div>

        {/* CHAT MESSAGES DISPLAY */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {messages.map((msg) => {
            const isQuarky = msg.sender === "quarky";
            return (
              <div 
                key={msg.id} 
                className={`flex gap-3 max-w-[85%] ${isQuarky ? "self-start" : "self-end flex-row-reverse"}`}
              >
                {isQuarky && (
                  <div className="w-9 h-9 relative shrink-0 bg-brand-soft-purple rounded-xl border border-purple-100 flex items-center justify-center">
                    <div className="w-7 h-7 relative animate-float">
                      <Image src="/images/quarky.png" fill alt="Quarky" className="object-contain" />
                    </div>
                  </div>
                )}
                
                <div 
                  className={`p-3.5 rounded-2xl text-xs font-medium leading-relaxed border-2 ${
                    isQuarky 
                      ? "bg-white border-slate-200 text-slate-700 shadow-sm" 
                      : "bg-brand-purple border-brand-purple-dark text-white shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* PRESET CHIPS */}
        <div className="py-2.5 space-y-2 border-t border-slate-100">
          <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
            Tap a question to ask:
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none">
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleTapQuestion(q.text, q.reply)}
                className="shrink-0 bg-white hover:bg-slate-50 border-2 border-b-4 border-slate-200 text-slate-600 active:translate-y-[2px] active:border-b-2 font-bold text-xs py-1.5 px-3 rounded-full transition-all"
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>

        {/* INPUT FORM BAR */}
        <div className="pt-2 pb-4 flex gap-2">
          <input
            type="text"
            placeholder="Type a custom quantum query..."
            className="flex-1 px-4 py-3 bg-white border-2 border-slate-200 focus:border-brand-purple text-xs font-medium rounded-2xl outline-none shadow-inner"
            disabled
          />
          <Button variant="primary" className="h-11 w-11 rounded-2xl shrink-0 p-0 flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </Button>
        </div>

      </div>
    </main>
  );
}
