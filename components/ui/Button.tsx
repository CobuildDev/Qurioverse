import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
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
        "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all focus:outline-none select-none active:translate-y-[4px] disabled:opacity-50 disabled:pointer-events-none active:border-b-2",
        {
          // PRIMARY: Tactile Vibrant Purple
          "bg-brand-purple text-white border-2 border-b-6 border-brand-purple-dark hover:bg-brand-purple/95 rounded-2xl": variant === "primary",
          
          // SECONDARY: Tactile Electric Teal
          "bg-brand-teal text-white border-2 border-b-6 border-brand-teal-dark hover:bg-brand-teal/95 rounded-2xl": variant === "secondary",

          // ACCENT: Tactile Sunny Yellow (high energy)
          "bg-brand-yellow text-brand-slate border-2 border-b-6 border-brand-yellow-dark hover:bg-brand-yellow/95 rounded-2xl": variant === "accent",
          
          // OUTLINE: White / Light Gray tactile button
          "bg-white border-2 border-b-6 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-2xl": variant === "outline",
          
          // GHOST: Flat, transparent background
          "bg-transparent text-slate-500 hover:bg-slate-100/50 rounded-2xl active:translate-y-0 active:border-b-0 border-0": variant === "ghost",
          
          // SIZES
          "h-12 px-6 text-xs": size === "default",
          "h-10 px-4 text-xs": size === "sm",
          "h-14 px-8 text-sm": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}