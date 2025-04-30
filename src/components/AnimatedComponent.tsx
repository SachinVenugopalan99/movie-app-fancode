import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedComponentProps {
  children: React.ReactNode;
  type?: 'fade' | 'slide' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  type = 'fade',
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent; 