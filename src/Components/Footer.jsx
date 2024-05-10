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
//Yes Videos
import video15 from "../bindu/videos/chav15.mp4";
import video16 from "../bindu/videos/chav16.mp4";

//No Videos
import video17 from "../bindu/videos/chav17.mp4";
import video18 from "../bindu/videos/chav5.mp4";
import video19 from "../bindu/videos/chav18.mp4";
function Footer() {
  const [show, setShow] = useState(false);
  const [firstNo, setFirstNo] = useState(false);
  const [secondNo, setSecond] = useState(false);
  const [thirdNo, setThird] = useState(false);
  const [fourthNo, setFourth] = useState(false);
  const [fifthNo, setFifth] = useState(false);
  const [sixthNo, setSixth] = useState(false);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [no1, setNo1] = useState(false);
  const [no2, setNo2] = useState(false);

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
                    setFirstNo(!firstNo);
                  }}
                  className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
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
                  setShow(!show);
                  setFirstNo(false);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Back
              </button>
              <button
                onClick={() => {
                  setFirstNo(false);
                  setSecond(true);
                }}
                className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
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
                  setFirstNo(!firstNo);
                  setSecond(false);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Back
              </button>
              <button
                onClick={() => {
                  setSecond(false);
                  setThird(true);
                }}
                className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
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
                  setSecond(!secondNo);
                  setThird(false);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Back
              </button>
              <button
                onClick={() => {
                  setThird(false);
                  setFourth(true);
                }}
                className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
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
                  setThird(!thirdNo);
                  setFourth(false);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Back
              </button>
              <button
                onClick={() => {
                  setFourth(false);
                  setFifth(true);
                }}
                className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
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
                  setFourth(!fourthNo);
                  setFifth(false);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                Back
              </button>
              <button
                onClick={() => {
                  setFifth(false);
                  setSixth(true);
                }}
                className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
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
                  setFifth(!fifthNo);
                  setSixth(false);
                }}
                className="italic py-1 px-8 bg-blue-500 rounded-[10px] text-center text-white cursor-pointer "
              >
                Back
              </button>
              <button
                onClick={() => {
                  submitNo();
                  setSixth(false);
                  setNo(true);
                }}
                className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
              >
                No
              </button>
              <button
                onClick={() => {
                  setSixth(false);
                  setYes(true);
                  submitYes();
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
        <div className="flex pb-10 flex-col gap-4 items-center italic mt-[-30px]">
          <h3 className="text-center text-white italic">
            "Yay! Your answer warms my heart. Thank you for making me the
            happiest person alive! 🥰💕"
          </h3>
          <video
            autoPlay
            src={video15}
            controls
            className="h-[250px] w-[250px] cursor-pointer"
          ></video>
          <video
            src={video16}
            controls
            className="h-[250px] w-[250px] cursor-pointer"
          ></video>
        </div>
      ) : null}
      {no ? (
        <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
          <h3 className="text-center text-white">
            "Hey!😊 Think again? Feelings can be tricky.💭💖"
          </h3>
          <video
            autoPlay
            src={video19}
            controls
            className="h-[250px] w-[250px] cursor-pointer"
          ></video>
          <div className="flex flex-row gap-10 justify-around mt-[10px] ">
            <button
              onClick={() => {
                submitNo();
                setNo(false);
                setNo1(true);
              }}
              className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
            >
              No
            </button>
            <button
              onClick={() => {
                setNo(false);
                setYes(!yes);
                submitYes();
              }}
              className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
            >
              Yes
            </button>
          </div>
        </div>
      ) : null}
      {no1 ? (
        <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
          <h3 className="text-center text-white">
            "Hey!😊 Give it another thought? Feelings can surprise us.💭💖"
          </h3>
          <video
            autoPlay
            src={video17}
            controls
            className="h-[250px] w-[250px] cursor-pointer"
          ></video>
          <div className="flex flex-row gap-10 justify-around mt-[10px] ">
            <button
              onClick={() => {
                submitNo();
                setNo1(false);
                setNo2(true);
              }}
              className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
            >
              No
            </button>
            <button
              onClick={() => {
                setNo1(false);
                setYes(!yes);
                submitYes();
              }}
              className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
            >
              Yes
            </button>
          </div>
        </div>
      ) : null}
      {no2 ? (
        <div className="flex pb-10 flex-col items-center italic gap-4 mt-[-20px]">
          <h3 className="text-center text-white">
            "Hey!😊 Think again? Feelings can be tricky.💭💖"
          </h3>
          <video
            autoPlay
            src={video18}
            controls
            className="h-[250px] w-[250px] cursor-pointer"
          ></video>
          <div className="flex flex-row gap-10 justify-around mt-[10px] ">
            <button
              onClick={() => {
                submitNo();
                setNo2(false);
                alert(
                  "Oh, looks like you found the secret button! 😉 Let's focus on creating awesome memories together, regardless of labels. Sound good? 😄🎉. Yay! Your answer warms my heart. Thank you for making me the happiest person alive! 🥰"
                );
              }}
              className="italic py-1 px-8 bg-red-600 rounded-[10px] text-center text-white cursor-pointer "
            >
              No
            </button>
            <button
              onClick={() => {
                setNo2(false);
                setYes(!yes);
                submitYes();
              }}
              className="italic py-1 px-8 bg-lime-500 rounded-[10px] text-center text-white cursor-pointer "
            >
              Yes
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Footer;
