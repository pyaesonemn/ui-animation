"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";

type AnimationOptions = {
  [key: string]: any;
};

type useTextAnimateProps = (
  from?: AnimationOptions,
  to?: AnimationOptions
) => React.MutableRefObject<any>;

// const animateWords = (target: HTMLElement) => {
//   gsap.from(target.children, {
//     opacity: 0,
//     y: 20,
//     stagger: 0.2,
//     duration: 0.6,
//     ease: "power3.out",
//   });
// };

export const useTextAnimate: useTextAnimateProps = (from, to) => {
  const elementRef = useRef(null);

  //   const defaultProps = {
  //     from: {
  //       y: 100,
  //       opacity: 0,
  //     },
  //     to: {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       scrollTrigger: {
  //         start: "top 0%",
  //         end: "bottom 90%",
  //         scrub: 0.5,
  //       },
  //     },
  //   };

  //   useEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);
  //     const element = elementRef.current;

  //     if (element) {
  //       gsap.fromTo(element, from || defaultProps.from, {
  //         ...(to || defaultProps.to),
  //         scrollTrigger: {
  //           trigger: element,
  //           ...(to?.scrollTrigger || defaultProps.to.scrollTrigger),
  //           onEnter: () => animateWords(element),
  //         },
  //       });
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [from, to]);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  if (typeof document !== "undefined") {
    let mySplitText = new SplitText(elementRef.current, {
      type: "words,chars",
    });
    let chars = mySplitText?.chars;
    gsap.from(chars, {
      yPercent: 12,
      stagger: 0.1,
      ease: "power3.out",
      duration: 0.6,
      repeat: -1,
      yoyo: true,
    });
  } else {
    gsap.from(elementRef.current, {
      yPercent: 12,
      stagger: 0.1,
      ease: "power3.out",
      duration: 0.6,
      repeat: -1,
      yoyo: true,
    });
  }

  return elementRef;
};
