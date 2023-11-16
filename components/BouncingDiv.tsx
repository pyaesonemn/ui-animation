"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

type BouncingDivProps = {
  children: ReactNode;
  className?: string;
};

export const BouncingDiv: FC<BouncingDivProps> = ({ children, className }) => {
  //   const randomNumber = Math.random() * (1 - 0.85) + 0.85;
  return (
    <motion.div
      transition={{
        y: {
          duration: 1,
          yoyo: Infinity,
          ease: "easeInOut",
          repeat: Infinity,
        },
        scale: {
          duration: 1,
          repeat: Infinity,
        },
      }}
      animate={{ y: ["0%", "-8%", "0%"], scale: ["100%", "102.5%", "100%"] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
