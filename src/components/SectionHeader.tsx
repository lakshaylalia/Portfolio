import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${alignClass} mb-16 md:mb-20`}
    >
      {label && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
          {label}
        </span>
      )}
      <div className="accent-line mb-6" />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-content-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-content-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
