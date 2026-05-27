import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/ui/Header";
import { ChevronRight, Flame, Lock, CheckCircle2, BrainCircuit, ArrowLeft } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="flex-1 flex flex-col bg-slate-50 min-h-screen pb-24">
      <Header/>
      
      <div className="px-6 pt-6 flex-1 overflow-y-auto space-y-6">
        
        {/* WELCOME TEXT */}
        <div>
          {/* <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-1">
            Quantum Mechanics Pathway   
          </p> */}
          {/* <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome, User
          </h1> */}
        </div>

        {/* CURRENT MODULE CARD */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
            Current Module
          </span>
          <h2 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
            Unit 1: The Crisis of Classical Physics
          </h2>
          <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[8px]">▶</span>
            Next: The Blackbody Problem
          </p>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <span>Progress</span>
              <span className="text-indigo-600">65%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full w-[65%]" />
            </div>
          </div>

         <a href="/completion">
          <Button variant="primary" className="w-full">
            Resume Learning
            {/* <ChevronRight className="w-4 h-4 ml-1" /> */}
          </Button></a>
        </div>

        {/* STREAK CARD */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 flex flex-col items-center justify-center text-center">
          <Flame className="w-8 h-8 text-orange-500 mb-2" fill="currentColor" />
          <span className="text-3xl font-bold text-slate-900">12</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Day Streak</span>
        </div>
            {/* DAILY GOAL CARD */}
        <div className="bg-[#F4F6FF] rounded-3xl p-6 border border-indigo-50">
          {/* <span className="inline-block text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            Daily Goal
          </span> */}
          <div className="flex items-center gap-4">
            
            {/* SVG Circular Progress Ring */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Background Ring */}
                <path
                  className="text-indigo-100"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Progress Ring (set to 75% via strokeDasharray) */}
                <path
                  className="text-indigo-600"
                  strokeDasharray="75, 100"
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              {/* Center Text */}
              <span className="text-[10px] font-bold text-indigo-700">3/4</span>
            </div>

            {/* Goal Text */}
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-0.5">Units Today</h3>
              <p className="text-slate-500 text-xs">Almost there!</p>
            </div>
            
          </div>
        </div>
        {/* COURSE SEQUENCE */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Course Sequence</h3>
          
          <div className="space-y-3">
            {/* Completed Unit */}
            <div className="bg-white rounded-2xl p-4 border border-teal-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">Unit 0:</h4>
                <p className="text-slate-500 text-sm">Introduction</p>
              </div>
              <span className="text-[9px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md uppercase tracking-wider">
                Completed
              </span>
            </div>

            {/* Locked Unit */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4 opacity-60">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">Unit 2:</h4>
                <p className="text-slate-500 text-sm">The Photoelectric Effect</p>
              </div>
              <span className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md uppercase tracking-wider">
                Locked
              </span>
            </div>
          </div>
        </div>

        {/* AI TUTOR PROMO CARD */}
        <div className="bg-gradient-to-b from-white to-slate-50 rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center mt-8">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4">
             <BrainCircuit className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Stuck on a concept?</h3>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed max-w-[250px]">
            Our AI Tutor is ready to explain Quantum Mechanics using your favourite analogies.
          </p>
          <Button variant="outline" className="w-[200px]">
            Start Session
          </Button>
        </div>

      </div>
    </main>
  );
}