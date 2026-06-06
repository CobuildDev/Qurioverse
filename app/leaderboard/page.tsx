"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/ui/Header";
import { Trophy, Flame, Users, Globe } from "lucide-react";

export default function LeaderboardScreen() {
  const [tab, setTab] = useState<"global" | "friends">("global");

  const players = [
    { rank: 1, name: "MarieC", score: 4200, avatar: "/images/quiro.png", isMe: false },
    { rank: 2, name: "SchrodingerFan", score: 3850, avatar: "/images/quiro.png", isMe: false },
    { rank: 3, name: "QuantumJumper", score: 3600, avatar: "/images/quiro.png", isMe: false },
    { rank: 4, name: "PlanckConstant", score: 3450, avatar: "/images/quiro.png", isMe: false },
    { rank: 5, name: "ElectronWave", score: 3200, avatar: "/images/quiro.png", isMe: false },
    { rank: 142, name: "You", score: 1840, avatar: "/images/quiro.png", isMe: true },
  ];

  return (
    <main className="flex-1 flex flex-col bg-[#F8FAFC] min-h-screen pb-24 font-fredoka">
      <Header />

      <div className="px-5 pt-6 flex-1 flex flex-col">
        
        {/* HEADER */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 border-2 border-yellow-200/50 rounded-full text-brand-yellow-dark text-xs font-black uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>GLOBAL RANKINGS</span>
          </div>
          <h1 className="text-3xl font-black text-brand-slate tracking-tight font-outfit">
            LEADERBOARD
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            Compete with quantum explorers worldwide!
          </p>
        </div>

        {/* TABS */}
        <div className="flex bg-slate-200/60 p-1 rounded-2xl mb-6 border border-slate-200/80">
          <button 
            onClick={() => setTab("global")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black uppercase transition-all ${tab === "global" ? "bg-white text-brand-purple shadow-sm border border-slate-100" : "text-slate-400"}`}
          >
            <Globe className="w-4 h-4" /> Global
          </button>
          <button 
            onClick={() => setTab("friends")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black uppercase transition-all ${tab === "friends" ? "bg-white text-brand-purple shadow-sm border border-slate-100" : "text-slate-400"}`}
          >
            <Users className="w-4 h-4" /> Friends
          </button>
        </div>

        {/* RANKINGS LIST */}
        <div className="flex-1 bg-white rounded-3xl border-2 border-slate-200 p-2 shadow-sm overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-1">
            {players.slice(0, 5).map((player) => (
              <div 
                key={player.rank} 
                className="flex items-center p-3 rounded-2xl transition-all hover:bg-slate-50"
              >
                {/* Rank Badge */}
                <div className={`w-8 font-outfit font-black text-lg text-center ${
                  player.rank === 1 ? "text-yellow-500" :
                  player.rank === 2 ? "text-slate-400" :
                  player.rank === 3 ? "text-orange-700" : "text-slate-300"
                }`}>
                  {player.rank}
                </div>

                {/* Avatar */}
                <div className="w-10 h-10 relative ml-2 mr-3 bg-brand-soft-purple rounded-full border-2 border-purple-100 flex items-center justify-center">
                  <div className="w-7 h-7 relative">
                    <Image src={player.avatar} fill alt={player.name} className="object-contain" />
                  </div>
                </div>

                {/* Name */}
                <div className="flex-1">
                  <h4 className="font-bold text-brand-slate text-sm">{player.name}</h4>
                </div>

                {/* Score */}
                <div className="text-right">
                  <span className="font-outfit font-black text-brand-purple">{player.score}</span>
                  <span className="text-[10px] text-slate-400 font-bold block -mt-1 uppercase tracking-wide">Sparks</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Current User Rank */}
          <div className="mt-2 pt-2 border-t-2 border-dashed border-slate-200">
            <div className="flex items-center p-3 rounded-2xl bg-brand-soft-purple border border-purple-200/50">
              <div className="w-8 font-outfit font-black text-lg text-center text-brand-purple">
                {players[5].rank}
              </div>
              <div className="w-10 h-10 relative ml-2 mr-3 bg-white rounded-full border-2 border-purple-200 flex items-center justify-center">
                <div className="w-7 h-7 relative">
                  <Image src={players[5].avatar} fill alt="You" className="object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-black text-brand-purple text-sm">{players[5].name}</h4>
              </div>
              <div className="text-right">
                <span className="font-outfit font-black text-brand-purple">{players[5].score}</span>
                <span className="text-[10px] text-purple-400 font-bold block -mt-1 uppercase tracking-wide">Sparks</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
