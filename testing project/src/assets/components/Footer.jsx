import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Side - Logo, Description, Links, Social Media */}
        <div className="md:w-1/2 flex flex-col gap-6 items-start">
          <img
            src="/header/logo.png"
            alt="Jeevaniyam Logo"
            className="h-12 object-contain"
          />
          <p className="text-gray-700">
            I was nervous about traveling for my facelift, but they made the
            entire process stress-free. The results are amazing!
          </p>
          
          <div className="flex gap-10">
            {/* Links Section */}
            <div className="flex flex-col space-y-2 text-blue-900 whitespace-nowrap">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex flex-col space-y-2 text-blue-900 whitespace-nowrap">
              <a href="#">Partner Hospitals</a>
              <a href="#">Patients Journey</a>
              <a href="#">Before & After</a>
              <a href="#">Corporate</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4 text-blue-900">
            <FaWhatsapp className="text-2xl cursor-pointer" />
            <FaFacebook className="text-2xl cursor-pointer" />
            <FaInstagram className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Right Side - Map & Copyright */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end">
          {/* Map Image */}
          <img src="/footer/map.png" alt="World Map" className="object-cover" />
          
          {/* Copyright */}
          <div className="text-gray-600 text-sm mt-8 text-center md:text-right">
            Copyright © 2024 <span className="text-blue-900">Company Name</span>.
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
