"use client";

import { useState } from "react";
import SkillTabs from "./SkillTabs";
import {
  FaCogs,
  FaDatabase,
  FaDev,
  FaHandshake,
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
} from "react-icons/fa";
import { FaBrain, FaLaptopCode } from "react-icons/fa";
import SkillGroup from "./SkillGroup";
function Skills() {
  const tabs = [
    {
      title: "all",
      icon: <FaTools />,
    },
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
    {
      title: "Soft",
      icon: <FaHandshake />,
    },
  ];

  type Tab = {
    title: string;
    icon: React.ReactNode;
  };
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full min-h-screen">
      <h2 className="text-white text-4xl text-center">Skills</h2>
      <br />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-y-8 lg:m-0 lg:w-1/2">
          <SkillTabs tabs={tabs} activeTab={activeTab} />
          <SkillGroup />
        </div>
      </div>
    </div>
  );
}

export default Skills;
