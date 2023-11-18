"use client";

import { Fade } from "react-awesome-reveal";

export const AnimatedText = () => {
  return (
    <Fade
      cascade
      className="font-semibold tracking-[1rem] text-blue-800 w-full h-full justify-center text-xl items-center flex flex-col gap-y-1"
    >
      <p>ふわふわの動物たちに、</p>
      <p>囲まれて暮らしたい</p>
      <p className="mt-8">ペットや動物が大好きなあなたへ</p>
    </Fade>
  );
};
