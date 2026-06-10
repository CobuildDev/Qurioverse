"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, BrainCircuit, BarChart2, Trophy } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  // Add any future routes here where the nav SHOULD appear
  const showOnRoutes = ["/map", "/library", "/tutor", "/progress", "/completion", "/leaderboard", "/puzzle"];

  // If we are on the splash screen ("/") or a quiz screen, hide the nav
  if (!showOnRoutes.includes(pathname)) {
    return null;
  }

  const navItems = [
    { name: "MAP", href: "/map", icon: Home },
    { name: "LAB", href: "/library", icon: BookOpen },
    { name: "TUTOR", href: "/tutor", icon: BrainCircuit },
    { name: "STATS", href: "/progress", icon: BarChart2 },
    { name: "RANK", href: "/leaderboard", icon: Trophy },
  ];

  return (
    <nav className="fixed bottom-0 md:top-6 md:left-6 w-full md:w-[240px] md:h-[calc(100vh-48px)] bg-white/95 backdrop-blur-md border-t-4 md:border-t-0 md:border-4 border-slate-100 md:rounded-3xl pb-6 pt-3 md:pt-8 md:pb-8 px-4 flex md:flex-col items-center md:items-start justify-around md:justify-start md:gap-4 z-50 shadow-[0_-4px_16px_rgba(15,23,42,0.02)] md:shadow-2xl transition-all">
      {/* Desktop Logo Spacer */}
      <div className="hidden md:block w-full px-4 mb-6">
        {/* <h2 className="font-outfit font-black text-2xl text-brand-slate uppercase tracking-tighter">
          <span className="text-brand-purple">Qurio</span><span className="text-brand-teal">verse</span>
        </h2> */}
      </div>

      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col md:flex-row items-center md:justify-start min-w-[68px] md:w-full py-1.5 md:py-3.5 px-2.5 md:px-5 rounded-2xl md:rounded-xl transition-all duration-100 active:scale-90 ${isActive
                ? "bg-brand-soft-purple text-brand-purple border-2 border-b-4 border-brand-purple/20 font-bold"
                : "text-slate-400 hover:text-slate-600 font-medium md:border-2 md:border-transparent md:hover:bg-slate-50"
              }`}
          >
            <Icon className={`w-5 h-5 mb-0.5 md:mb-0 md:mr-3.5 ${isActive ? "stroke-[2.5px]" : "stroke-2"}`} />
            <span className="text-[9px] md:text-xs tracking-wider uppercase font-outfit">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
