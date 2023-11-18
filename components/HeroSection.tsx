import {
  HeroSectionFirstRow,
  HeroSectionFourthRow,
  HeroSectionSecondRow,
  HeroSectionThirdRow,
} from "@/static/data";
import { NavWrapper, Person } from ".";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[100dvh] bg-white overflow-hidden snap-start">
      <NavWrapper>
        <div className="w-fit ml-[-1rem] h-[64vh] overflow-hidden grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 grid-rows-1">
          {HeroSectionFirstRow.map(({ alt, src, id }) => (
            <div
              key={id}
              className="relative w-[45vw] sm:w-[30vw] h-[64vh] bg-transparent"
            >
              <Person alt={alt} src={src} />
            </div>
          ))}
        </div>

        <div className="w-fit h-[64vh] overflow-hidden mt-[-25rem] ml-[-10rem] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 grid-rows-1">
          {HeroSectionSecondRow.map(({ alt, src, id }) => (
            <div
              key={id}
              className="relative w-[45vw] sm:w-[30vw] h-[64vh] bg-transparent"
            >
              <Person alt={alt} src={src} animate={false} />
            </div>
          ))}
        </div>

        <div className="w-fit h-[64vh] overflow-hidden mt-[-25rem] ml-[-1rem] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 grid-rows-1">
          {HeroSectionThirdRow.map(({ alt, src, id }) => (
            <div
              key={id}
              className="relative w-[45vw] sm:w-[30vw] h-[64vh] bg-transparent"
            >
              <Person alt={alt} src={src} />
            </div>
          ))}
        </div>

        <div className="w-fit h-[64vh] overflow-hidden mt-[-27rem] ml-[-10rem] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 grid-rows-1">
          {HeroSectionFourthRow.map(({ alt, src, id }) => (
            <div
              key={id}
              className="relative w-[45vw] sm:w-[30vw] h-[64vh] bg-transparent"
            >
              <Person alt={alt} src={src} animate={false} />
            </div>
          ))}
        </div>
      </NavWrapper>
    </section>
  );
};
