"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const useEndlessTravelAnimation = (
  startX: number,
  startY: number,
  endY: number,
  duration: number
) => {
  const elementRef = useRef(null);
  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      // Initial position
      gsap.set(element, { y: startY, x: startX });

      // Animation
      const animation = gsap.to(element, {
        duration,
        y: endY,
        ease: "linear",
        onComplete: () => {
          // Restart animation
          gsap.set(element, { y: startY, x: startX });
        },
      });

      // Repeat the animation indefinitely
      animation.repeat(-1);

      // Cleanup when the component unmounts
      return () => {
        animation.kill(); // Kill the animation to prevent memory leaks
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startY, endY, duration]);

  return elementRef;
};
