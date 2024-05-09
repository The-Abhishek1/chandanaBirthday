import React, { useState } from "react";
import { db, storage } from "../FireBase/FireBase";
import { collection, addDoc } from "firebase/firestore";
import video1 from "../bindu/videos/chav12.mp4";
import video2 from "../bindu/videos/chav7.mp4";
import video3 from "../bindu/videos/chav3.mp4";
import video4 from "../bindu/videos/chav1.mp4";
import video5 from "../bindu/videos/chav13.mp4";
import video6 from "../bindu/videos/chav6.mp4";
import video7 from "../bindu/videos/chav14.mp4";

function Footer() {
  const [show, setShow] = useState(false);
  const [firstNo, setFirstNo] = useState(false);
  const [secondNo, setSecond] = useState(false);
  const [thirdNo, setThird] = useState(false);
  const [fourthNo, setFourth] = useState(false);
  const [fifthNo, setFifth] = useState(false);
  const [sixthNo, setSixth] = useState(false);
  const [yes, setYes] = useState(false);

  const submitYes = async () => {
    const Yes = true;
    try {
      const docRef = await addDoc(collection(db, "Accepted"), {
        Accecpted: Yes,
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const submitNo = async () => {
    const No = false;
    try {
      const docRef = await addDoc(collection(db, "Rejected"), {
        Rejected: No,
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="p-4">
        <div>
          <h3 className="text-center italic text-white text-[20px]">
            Wanna Play a Game?🎮🕹️
          </h3>
          <h4 className="text-white text-[13px] text-center italic">
            <p className="text-[15px] text-cyan-400">Warning!!</p>
            "Before you play: Remember, it's all in good fun! Don't blame me for
            any butterflies in your stomach or smiles on your face afterward
            😉💖"
          </h4>
          <p className="text-center">
            <button
              onClick={() => {
                if (secondNo == false && firstNo == false && yes == false) {
                  setShow(!show);
                  console.log("Showing Propose Dialog");
                }
              }}
              className="px-[10px] text-center text-white italic bg-lime-500 border-none rounded-[10px] py-[8px] m-4 cursor-pointer"
            >
              Click here to start
            </button>
          </p>
        </div>
        <div className="p-4 pb-10">
          {show ? (
            <div className="flex flex-col items-center italic gap-4">
              <h3 className="text-center text-white">
                "Her beauty shines brighter than the sun ☀️✨"
              </h3>
              <video
                autoPlay
                src={video1}
                controls
                className="h-[250px] w-[250px] cursor-pointer"
              ></video>
              <div className="flex flex-row justify-around gap-10 mt-[10px] ">
                <button
                  onClick={() => {
                    setShow(false);
                    setFirstNo(true);
                  }}
                  className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
                >
                  Next
                </button>
              </div>
            </div>
          ) : null}
        </div>
        {firstNo ? (
          <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
            <h3 className="text-center text-white">
              "Her kindness lights up every room she enters 💖😊"
            </h3>
            <video
              autoPlay
              src={video2}
              controls
              className="h-[250px] w-[250px] cursor-pointer"
            ></video>
            <div className="flex flex-row gap-10 justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setFirstNo(false);
                  setSecond(true);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Next
              </button>
            </div>
          </div>
        ) : null}

        {secondNo ? (
          <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
            <h3 className="text-center text-white">
              "Her strength and resilience inspire me every day 💪🌟"
            </h3>
            <video
              autoPlay
              src={video3}
              controls
              className="h-[250px] w-[250px] cursor-pointer"
            ></video>
            <div className="flex flex-row gap-10 justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setSecond(false);
                  setThird(true);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
        {thirdNo ? (
          <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
            <h3 className="text-center text-white">
              "Her compassion knows no bounds, touching hearts wherever she goes
              💕😊"
            </h3>
            <video
              autoPlay
              src={video4}
              controls
              className="h-[250px] w-[250px] cursor-pointer"
            ></video>
            <div className="flex flex-row gap-10 justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setThird(false);
                  setFourth(true);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
        {fourthNo ? (
          <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
            <h3 className="text-center text-white">
              "Her grace and elegance are simply breathtaking 💃✨"
            </h3>
            <video
              autoPlay
              src={video5}
              controls
              className="h-[250px] w-[250px] cursor-pointer"
            ></video>
            <div className="flex flex-row gap-10 justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setFourth(false);
                  setFifth(true);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
        {fifthNo ? (
          <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
            <h3 className="text-center text-white">
              "Her love fills my life with endless joy and happiness 💖😍"
            </h3>
            <video
              autoPlay
              src={video6}
              controls
              className="h-[250px] w-[250px] cursor-pointer"
            ></video>
            <div className="flex flex-row gap-10 justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setFifth(false);
                  setSixth(true);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
        {sixthNo ? (
          <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
            <h3 className="text-center text-white">
              "🌹🎈✨ Will you be the 🌟 to my ✨, the 🎶 to my 🎵, and make
              every moment 💖 with me? 💍🥂 #TogetherForever. I love You, Do you
              love me?😜💤"
            </h3>
            <video
              autoPlay
              src={video7}
              controls
              className="h-[250px] w-[250px] cursor-pointer"
            ></video>
            <div className="flex flex-row gap-10 justify-around mt-[10px] ">
              <button
                onClick={() => {
                  setSixth(false);
                  alert(
                    `"Oh, looks like you found the secret button! 😉 Let's focus on creating awesome memories together, regardless of labels. Sound good? 😄🎉"`
                  );
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                No
              </button>
              <button
                onClick={() => {
                  setSixth(false);
                  setYes(true);
                }}
                className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
              >
                Yes
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {yes ? (
        <div className="flex pb-10 flex-col gap-4 items-center italic mt-[-30px] pb-6">
          <h3 className="text-center text-white italic">
            "Yay! Your answer warms my heart. Thank you for making me the
            happiest person alive! 🥰💕"
          </h3>
          <video
            autoPlay
            src={video4}
            controls
            className="h-[250px] w-[250px] cursor-pointer"
          ></video>
          <video
            src={video5}
            controls
            className="h-[250px] w-[250px] cursor-pointer"
          ></video>
        </div>
      ) : null}
    </>
  );
}

export default Footer;
