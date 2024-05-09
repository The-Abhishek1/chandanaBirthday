import React from "react";
import photo from "../bindu/images/cha4.jpeg";
import vid from "../bindu/videos/chav7.mp4";
function Images() {
  return (
    <div className="flex flex-col justify-center items-center align-middle px-4">
      <video
        controls
        src={vid}
        autoPlay
        className="m-2  h-[250px] w-auto sm:w-[800px] "
      ></video>
      <img
        src={photo}
        alt="Picture of the Birthday Queen"
        className="m-2 rounded-[20px] smm:h-[400px] h-auto smm:w-[400px] sm:w-[800px] "
      />
    </div>
  );
}

export default Images;
