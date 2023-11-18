"use client";

import { useBouncing } from "@/hooks";
import { cn } from "@/utils";
import Image from "next/image";
import { FC } from "react";

type PersonProps = {
  className?: string;
  alt: string;
  src: string;
  animate?: boolean;
};

export const Person: FC<PersonProps> = ({
  src,
  className,
  alt,
  animate = true,
}) => {
  const elementRef = useBouncing();
  return (
    <div
      className={cn("absolute w-full h-full", className)}
      ref={animate ? elementRef : null}
    >
      <Image fill={true} alt={alt} src={src} objectFit="cover" quality={80} />
    </div>
  );
};
