"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, BrainCircuit, BarChart2, Trophy } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  // Add any future routes here where the nav SHOULD appear
  const showOnRoutes = ["/dashboard", "/library", "/tutor", "/progress", "/completion", "/leaderboard", "/puzzle"];
  
  // If we are on the splash screen ("/") or a quiz screen, hide the nav
  if (!showOnRoutes.includes(pathname)) {
    return null;
  }

  const navItems = [
    { name: "MAP", href: "/dashboard", icon: Home },
    { name: "LAB", href: "/library", icon: BookOpen },
    { name: "TUTOR", href: "/tutor", icon: BrainCircuit },
    { name: "STATS", href: "/progress", icon: BarChart2 },
    { name: "RANK", href: "/leaderboard", icon: Trophy },
  ];

  return (
    <nav className="sticky bottom-0 w-full bg-white/95 backdrop-blur-md border-t-4 border-slate-100 pb-6 pt-3 px-4 flex items-center justify-around z-50 shadow-[0_-4px_16px_rgba(15,23,42,0.02)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center min-w-[68px] py-1.5 px-2.5 rounded-2xl transition-all duration-100 active:scale-90 ${
              isActive 
                ? "bg-brand-soft-purple text-brand-purple border-2 border-b-4 border-brand-purple/20 font-bold" 
                : "text-slate-400 hover:text-slate-600 font-medium"
            }`}
          >
            <Icon className={`w-5.5 h-5.5 mb-0.5 ${isActive ? "stroke-[2.5px]" : "stroke-2"}`} />
            <span className="text-[9px] tracking-wider uppercase font-outfit">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}