"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { UIMessage } from "ai";

export default function TutorScreen() {
  const { messages, setMessages, sendMessage, status } = useChat();

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "1",
          role: "assistant",
          parts: [{ type: "text", text: "Hey quantum explorer! Ask me anything, like 'What is a quantum?' or 'Why is Schrödinger's cat famous?'. I'll give you super funny analogies!" }]
        } as UIMessage,
      ]);
    }
  }, [messages.length, setMessages]);

  const [input, setInput] = useState("");
  const isLoading = status === 'submitted' || status === 'streaming';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ 
      id: Date.now().toString(), 
      role: "user", 
      parts: [{ type: "text", text: input }] 
    } as UIMessage);
    setInput("");
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const presetQuestions = [
    { text: "Is Schrödinger's cat okay?", reply: "" },
    { text: "What does 'quantum' mean?", reply: "" },
    { text: "What is spin?", reply: "" }
  ];

  const handleTapQuestion = (q: string) => {
    sendMessage({ 
      id: Date.now().toString(), 
      role: "user", 
      parts: [{ type: "text", text: q }] 
    } as UIMessage);
  };

  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-100vh pb-24 font-fredoka">
      <Header />

      <div className="px-5 pt-6 flex-1 flex flex-col justify-between overflow-hidden">
        {/* TOP INFO AREA */}
        <div className="space-y-1 pb-4 border-b border-slate-100">
          <h1 className="text-3xl font-black text-brand-slate tracking-tight font-outfit">
            Ask Quiro
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            Get quantum concepts explained with simple analogies!
          </p>
        </div>

        {/* CHAT MESSAGES DISPLAY */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1 scrollbar-thin scrollbar-thumb-slate-200">
          {messages.map((msg) => {
            const isQuiro = msg.role === "assistant";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${isQuiro ? "self-start" : "self-end flex-row-reverse"}`}
              >
                {isQuiro && (
                  <div className="w-9 h-9 relative shrink-0 bg-brand-soft-purple rounded-xl border border-purple-100 flex items-center justify-center">
                    <div className="w-7 h-7 relative animate-float">
                      <Image src="/images/quiro.png" fill alt="Quiro" className="object-contain" />
                    </div>
                  </div>
                )}

                <div
                  className={`p-3.5 rounded-2xl text-xs font-medium leading-relaxed border-2 whitespace-pre-wrap ${isQuiro
                      ? "bg-white border-slate-200 text-slate-700 shadow-sm"
                      : "bg-brand-purple border-brand-purple-dark text-white shadow-sm"
                    }`}
                >
                  {msg.parts.filter((p: any) => p.type === 'text').map((p: any, i: number) => (
                    <span key={i}>{p.text}</span>
                  ))}
                </div>
              </div>
            );
          })}
          {isLoading && (
            <div className="flex gap-3 max-w-[85%] self-start">
              <div className="w-9 h-9 relative shrink-0 bg-brand-soft-purple rounded-xl border border-purple-100 flex items-center justify-center">
                <div className="w-7 h-7 relative animate-pulse">
                  <Image src="/images/quiro.png" fill alt="Quiro" className="object-contain opacity-50" />
                </div>
              </div>
              <div className="p-3.5 rounded-2xl text-xs font-medium leading-relaxed border-2 bg-white border-slate-200 text-slate-700 shadow-sm flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
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
                onClick={() => handleTapQuestion(q.text)}
                disabled={isLoading}
                className="shrink-0 bg-white hover:bg-slate-50 border-2 border-b-4 border-slate-200 text-slate-600 active:translate-y-[2px] active:border-b-2 font-bold text-xs py-1.5 px-3 rounded-full transition-all disabled:opacity-50"
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>

        {/* INPUT FORM BAR */}
        <form onSubmit={handleSubmit} className="pt-2 pb-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a custom quantum query..."
            className="flex-1 px-4 py-3 bg-white border-2 border-slate-200 focus:border-brand-purple text-xs font-medium rounded-2xl outline-none shadow-inner"
            disabled={isLoading}
          />
          <Button type="submit" variant="primary" disabled={isLoading || !input?.trim()} className="h-11 w-11 rounded-2xl shrink-0 p-0 flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </Button>
        </form>
      </div>
    </main>
  );
}
