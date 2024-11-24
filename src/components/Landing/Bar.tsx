import React from "react";

interface Props {
  setContactPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

function Bar({ setContactPopup }: Props) {
  return (
    <>
      <nav className="hidden text-transparent z-40 md:flex right-0 justify-between items-center p-4 fixed top-0 w-full bg-white dark:bg-gray-900">
        <div className="text-xl font-bold text-gray-800 dark:text-white transform transition-all duration-300 hover:scale-105 hover:text-primary-500">
          <a href="#intro">
            bouajilaProg
          </a>
        </div>

        <div className="flex space-x-6">
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
            href="#education"
            className="text-gray-800 dark:text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:text-primary-500"
          >
            Education
          </a>

          <button
            onClick={() => setContactPopup(true)}
            className="text-gray-800 dark:text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:text-primary-500"
          >
            Contact
          </button>
          {/* minified switch */}
        </div>
      </nav>
    </>
  );
}

export default Bar;
