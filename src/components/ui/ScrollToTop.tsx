"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to the top of the window on navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "smooth" if you want a transition, but for "opening from top" instant is better.
    });
  }, [pathname]);

  return null;
}
