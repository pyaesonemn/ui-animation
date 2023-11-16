"use client";

import { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

type BouncingProps = {
  className?: string;
  children: ReactNode;
};

export const Bouncing: FC<BouncingProps> = ({ className, children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(element, {
        y: "-8%",
        duration: 1,
        ease: "easeInOut",
      })
        .to(element, {
          y: "0%",
          duration: 1,
          ease: "easeInOut",
        })
        .to(
          element,
          {
            scale: 1.025,
            duration: 1,
          },
          0
        )
        .to(
          element,
          {
            scale: 1,
            duration: 1,
          },
          "-=1"
        );
    }
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};
