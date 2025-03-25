import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex bg-grey-200 items-center justify-between p-5">
      <div>
        <img src="/header/logo.png" alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li className="">About Us</li>
          <div>
            <button
              className="flex items-center gap-2 relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <li>services</li>
              <FaArrowDownLong className="text-xm" />
            </button>

            {isOpen && (
              <div className="p-3 absolute mt-2 w-48 text-black shadow-lg rounded">
                <ul>
                  <li>main service </li>
                  <li>secondary service service </li>
                </ul>
              </div>
            )}
          </div>
          <li>Partner Hospitals</li>
          <li>Patient Journey</li>
          <li>Before & After</li>
          <li>Corporate</li>
          <li>Contact Us</li>
          <li>
            <FaWhatsapp />
          </li>
        </ul>
      </div>
    </header>
  );
}
