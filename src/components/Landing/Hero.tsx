import React from "react";

function Hero() {
  return (
    <div
      id="intro"
      className="bg-gray-900 min-h-screen flex items-center justify-center"
    >
      <div className="text-center space-y-6">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-50">
          Mohamed Yessine Bouajila
        </h1>
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400">
          <span className="text-blue-700">Inventor</span>{" "}
          at the core, specialist at making your ideas come alive.
        </p>
        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="mt-6 px-6 py-3 inline-block bg-blue-700 text-gray-50 font-medium text-lg rounded-md hover:bg-blue-600 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default Hero;
