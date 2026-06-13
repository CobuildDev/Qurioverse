import type { Metadata, Viewport } from "next";
import { Fredoka, Outfit } from "next/font/google";
import { Smartphone } from "lucide-react";
import { BottomNav } from "@/components/ui/BottomNav";
import { MainLayoutWrapper } from "@/components/ui/MainLayoutWrapper";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://qurioverse.vercel.app"),
  title: "Quiroverse",
  description: "Embark on an energetic quantum journey into the subatomic realm! Designed for ages 15-17.",
  openGraph: {
    title: "Quiroverse",
    description: "Embark on an energetic quantum journey into the subatomic realm! Designed for ages 15-17.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qurioverse",
    description: "Embark on an energetic quantum journey into the subatomic realm! Designed for ages 15-17.",
  },
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

        <div className="flex min-h-screen w-full flex-col md:flex-row relative bg-slate-50">
          {/* Desktop Sidebar / Mobile Bottom Nav */}
          <BottomNav />

          {/* Main Content Area */}
          <MainLayoutWrapper>
            {children}
          </MainLayoutWrapper>
        </div>

      </body>
    </html>
  );
}