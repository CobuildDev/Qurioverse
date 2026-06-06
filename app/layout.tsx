import type { Metadata, Viewport } from "next";
import { Fredoka, Outfit } from "next/font/google";
import { Smartphone } from "lucide-react";
import { BottomNav } from "@/components/ui/BottomNav";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Qurioverse",
  description: "Embark on an energetic quantum journey into the subatomic realm! Designed for ages 5-17.",
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
      <body className={`${fredoka.variable} ${outfit.variable} antialiased bg-slate-900 font-fredoka`}>

        {/* DESKTOP FALLBACK */}
        <div className="hidden md:flex h-screen w-full flex-col items-center justify-center bg-slate-950 text-slate-200 p-6 text-center">
          <Smartphone className="mb-6 h-16 w-16 text-cyan-400 animate-bounce" />
          <h1 className="text-3xl font-extrabold mb-3 tracking-tight font-outfit text-white">Mobile Only Experience</h1>
          <p className="text-slate-400 max-w-md leading-relaxed text-sm">
            Qurioverse is designed exclusively for mobile viewport. Please open this link on your mobile device or use your browser's developer tools to simulate a mobile screen (e.g. iPhone 12 Pro).
          </p>
        </div>

        {/* MOBILE APP CONTAINER */}
        <div className="md:hidden flex min-h-screen w-full flex-col relative bg-slate-50">
          {children}
          {/* Global Bottom Navigation placed inside mobile-only view for proper native layout */}
          <BottomNav />
        </div>

      </body>
    </html>
  );
}