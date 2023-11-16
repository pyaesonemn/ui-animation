"use client";

import { Bouncing } from "@/components";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* Top Row  */}
      <Bouncing className="absolute w-[40%] h-full bottom-[50%] right-[-12%] bg-transparent">
        <Image
          src="/person/person_three.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[42%] right-[12%] bg-transparent">
        <Image
          src="/person/person_one.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[34%] right-[36%] bg-transparent">
        <Image
          src="/person/person_four.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[28%] right-[60%] bg-transparent">
        <Image
          src="/person/person_two.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[20%] right-[84%] bg-transparent">
        <Image
          src="/person/person_three.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      {/* Top Row  */}
      {/* Middle Row  */}
      <Bouncing className="absolute w-[40%] h-full bottom-[15%] right-[-20%] bg-transparent">
        <Image
          src="/person/person_two.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[7%] right-[4%] bg-transparent">
        <Image
          src="/person/person_three.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[-1%] right-[28%] bg-transparent">
        <Image
          src="/person/person_one.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[-9%] right-[52%] bg-transparent">
        <Image
          src="/person/person_two.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[-17%] right-[76%] bg-transparent">
        <Image
          src="/person/person_four.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      {/* Middle Row  */}
      {/* Bottom Row  */}
      <Bouncing className="absolute w-[40%] h-full bottom-[-20%] right-[-12%] bg-transparent">
        <Image
          src="/person/person_three.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[-28%] right-[12%] bg-transparent">
        <Image
          src="/person/person_one.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[-36%] right-[36%] bg-transparent">
        <Image
          src="/person/person_four.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[-44%] right-[60%] bg-transparent">
        <Image
          src="/person/person_two.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      <Bouncing className="absolute w-[40%] h-full bottom-[-52%] right-[84%] bg-transparent">
        <Image
          src="/person/person_three.webp"
          fill={true}
          quality={80}
          objectFit="cover"
          alt="Person four"
        />
      </Bouncing>
      {/* Bottom Row  */}
    </div>
  );
};
