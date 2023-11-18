import Image from "next/image";
import { DynamicBackground, Logo } from ".";

export const SecondSection = () => {
  return (
    <section className="relative bg-background w-full h-[100dvh] overflow-auto snap-start">
      <div className="w-full h-full flex items-center">
        <div className="w-full z-30 flex flex-col items-center justify-center">
          <Logo className="text-blue-800 w-3/5" />
          <div className="-rotate-90 h-[240px] w-[120px] -mt-20 sm:-mt-40 lg:-mt-48 sm:h-[480px] sm:w-[224px] lg:h-[600px] lg:w-[280px]">
            <Image
              src={"/gifs/walking.webp"}
              alt="walking"
              fill={true}
              objectFit="cover"
            />
          </div>
        </div>
        <DynamicBackground />
      </div>
    </section>
  );
};
