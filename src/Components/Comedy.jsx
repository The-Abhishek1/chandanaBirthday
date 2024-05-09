import React from "react";
import video1 from "../bindu/videos/chav10.mp4";
import video2 from "../bindu/videos/chav9.mp4";
import video3 from "../bindu/videos/chav11.mp4";

//Main Function
export default function Comedy() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center font-bold italic text-white text-[20px]">
          HER SMILE😁🐕💝
        </h1>
        <video
          className="h-[250px] w-[250px] cursor-pointer"
          src={video1}
          controls
        ></video>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center font-bold italic text-white text-[20px]">
          HER CUTENESS🤔💖💤
        </h1>
        <video
          className="h-[250px] w-[250px] cursor-pointer"
          src={video2}
          controls
        ></video>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-center font-bold italic text-white text-[20px]">
          AND WE😜💝💤
        </h1>
        <video
          className="h-[250px] w-[250px] cursor-pointer"
          src={video3}
          controls
        ></video>
      </div>
    </div>
  );
}
