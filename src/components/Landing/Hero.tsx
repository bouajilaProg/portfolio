"use client";

import React from "react";
import Popup from "./Popup";

function Hero() {
  const [ContactPopup, setContactPopup] = React.useState(false);

  return (
    <>
      {/* Contact Popup */}
      {ContactPopup &&
        <Popup setContactPopup={setContactPopup} />}
      {/* Hero Section */}
      <div
        id="intro"
        className="bg-gray-900 min-h-screen flex items-center justify-center"
      >
        <div className="text-center ">
          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold text-gray-50">
            Mohamed Yessine Bouajila
          </h1>
          <br />
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400">
            <span className="text-blue-700">Inventor</span>{" "}
            at the core, specialist at making your ideas come alive.
          </p>
          {/* Description */}
          <span className="p-0 text-[12px] md:text-lg mx-8 text-gray-400 text-center m-0">
            Software Engineer, Full-Stack Developer, and AI Enthusiast.
          </span>
          <br />
          {/* Call-to-Action Button */}
          <button
            onClick={() => setContactPopup(true)}
            className="mt-6 px-6 py-3  bg-blue-700 text-gray-50 font-medium text-lg rounded-md hover:bg-blue-600 transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
