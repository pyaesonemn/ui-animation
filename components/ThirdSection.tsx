import Image from "next/image";
import { AnimatedText, NavWrapper } from ".";

export const ThirdSection = () => {
  return (
    <section className="relative w-full h-[100dvh] bg-blue-100 overflow-hidden snap-start">
      <NavWrapper>
        <div className="w-full h-full mt-auto mb-0 grid grid-cols-1 lg:grid-cols-2 justify-end items-center">
          <div className="relative w-full h-full flex justify-center items-end lg:justify-end order-2 lg:order-1 mt-10">
            <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]">
              <Image src={"/gifs/walking.webp"} alt="walking" fill={true} />
            </div>
          </div>

          <div className="lg:order-2 order-1 sm:px-0 px-10 text-center sm:text-start">
            <AnimatedText />
          </div>
        </div>
      </NavWrapper>
    </section>
  );
};
