"use client";
import React, { useState } from "react";
import {
  FaBrain,
  FaCogs,
  FaDatabase,
  FaHandshake,
  FaLaptopCode,
} from "react-icons/fa";

interface ProjectFilterProps {
  exportSelectedDomains: (domains: string[]) => void;
}

function ProjectFilter({ exportSelectedDomains }: ProjectFilterProps) {
  const domains = [
    {
      title: "Front",
      icon: <FaLaptopCode />,
    },
    {
      title: "Back",
      icon: <FaDatabase />,
    },
    {
      title: "AI",
      icon: <FaBrain />,
    },
  ];
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const handleCheckboxChange = (domain: string) => {
    const updatedSelectedDomains = selectedDomains.includes(domain)
      ? selectedDomains.filter((d) => d !== domain)
      : [...selectedDomains, domain];

    setSelectedDomains(updatedSelectedDomains);
    exportSelectedDomains(updatedSelectedDomains);
  };

  return (
    <div className="mt-4 flex ml-2 w-full flex-wrap justify-center gap-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Filter by domain */}
        {domains.map((domain, index) => (
          <label
            key={index}
            className="flex items-center justify-center gap-2"
          >
            <input
              type="checkbox"
              checked={selectedDomains.includes(domain.title)}
              onChange={() => handleCheckboxChange(domain.title)}
              className="hidden"
            />
            <span
              className={`${selectedDomains.includes(domain.title)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-800 text-gray-300 border-gray-700"
                } text-xs font-medium px-4 py-2 w-20 md:w-28 text-center rounded-full transition-colors duration-300 cursor-pointer hover:bg-blue-500 hover:border-blue-500`}
            >
              {domain.title}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ProjectFilter;
