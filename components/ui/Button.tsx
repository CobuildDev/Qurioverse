import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge Tailwind classes cleanly
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export function Button({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all focus:outline-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        {
          // PRIMARY: Solid purple, rounded corners (Resume Learning)
          "bg-[#4F46E5] text-white hover:bg-indigo-700 rounded-xl shadow-[0_4px_14px_0_rgba(79,70,229,0.39)]": variant === "primary",
          
          // OUTLINE: White bg, border, uppercase pill (Start Session)
          "bg-white border border-indigo-100 text-indigo-600 hover:bg-indigo-50 rounded-full text-xs font-bold uppercase tracking-widest": variant === "outline",
          
          // GHOST: Transparent, used for text links
          "bg-transparent text-slate-500 hover:bg-slate-100 rounded-xl": variant === "ghost",
          
          // SIZES
          "h-12 px-6 py-3": size === "default",
          "h-9 px-4 text-sm": size === "sm",
          "h-14 px-8 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}