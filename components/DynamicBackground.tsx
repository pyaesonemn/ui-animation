"use client";

import { useRef } from "react";
import { TravelingBlob } from ".";

export const DynamicBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const deviceHeight = containerRef.current?.clientHeight || 960;
  return (
    <div
      className="absolute z-0 w-full h-full bg-transparent overflow-hidden"
      ref={containerRef}
    >
      <TravelingBlob
        src="/blobs/blob_two.svg"
        args={{
          startX: 60,
          startY: deviceHeight + 100,
          endY: -200,
          duration: 4.8,
        }}
      />
      <TravelingBlob
        src="/blobs/blob_one.svg"
        args={{
          startX: 240,
          startY: deviceHeight + 200,
          endY: -400,
          duration: 5,
        }}
      />
      <TravelingBlob
        src="/blobs/blob_two.svg"
        args={{
          startX: 600,
          startY: deviceHeight + 100,
          endY: -600,
          duration: 6.5,
        }}
      />
      <TravelingBlob
        src="/blobs/blob_three.svg"
        args={{
          startX: 600,
          startY: deviceHeight + 200,
          endY: -900,
          duration: 6.5,
          delay: 2,
        }}
      />
      <TravelingBlob
        src="/blobs/blob_three.svg"
        args={{
          startX: 1000,
          startY: deviceHeight + 100,
          endY: -1200,
          duration: 6.5,
        }}
      />
      <TravelingBlob
        src="/blobs/blob_one.svg"
        args={{
          startX: 1200,
          startY: deviceHeight + 100,
          endY: -1500,
          duration: 5.5,
        }}
      />
    </div>
  );
};
