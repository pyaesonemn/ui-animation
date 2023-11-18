import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image src="/gifs/loading.webp" alt="loading" width={400} height={400} />
    </div>
  );
};

export default Loading;
