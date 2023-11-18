"use client";

import { HeroSection, SecondSection, ThirdSection } from "@/components";
import { UIEvent, useState } from "react";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e: UIEvent) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom) {
      console.log("here");
    }
    if (e.currentTarget.scrollTop > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
    console.log(isScrolling);
  };

  return (
    <main
      onScroll={handleScroll}
      className="relative w-full max-h-screen overflow-y-scroll snap snap-mandatory snap-y"
    >
      <HeroSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
