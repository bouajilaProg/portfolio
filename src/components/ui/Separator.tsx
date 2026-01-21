import React from 'react';

interface SeparatorProps {
  variant?: 'component' | 'section';
  space?: number;
  className?: string;
}

const Separator = ({
  variant = 'component',
  space,
  className = ""
}: SeparatorProps) => {

  const defaultSpace = variant === 'section' ? 'my-16' : 'my-8';
  const spaceClass = space !== undefined ? `my-${space}` : defaultSpace;

  const variants = {
    component: "w-[60%] h-px mx-auto",
    section: "w-full h-[2px]",
  };

  return (
    <div
      role="separator"
      className={`
         opacity-50 rounded-full bg-slate-200 dark:bg-slate-700 
        ${variants[variant]} 
        ${spaceClass} 
        ${className}
      `}
    />
  );
};

export default Separator;
