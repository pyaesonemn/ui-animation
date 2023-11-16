import { cn } from "@/utils";
import Image from "next/image";
import { FC } from "react";

type PersonProps = {
  className?: string;
  positionClass?: string;
  src: string;
  width?: number;
  height?: number;
};

export const Person: FC<PersonProps> = ({
  src,
  width = 500,
  height = 500,
  className,
  positionClass,
}) => {
  return (
    <div className={cn(className)}>
      <Image
        src={src}
        alt="Person Two"
        width={width}
        height={height}
        className={cn(positionClass)}
      />
    </div>
  );
};
