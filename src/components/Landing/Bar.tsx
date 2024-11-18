import React from "react";

function Bar() {
  return (
    <div>
      <nav className="hidden md:flex justify-between items-center p-4">
        {/* Left side: "bouajilaProg" */}
        <div className="text-xl font-bold text-gray-800 dark:text-white transform transition-all duration-300 hover:scale-105">
          bouajilaProg
        </div>

        {/* Right side: Links */}
        <div className="flex space-x-6">
          <a
            href="#intro"
            className="text-gray-800 dark:text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:text-primary-500"
          >
            Intro
          </a>
          <a
            href="#skills"
            className="text-gray-800 dark:text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:text-primary-500"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-800 dark:text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:text-primary-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:text-primary-500"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Bar;
