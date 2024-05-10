import React from "react";
import photo from "../bindu/images/cha4.jpeg";
import vid from "../bindu/videos/chav4.mp4";
import vid1 from "../bindu/videos/chav21.mp4";

//Main Function
function Images() {
  return (
    <div className="flex flex-col justify-center items-center align-middle px-4">
      <video
        controls
        src={vid}
        autoPlay
        className="m-2  h-[250px] w-auto sm:w-[800px] "
      ></video>
      <video
        controls
        src={vid1}
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
