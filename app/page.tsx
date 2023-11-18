import { HeroSection, BgLoopSection } from "@/components";

export default function Home() {
  return (
    <main className="relative w-full max-h-screen overflow-y-scroll snap snap-mandatory snap-y">
      <HeroSection />
      <BgLoopSection />
    </main>
  );
}
