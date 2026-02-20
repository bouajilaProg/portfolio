import { motion } from 'motion/react';

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
    <motion.div
      role="separator"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 0.5, scaleX: 1 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        rounded-full bg-slate-200 dark:bg-slate-700 origin-left
        ${variants[variant]} 
        ${spaceClass} 
        ${className}
      `}
    />
  );
};

export default Separator;
