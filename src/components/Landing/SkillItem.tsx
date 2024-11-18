import React from "react";

interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
}

function SkillItem({ icon, title }: SkillItemProps) {
  return (
    <div className="flex flex-col items-center w-24 justify-center p-2 transition-all transform hover:scale-95 hover:shadow-md rounded-lg text-center gap-y-2 cursor-pointer ">
      <div className="text-xl text-white">{icon}</div>
      <p className="text-xs font-semibold text-gray-800 dark:text-white">
        {title}
      </p>
    </div>
  );
}

export default SkillItem;
