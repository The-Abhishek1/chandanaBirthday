import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import photo1 from "../bindu/images/cha1.jpeg";
import photo2 from "../bindu/images/cha2.jpeg";
import photo3 from "../bindu/images/cha3.jpeg";
import photo4 from "../bindu/images/cha4.jpeg";
import photo5 from "../bindu/images/cha5.jpeg";
import photo6 from "../bindu/images/cha6.jpeg";
import photo7 from "../bindu/images/cha7.jpeg";
import photo8 from "../bindu/images/cha8.jpeg";
import photo9 from "../bindu/images/cha10.jpeg";
import photo10 from "../bindu/images/cha11.jpeg";
import photo11 from "../bindu/images/cha12.jpeg";
import photo12 from "../bindu/images/cha13.jpeg";
import photo13 from "../bindu/images/cha14.jpeg";

// main Function
export default function ImageSlider() {
  const testimonials = [
    {
      img: photo1,
      quote:
        "Her smile is like sunshine on a cloudy day, brightening every corner of my world 🌞💖.",
      name: "Nandish",
    },
    {
      img: photo2,
      quote:
        "In every picture, she paints a thousand words of beauty, grace, and strength 🎨✨.",
      name: "Karthik",
    },
    {
      img: photo3,
      quote:
        "Capturing moments with her is like collecting treasures of happiness that last a lifetime 📸💫.",
      name: "Sahitya",
    },
    {
      img: photo4,
      quote:
        "Behind every picture of her lies a story of love, laughter, and endless memories 💞📷.",
      name: "Yogesh",
    },
    {
      img: photo5,
      quote:
        "She's not just in the picture; she's the masterpiece that makes every moment unforgettable 🖼️💖.",
      name: "Sanvi",
    },
    {
      img: photo6,
      quote: "With you, every day is a new chapter in our love story 💞📖",
      name: "Shobha",
    },
    {
      img: photo7,
      quote:
        "In every picture, she paints a thousand words of beauty, grace, and strength 🎨✨.",
      name: "Nagesh",
    },
    {
      img: photo8,
      quote: "Capturing memories with you is my favorite pastime 📸💖",
      name: "Spandana",
    },
    {
      img: photo9,
      quote: "You're the light that guides me through the darkest of days 💫😊",
      name: "Aaryan",
    },
    {
      img: photo10,
      quote: "Every moment spent with you is a moment worth celebrating 🎉🥰",
      name: "Ayush",
    },
    {
      img: photo11,
      quote:
        "With you, I'm ready to take on the world and explore every corner of it 💑🌍",
      name: "Idiot",
    },
    {
      img: photo12,
      quote:
        "Our love is like a timeless masterpiece, growing more beautiful with each passing day 🎨💖",
      name: "Nandish",
    },
    {
      img: photo13,
      quote: "Here's to forever and always, my love 💍💖",
      name: "Aaryan",
    },
  ];
  const testimonialsRef = useRef(null);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full mx-auto text-center p-2">
      <div className="relative h-[200px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-[50px] before:-z-10 mt-2">
          <div className="h-[260px] [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                className="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
              >
                <img
                  className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                  src={testimonial.img}
                  alt={testimonial.name}
                  style={{ height: "250px", width: "250px" }}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out p-2">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-[14px] mt-16 italic text-white before:content-['\201C'] after:content-['\201D'] ">
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center -m-2.5 p-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
              active === index
                ? "bg-indigo-500 text-white shadow-indigo-950/10"
                : "bg-white hover:bg-indigo-100 text-slate-900"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span>{testimonial.name}</span>
            <span
              className={`${
                active === index ? "text-indigo-200" : "text-slate-300"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}
