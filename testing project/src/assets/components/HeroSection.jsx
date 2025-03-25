import React, { useState } from "react";

export default function HeroSection() {
  const [selected, setSelected] = useState("Hair Transplants");

  const bgStyles = {
    "Hair Transplants":
      "linear-gradient(54deg, rgba(0,0,0,1) 0%, rgba(67,67,67,1) 79%)",
    "Facelifts":
      "linear-gradient(54deg, rgba(35,88,201,1) 0%, rgba(255,218,215,1) 75%, rgba(237,225,251,1) 100%)",
    "Dental Care":
      "linear-gradient(54deg, rgba(116,235,213,1) 0%, rgba(172,182,229,1) 69%, rgba(237,225,251,1) 100%)",
    "Weight Loss Surgery":
      "linear-gradient(54deg, rgba(239,142,56,1) 0%, rgba(16,141,199,1) 100%)",
  };

  const rotationAngles = {
    "Hair Transplants": "rotate-0",
    "Facelifts": "rotate-[10deg]",
    "Dental Care": "rotate-[-10deg]",
    "Weight Loss Surgery": "rotate-[15deg]",
  };

  const imageChange = {
    "Hair Transplants": "/hero/hero 0.png",
    "Facelifts": "/hero/hero 1.png",
    "Dental Care": "/hero/hero 2.png",
    "Weight Loss Surgery": "/hero/hero 3.png",
  };

//   const gradientStyle = {
//     background:
//       "linear-gradient(54deg, rgba(35,88,201,1) 0%, rgba(255,218,215,1) 75%, rgba(237,225,251,1) 100%)",
//     display: "flex",
//     alignItems: "center",
//     color: "white",
//   };
  return (
    <div
      style={{background:bgStyles[selected]}}
      className="rounded-lg flex flex-row items-center text-white justify-between p-10"
    >
      <div className="flex flex-col justify-between gap-20 pt-20">
        <div>
          <h1 className="font-secondary text-5xl">
            Your Gateway to
            <br /> World-Class
            <br /> Medical Care
          </h1>
          <p className="mt-5">
            Connecting You to Leading Hospitals for Hair Transplants,
            <br /> Facelifts, and More in Turkey, Canada, and Beyond.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="p-3 border border-white-100 rounded-lg bg-blue-900">
              Start Your Consultation
            </button>
            <button className="p-3 border border-white-100 rounded-lg">
              Explore Our Services
            </button>
          </div>
        </div>
        {/* Doctors Info */}
        <div className="flex items-center justify-start gap-2">
          <img src="/hero/docters.png" alt="" />
          <p>Over 285 Doctors</p>
        </div>
      </div>

      {/* Right Content (Images & Buttons) */}
      <div className="relative flex justify-center items-end w-[50%]">
        <div>
          {/* Background Image */}
          <img
            className={`absolute bottom-0 right-[25%] w-[50%] max-w-lg opacity-80 transition-transform duration-500 ease-in-out ${
              rotationAngles[selected]
            }`}
            src="/hero/hero-bg.png"
            alt=""
          />
          <img
            className="relative z-10 w-[80%] max-w-md translate-y-26 transition-transform duration-500 ease-in-out"
            src={imageChange[selected]}
            alt=""
          />
        </div>
        {/* Button Group Overlapping Image */}
        <div className="absolute bottom-[-20%] right-10 flex gap-3 p-3 rounded-lg  z-20">
          {[
            "Hair Transplants",
            "Facelifts",
            "Dental Care",
            "Weight Loss Surgery",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`px-4 py-2 text-sm ${
                selected === item
                  ? "bg-white text-blue-800"
                  : "bg-white-300 hover:gray-300"
              } shadow-lg whitespace-nowrap rounded-lg hover:bg-gray-300 transition border border-white backdrop-blur-lg`}
            >
              {item}
            </button>
          ))}

          <button className="px-4 py-2 text-sm bg-white-300 shadow-lg whitespace-nowrap rounded-lg hover:bg-gray-300 transition border border-white backdrop-blur-lg">
            ...
          </button>
        </div>
      </div>
    </div>
  );
}
