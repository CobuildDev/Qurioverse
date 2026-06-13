"use client";

import { useEffect } from "react";

export function GenericSim({ onComplete, type }: { onComplete: (success: boolean) => void, type: string }) {
  // Auto-complete the generic sim after 2 seconds just for testing
  useEffect(() => {
    const t = setTimeout(() => {
      onComplete(true);
    }, 2000);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className="card-3d bg-slate-900 border-slate-800 p-8 h-64 md:h-[400px] flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full border-4 border-brand-teal border-t-transparent animate-spin mb-6" />
      <h3 className="text-xl font-black text-white mb-2">Simulating: {type}</h3>
      <p className="text-sm font-medium text-slate-400">
        Interactive widget for {type} is under construction...
        <br />
        (Auto-completing in 2 seconds)
      </p>
    </div>
  );
}
