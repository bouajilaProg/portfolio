import React from 'react';

interface SeparatorProps {
  variant?: 'component' | 'section';
  /** Vertical margin scale (Tailwind spacing units e.g., 4, 8, 12, 16) */
  space?: number;
  className?: string;
}

const Separator = ({
  variant = 'component',
  space,
  className = ""
}: SeparatorProps) => {

  // Default spacing based on variant if no specific space is provided
  const defaultSpace = variant === 'section' ? 'my-16' : 'my-8';

  // If 'space' prop is provided, we use tailwind's 'my-{n}'
  const spaceClass = space !== undefined ? `my-${space}` : defaultSpace;

  const variants = {
    component: "w-[60%] h-px mx-auto",
    section: "w-full h-[2px]",
  };

  return (
    <div
      role="separator"
      className={`
        bg-current opacity-20 rounded-full 
        ${variants[variant]} 
        ${spaceClass} 
        ${className}
      `}
    />
  );
};

export default Separator;
