"use client";

import { useEndlessTravelAnimation } from "@/hooks";
import { cn } from "@/utils";
import Image from "next/image";
import { FC } from "react";

type Args = {
  startX: number;
  startY: number;
  endY: number;
  duration: number;
};

type TravelingBlobProps = {
  src: string;
  className?: string;
  args: Args;
};

export const TravelingBlob: FC<TravelingBlobProps> = ({
  src,
  className,
  args,
}) => {
  const screenHeight = window.innerHeight;
  const animatedRef = useEndlessTravelAnimation(
    args.startX,
    args.startY + screenHeight,
    args.endY,
    args.duration
  );
  return (
    <div ref={animatedRef} className={cn(className)}>
      <Image src={src} alt="blob" width={240} height={240} />
    </div>
  );
};