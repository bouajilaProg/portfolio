"use client"

import { useState } from 'react'
import SkillTabs from './SkillTabs'
import { FaDev, FaDatabase, FaCogs, FaMobileAlt, FaPaintBrush, FaTools, FaHandshake } from 'react-icons/fa';
import { FaLaptopCode, FaBrain } from 'react-icons/fa';
function Skills() {




  const tabs = [
    {
      title: 'all',
      icon: <FaTools />
    },
    {
      title: 'Front',
      icon: <FaLaptopCode />
    },
    {
      title: 'Back',
      icon: <FaDatabase />
    },
    {
      title: 'DevOps',
      icon: <FaCogs />
    },
    {
      title: 'AI',
      icon: <FaBrain />
    },
    {
      title: 'Soft',
      icon: <FaHandshake />
    }

  ];


  type Tab = {
    title: string;
    icon: React.ReactNode;
  };
  const [activeTab, setActiveTab] = useState(1)


  return (
    <div className="w-full">
      <h2 className="text-white text-4xl text-center">Skills</h2>
      <br />
      <div className="flex justify-center">

        <SkillTabs tabs={tabs} activeTab={1} />


      </div>
    </div>
  )
}

export default Skills
