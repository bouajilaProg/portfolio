"use client";

import { useState } from "react";
import SkillTabs from "./SkillTabs";
import SkillGroup from "./SkillGroup";
import skills from "@/data/SkillsData"; // Assuming the file path is correct
import { FaTools } from "react-icons/fa";

function Skills() {
  // Create tabs from the skills data

  let tabs = skills.map((skill) => ({
    title: skill.domain,
    icon: skill.icon,
  }));

  tabs = [{
    title: "all",
    icon: <FaTools />,
  }, ...tabs];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="skills" className="pt-40">
      <div className="w-full min-h-screen">
        <h2 className="text-white text-4xl text-center">Skills</h2>
        <br />
        <div className="flex justify-center">
          <div
            id="skills"
            className="flex flex-col align-middle w-full justify-center gap-y-8 lg:m-0 lg:w-1/2"
          >
            <SkillTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div>
              {/* Filter the active skill group by domain */}
              <SkillGroup
                titleFilter={activeTab == 0
                  ? "all"
                  : skills[activeTab - 1].domain}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
