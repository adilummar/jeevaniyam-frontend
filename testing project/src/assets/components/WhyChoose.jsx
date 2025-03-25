import React from "react";

export default function WhyChoose() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-center w-full my-10">
        <div className="relative flex items-center">
          {/* Left and Right Fading Lines */}
          <span className="absolute left-0 top-1/2 w-[50vw] h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
          <span className="absolute right-0 top-1/2 w-[50vw] h-[2px] bg-gradient-to-l from-transparent via-blue-400 to-transparent"></span>

          {/* Centered Text */}
          
        </div>
        {/* {our Specialties} */}
      </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Left Side: Title & Description */}
    <div>
      <h2 className="text-2xl font-bold text-blue-900">How It Works</h2>
      <p className="mt-4 text-gray-700">
        Our process is designed to ensure you receive top-quality support, global access, and expert partnerships.
      </p>
      <img src="/why/why.png" alt="" />
    </div>

    {/* Right Side: Overlapping Cards */}
    <div className="relative h-[350px]">
      {/* Card 1 */}
      <div className="group absolute top-0 left-0 w-full bg-green-200 p-6 rounded-lg shadow-md transition-all duration-300 hover:top-[-10px] hover:z-20">
        <h3 className="text-lg font-semibold text-green-800">Expert Hospital Partnerships</h3>
        <p className="text-gray-700 mt-1">We collaborate with internationally...</p>
        <div className="hidden group-hover:block mt-2">
          <p>...recognized hospitals, ensuring quality healthcare.</p>
          <img src={'/why/why2.png'} alt="Support" className="w-full mt-4 rounded-lg" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="group absolute top-12 left-0 w-full bg-red-200 p-6 rounded-lg shadow-md transition-all duration-300 hover:top-2 hover:z-30">
        <h3 className="text-lg font-semibold text-red-800">Global Reach</h3>
        <p className="text-gray-700 mt-1">Our network spans across...</p>
        <div className="hidden group-hover:block mt-2">
          <p>...multiple countries, making services accessible worldwide.</p>
          <img src={'/why/why2.png'} alt="Support" className="w-full mt-4 rounded-lg" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="group absolute top-24 left-0 w-full bg-yellow-200 p-6 rounded-lg shadow-md transition-all duration-300 hover:top-6 hover:z-40">
        <h3 className="text-lg font-semibold text-yellow-800">Personalized Support</h3>
        <p className="text-gray-700 mt-1">Our team is with you...</p>
        <div className="">
          <p>...every step of the way, from consultation to recovery.</p>
          <img src={'/why/why2.png'} alt="Support" className="w-80 mt-4 rounded-lg" />
        </div>
      </div>
    </div>

  </div>
</section>

  );
}
