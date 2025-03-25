import React from "react";

export default function OurSpecialties() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full my-10">
        <div className="relative flex items-center">
          {/* Left and Right Fading Lines */}
          <span className="absolute left-0 top-1/2 w-[50vw] h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
          <span className="absolute right-0 top-1/2 w-[50vw] h-[2px] bg-gradient-to-l from-transparent via-blue-400 to-transparent"></span>

          {/* Centered Text */}
          <span className="relative px-6 py-2 border border-blue-500 rounded-full bg-white text-blue-800 font-semibold text-lg">
            Our Specialties
          </span>
        </div>
        {/* {our Specialties} */}
      </div>
      <div className="">
        <p className="mx-auto text-center max-w-3xl text-sm text-gray-500">
          This content aims to balance information and engagement while guiding
          users to key actions like starting consultations or exploring
          services. It’s designed to build trust through testimonials and
          highlight the benefits of choosing Imperium Health Group, with clear
          calls-to-action for smooth navigation and lead generation.
        </p>
      </div>
      <div className="flex justify-around mt-5">
        <div className="flex p-2 rounded-lg" style={{ background: "#FFB5E8" }}>
          <img src="/spec/hair.png" alt="" />
          <div className="max-w-xs p-2 flex flex-col gap-1 items-center">
            <h2 className="font-semibold text-lg font-primary">
              Hair Transplants
            </h2>
            <p className="text-xs">
              Achieve natural, lasting results with our advanced hair
              restoration techniques.Achieve natural, lasting results with our{" "}
            </p>
            <button className="p-2 border rounded-lg text-sm items-center ">
              More Details
            </button>
          </div>
        </div>
        <div className="flex p-2 rounded-lg" style={{ background: "#85E3FF" }}>
          <img src="/spec/face.png" alt="" />
          <div className="max-w-xs p-2 flex flex-col gap-1 items-center">
            <h2 className="font-semibold text-lg font-primary">Facelifts</h2>
            <p className="text-xs">
              Restore your youthful appearance with safe, modern procedures.with
              safe, modern procedures.{" "}
            </p>
            <button className="p-2 border rounded-lg text-sm items-center ">
              More Details
            </button>
          </div>
        </div>
      </div>

      {/* first section above  */}
      <div className="flex justify-around mt-5">
        <div className="flex p-2 rounded-lg" style={{ background: "#FFABAB" }}>
          <img src="/spec/dental.png" alt="" />
          <div className="max-w-xs p-2 flex flex-col gap-1 items-center">
            <h2 className="font-semibold text-lg font-primary">Dental Care</h2>
            <p className="text-xs">
              Smile confidently with top-tier dental treatments and cosmetic
              solutions.treatments and cosmetic solutions.{" "}
            </p>
            <button className="p-2 border rounded-lg text-sm items-center ">
              More Details
            </button>
          </div>
        </div>
        <div className="flex p-2 rounded-lg" style={{ background: "#85E3FF" }}>
          <img src="/spec/weight.png" alt="" />
          <div className="max-w-xs p-2 flex flex-col gap-1 items-center">
            <h2 className="font-semibold text-lg font-primary">
              Weight Loss Surgery
            </h2>
            <p className="text-xs">
              Transform your health and appearance with our weight loss
              solutions.{" "}
            </p>
            <button className="p-2 border rounded-lg text-sm items-center ">
              More Details
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button className="bg-blue-900 max-w-xs rounded-lg text-white p-3 ">
          {" "}
          View All Services{" "}
        </button>
      </div>
    </div>
  );
}
