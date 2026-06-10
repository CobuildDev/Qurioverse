"use client";

import { usePathname } from "next/navigation";

export function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Add any future routes here where the nav SHOULD appear
  const showOnRoutes = ["/map", "/library", "/tutor", "/progress", "/completion", "/leaderboard", "/puzzle"];
  const hasNav = showOnRoutes.includes(pathname);

  return (
    <div className={`flex-1 flex flex-col w-full min-h-screen ${hasNav ? "md:ml-[288px]" : ""}`}>
      {children}
    </div>
  );
}
