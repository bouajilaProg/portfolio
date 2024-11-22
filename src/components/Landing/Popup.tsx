import React, { useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface PopupProps {
  setContactPopup: (value: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({ setContactPopup }) => {
  const email = "bouajilamedyessine@gmail.com";

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("fixed")) {
      setContactPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 bg-opacity-50">
      <div className="bg-gray-900 border border-gray-700 p-6 rounded shadow-lg mx-8">
        <h2 className="text-2xl text-white">Contact</h2>
        <div className="mt-4 text-md border border-gray-700 flex justify-between rounded items-center text-white">
          <span className="py-2 pl-2 ">{email}</span>
          <button
            onClick={handleCopyToClipboard}
            className="ml-2 p-4 h-full bg-gray-700 hover:bg-gray-600 active:bg-gray-800"
          >
            <FaCopy />
          </button>
        </div>
        <div className="flex items-center justify-between mt-6 space-x-4">
          <div className="flex items-center space-x-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/mohamed-yessine-bouajila/"
              target="_blank"
              className="hover:text-blue-500 transition text-white"
            >
              <FaLinkedin size={24} />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/bouajilaProg"
              target="_blank"
              className="hover:text-gray-400 transition text-white"
            >
              <FaGithub size={24} />
            </a>

            {
              /* Twitter Icon
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              className="hover:text-blue-400 transition text-white"
            >
              <FaTwitter size={24} />
            </a>
            */
            }
          </div>
          <button
            onClick={() => {
              setContactPopup(false);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
