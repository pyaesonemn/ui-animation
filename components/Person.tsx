"use client";

import { useBouncing } from "@/hooks";
import { cn } from "@/utils";
import Image from "next/image";
import { FC } from "react";

type PersonProps = {
  className?: string;
  alt: string;
  src: string;
};

export const Person: FC<PersonProps> = ({ src, className, alt }) => {
  const elementRef = useBouncing();
  return (
    <div
      className={cn("absolute w-auto max-w-full h-auto", className)}
      ref={elementRef}
    >
      <Image
        width={1330}
        height={1438}
        sizes="100vw"
        alt={alt}
        src={src}
        objectFit="fill"
        quality={80}
      />
    </div>
  );
};
