"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, BrainCircuit, BarChart2 } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  // Add any future routes here where the nav SHOULD appear
  const showOnRoutes = ["/dashboard", "/library", "/tutor", "/progress"];
  
  // If we are on the splash screen ("/") or a quiz screen, hide the nav
  if (!showOnRoutes.includes(pathname)) {
    return null;
  }

  const navItems = [
    { name: "HOME", href: "/dashboard", icon: Home },
    { name: "LIBRARY", href: "/library", icon: BookOpen },
    { name: "AI TUTOR", href: "/tutor", icon: BrainCircuit },
    { name: "PROGRESS", href: "/progress", icon: BarChart2 },
  ];

  return (
    <nav className="sticky bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-100 pb-8 pt-8 px-16 flex items-center justify-between z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center min-w-[72px] transition-all ${
              isActive 
                ? "bg-indigo-50 text-indigo-600 rounded-2xl py-2 px-3" 
                : "text-slate-500 hover:text-slate-800 py-2"
            }`}
          >
            <Icon className={`w-6 h-6 mb-1 ${isActive ? "stroke-[2.5px]" : "stroke-2"}`} />
            <span className={`text-[10px] tracking-wide ${isActive ? "font-bold" : "font-medium"}`}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}