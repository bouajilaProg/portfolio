import React from "react";
import skills from "@/data/SkillsData";
import SkillItem from "./SkillItem";

interface SkillGroupProps {
  titleFilter: string;
}

function SkillGroup({ titleFilter }: SkillGroupProps) {
  if (titleFilter == "all") {
    return (
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 gap-y-3 w-full max-w-screen-lg mx-auto">
          {skills
            .map((skill) => skill.items)
            .flat()
            .filter((subSkill, index, self) =>
              self.findIndex((s) => s.title === subSkill.title) === index
            )
            .map((subSkill, subIndex) => (
              <SkillItem
                key={subIndex}
                icon={subSkill.icon}
                title={subSkill.title}
              />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 gap-y-3 w-full max-w-screen-lg mx-auto">
        {skills.filter((
          skill,
        ) => (skill.domain == titleFilter))
          .map((skill, index) => (
            skill.items.map((subSkill, subIndex) => (
              <SkillItem
                key={subIndex}
                icon={subSkill.icon}
                title={subSkill.title}
              />
            ))
          ))}
      </div>
    </div>
  );
}

export default SkillGroup;
