import React from "react";

function Bar() {
  return (
    <>
      <nav className="hidden text-transparent md:flex right-0 justify-between items-center p-4 fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
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
    </>
  );
}

export default Bar;
