"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const ThirdSection = () => {
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

        <div className="lg:order-2 order-1 sm:px-0 px-5">
          <Fade
            cascade
            className="text-start font-semibold tracking-[1rem] text-blue-800 w-full h-full justify-center text-base sm:text-xl items-center flex flex-col gap-y-1"
          >
            <span id="char">ふわふわの動物たちに、</span>
            <span id="char">囲まれて暮らしたい</span>
            <span className="mt-8">ペットや動物が大好きなあなたへ</span>
          </Fade>
        </div>
      </div>
    </section>
  );
};
