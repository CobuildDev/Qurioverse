import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Smartphone } from "lucide-react";
import { BottomNav } from "@/components/ui/BottomNav";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Qurioverse",
  description: "Embark on a journey into the quantum realm.",
};

// Prevents zooming on mobile inputs to keep it feeling like a native app
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-white`}>
        
        {/* DESKTOP FALLBACK */}
        <div className="hidden md:flex h-screen w-full flex-col items-center justify-center bg-slate-950 text-slate-200 p-6 text-center">
          <Smartphone className="mb-6 h-16 w-16 text-indigo-500" />
          <h1 className="text-3xl font-bold mb-3 tracking-tight">Mobile Only Experience</h1>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Qurioverse is designed exclusively for mobile. Please open this link on your mobile device or use your browser's developer tools to simulate a mobile viewport.
          </p>
        </div>

        {/* MOBILE APP CONTAINER - FIX APPLIED */}
        {/* Removed max-w-md, mx-auto, and shadow-2xl for a full-bleed native experience */}
        <div className="md:hidden flex min-h-screen w-full flex-col relative bg-white">
          {children}
        </div>
{/* Global Bottom Navigation */}
          <BottomNav />
      </body>
    </html>
  );
}