import React, { useState } from "react";
import video1 from "../bindu/videos/chav2.mp4";

function VideoPlayer() {
  return (
    <div className="grid place-content-center p-2">
      <div className="mt-10 gap-5 grid place-content-center mb-10">
        <video
          src={[video1]}
          controls
          className="h-[250px] w-[250px] cursor-pointer"
        ></video>
      </div>
      <p className="text-center pt-0 pb-3 italic p-2 text-white">
        "Her presence paints the world with hues of joy, love, and endless
        beauty. 🌟💖✨ #ShiningBright😊😊"
      </p>
    </div>
  );
}

export default VideoPlayer;
