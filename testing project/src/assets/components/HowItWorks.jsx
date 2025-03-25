import React from 'react'

export default function HowItWorks() {

    // Floating Step Card Component
const StepCard = ({ number, text }) => {
    return (
      <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center space-x-2">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{number}</span>
        <p className="text-gray-800 font-semibold">{text}</p>
      </div>
    );
  };
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Section Title */}
      <div className="flex items-center justify-center w-full my-10">
        <div className="relative flex items-center">
          {/* Left and Right Fading Lines */}
          <span className="absolute left-0 top-1/2 w-[50vw] h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
          <span className="absolute right-0 top-1/2 w-[50vw] h-[2px] bg-gradient-to-l from-transparent via-blue-400 to-transparent"></span>

          {/* Centered Text */}
          <span className="relative px-6 py-2 border border-blue-500 rounded-full bg-white text-blue-800 font-semibold text-lg">
            How it works
          </span>
        </div>
        {/* {our Specialties} */}
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-500 to-pink-300 rounded-lg p-8 shadow-lg">
        
        {/* Left Side: Text & Button */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-5xl font-bold">How We <br/>Operate</h2>
          <p className="mt-3 text-sm max-w-md">
            Connecting You to Leading Hospitals for Hair Transplants, Facelifts, 
            and More in Turkey, Canada, and Beyond.
          </p>
          <button className="mt-5 px-6 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            See Full Journey
          </button>
        </div>

        {/* Right Side: Image with Floating Steps */}
        <div className="md:w-1/2 flex justify-center items-end relative mt-8 md:mt-0">
          <img
            src="/How/how.png"
            alt="Doctor"
            className="w-80 rounded-lg mx-auto"
          />

          {/* Floating Steps */}
          <div className="absolute top-8 left-0 transform -translate-x-10">
            <StepCard number="01" text="Get in Touch" />
          </div>
          <div className="absolute top-20 right-0 transform translate-x-10">
            <StepCard number="02" text="Book Your Procedure" />
          </div>
          <div className="absolute bottom-16 left-0 transform -translate-x-10">
            <StepCard number="03" text="Choose a Treatment" />
          </div>
          <div className="absolute bottom-4 right-0 transform translate-x-10">
            <StepCard number="04" text="Travel & Treatment" />
          </div>
        </div>
        
      </div>
    </section>
  );
};



 