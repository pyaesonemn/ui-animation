import { TravelingBlob } from ".";

export const DynamicBackground = () => {
  return (
    <div className="absolute z-0 w-full h-full bg-transparent overflow-hidden">
      <TravelingBlob
        src="/blobs/blob_one.svg"
        args={{
          startX: 240,
          startY: 200,
          endY: -200,
          duration: 5,
        }}
      />
      <TravelingBlob
        src="/blobs/blob_two.svg"
        args={{
          startX: 600,
          startY: 100,
          endY: -400,
          duration: 6.5,
        }}
      />
      <TravelingBlob
        src="/blobs/blob_three.svg"
        args={{
          startX: 1000,
          startY: 100,
          endY: -800,
          duration: 6.5,
        }}
      />
      <TravelingBlob
        src="/blobs/blob_two.svg"
        args={{
          startX: 1200,
          startY: 300,
          endY: -900,
          duration: 5.5,
        }}
      />
    </div>
  );
};
