"use client";

import React, { useState } from "react";
import ChatBot from "@/components/ui/ChatBot";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import BestWork from "@/components/sections/BestWork";
import Mission from "@/components/sections/Mission";
import TechHub from "@/components/sections/TechHub";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  const [isChatOpen, setChatOpen] = useState(false);

  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-between text-white bg-transparent overflow-x-hidden selection:bg-purple-500/30">
      
      {/* Interactive AI Portfolio Assistant (@/components/ui/ChatBot) */}
      <ChatBot isOpen={isChatOpen} onClose={() => setChatOpen(false)} />

      {/* --- Section 0: Viewport-Perfect Hero --- */}
      <Hero onOpenChat={() => setChatOpen(true)} />

      {/* --- Section 1: Identity Strip --- */}
      <Marquee />

      {/* --- Section 2: Success Stats --- */}
      <Stats />

      {/* --- Section 3: Featured Projects --- */}
      <BestWork />

      {/* --- Section 4: Mission Statement --- */}
      <Mission />

      {/* --- Section 5: The Technology Engine --- */}
      <TechHub />

      {/* --- Section 6: Final Handoff Call --- */}
      <FinalCTA onOpenChat={() => setChatOpen(true)} />

    </main>
  );
}
