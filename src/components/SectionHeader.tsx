
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  align = 'left' 
}: SectionHeaderProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textAlign = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  return (
    <motion.div
      ref={ref}
      className={`mb-12 max-w-3xl ${textAlign}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-gradient relative inline-block pb-2 mb-3"
        variants={childVariants}
      >
        {title}
        <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-accent-cyan opacity-80"></span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-gray-400 text-lg mt-2"
          variants={childVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
