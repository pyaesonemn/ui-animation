import { DynamicBackground, Logo } from ".";

export const BgLoopSection = () => {
  return (
    <section className="relative bg-background w-full h-[100dvh] overflow-auto snap-start">
      <div className="w-full h-full flex items-center">
        <div className="w-full z-30 flex flex-col items-center justify-center">
          <Logo className="text-blue-800 w-3/5" />
          <div>Image</div>
        </div>
        <DynamicBackground />
      </div>
    </section>
  );
};
