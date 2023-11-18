"use client";

import { useTextAnimate } from "@/hooks";
import Image from "next/image";

export const ThirdSection = () => {
  const elementRef = useTextAnimate();
  return (
    <section className="relative w-full h-[100dvh] bg-blue-100 overflow-hidden snap-start">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <div className="mb-0 mt-auto flex justify-center lg:justify-end order-2 lg:order-1">
          <Image
            src={"/gifs/walking.webp"}
            alt="walking"
            width={600}
            height={600}
          />
        </div>
        <div
          className="lg:order-2 order-1 text-start font-semibold tracking-[1rem] text-blue-800 w-full h-full justify-center text-xl items-center flex flex-col gap-y-1"
          ref={elementRef}
        >
          <span>ふわふわの動物たちに、</span>
          <span>囲まれて暮らしたい</span>
          <span className="mt-8">ペットや動物が大好きなあなたへ</span>
        </div>
      </div>
    </section>
  );
};
