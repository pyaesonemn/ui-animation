import { FC, ReactNode } from "react";
import { Logo } from ".";
import Image from "next/image";

type NavWrapperProps = {
  children: ReactNode;
  isWithLogo?: boolean;
};

export const NavWrapper: FC<NavWrapperProps> = ({
  children,
  isWithLogo = true,
}) => {
  return (
    <div className="relative w-full h-full">
      {isWithLogo ? (
        <div className="z-50 absolute w-full px-10 py-12">
          <Logo className="text-blue-800 w-[45%]" />
        </div>
      ) : null}
      <div className="absolute z-50 w-fit px-10 py-6 bottom-0 left-0">
        <div className="flex flex-row gap-x-5">
          <Image
            src="/icons/discord.svg"
            alt="discord"
            width={40}
            height={40}
          />
          <Image
            src="/icons/opensea.svg"
            alt="opensea"
            width={40}
            height={40}
          />
          <Image
            src="/icons/twitter.svg"
            alt="twitter"
            width={40}
            height={40}
          />
        </div>
      </div>
      {children}
    </div>
  );
};
