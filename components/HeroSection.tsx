import { Person } from ".";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[100dvh] bg-red-500 overflow-hidden snap-start">
      {/* <Person
        alt="Person One"
        src="/person/person_one.svg"
        className="bottom-[-20%] right-[-20%]"
      />
      <Person
        alt="Person Two"
        src="/person/person_two.svg"
        className="bottom-[-28%] right-[10%]"
      />
      <Person
        alt="Person Two"
        src="/person/person_two.svg"
        className="bottom-[-36%] right-[40%]"
      />
      <Person
        alt="Person Two"
        src="/person/person_two.svg"
        className="bottom-[-28%] right-[10%]"
      />
      <Person
        alt="Person Two"
        src="/person/person_two.svg"
        className="bottom-[-28%] right-[10%]"

      /> */}

      <div className="w-fit ml-[-1rem] h-fit grid grid-cols-5 grid-rows-1">
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
      </div>
      <div className="w-fit h-fit mt-[-25rem] ml-[-10rem] grid grid-cols-5 grid-flow-row">
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
      </div>
      <div className="w-fit ml-[-1rem] mt-[-25rem] h-fit grid grid-cols-5 grid-rows-1">
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
      </div>
      <div className="w-fit h-fit mt-[-25rem] ml-[-10rem] grid grid-cols-5 grid-flow-row">
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
        <div className="relative w-[30vw] h-[64vh] bg-transparent">
          <Person alt="Person One" src="/person/person_one.svg" />
        </div>
      </div>

      {/* <Image
        width={screenWidth ? screenWidth / 3 : 500}
        height={400}
        src={"/person/person_two.svg"}
        alt="Person One"
        objectFit="cover"
        className="absolute bottom-0 right-[-20%]"
      />
      <Image
        width={screenWidth ? screenWidth / 3 : 500}
        height={400}
        src={"/person/person_one.svg"}
        alt="Person One"
        objectFit="cover"
        className="absolute bottom-0 right-[10%]"
      />
      <Image
        width={screenWidth ? screenWidth / 3 : 500}
        height={400}
        src={"/person/person_one.svg"}
        alt="Person One"
        objectFit="cover"
        className="absolute bottom-0 right-[40%]"
      />
      <Image
        width={screenWidth ? screenWidth / 3 : 500}
        height={400}
        src={"/person/person_one.svg"}
        alt="Person One"
        objectFit="cover"
        className="absolute bottom-0 right-[70%]"
      /> */}
    </section>
  );
};
