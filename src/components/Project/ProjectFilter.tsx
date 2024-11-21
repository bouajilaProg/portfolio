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
      title: "DevOps",
      icon: <FaCogs />,
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
    <div className="mt-4 flex flex-wrap justify-center gap-2">
      <div className=" grid grid-cols-4 gap-2">
        {/* Filter by domain */}
        {domains.map((domain, index) => (
          <label key={index} className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectedDomains.includes(domain.title)}
              onChange={() =>
                handleCheckboxChange(domain.title)}
              className="form-checkbox text-gray-700"
              hidden
            />
            <span
              className={`${selectedDomains.includes(domain.title) == false
                  ? "border-gray-500 border text-white"
                  : "bg-blue-400 text-blue-900 border-blue-400 border"
                } text-xs font-medium px-2.5 py-0.5 w-16 md:w-24 text-center rounded-full cursor-pointer`}
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
