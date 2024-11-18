import React from "react";

interface SkillTabsProps {
  tabs: {
    title: string;
    icon: React.ReactNode;
  }[];
  activeTab: number;
}

function SkillTabs({ tabs, activeTab }: SkillTabsProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="grid grid-cols-3 gap-2 -mb -px md:flex md:flex-wrap text-xs font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab, index) => (
          index === activeTab
            ? (
              <li key={index} className="me-2 flex-1">
                <a
                  href="#"
                  className="min-w-24 gap-2 inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  aria-current="page"
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </a>
              </li>
            )
            : (
              <li key={index} className="me-2 flex-1">
                <a
                  href="#"
                  className="gap-2 min-w-24 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </a>
              </li>
            )
        ))}
      </ul>
    </div>
  );
}

export default SkillTabs;
