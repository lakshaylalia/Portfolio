import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import CountUp from '../ui/CountUp';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Tools'];

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Framer Motion'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.io', 'Spring Boot', 'Django', 'FastAPI'],
    },
    {
      title: 'Tools',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'Linux', 'Vercel', 'Render', 'Vite'],
    },
  ];

  const stats = [
    { value: 750, suffix: '+', label: 'DSA Problems Solved', sublabel: 'LeetCode, GFG, Codeforces' },
    { value: 6, suffix: '', label: 'Full Stack Projects', sublabel: 'MERN Stack Applications' },
    { value: 2, suffix: '+', label: 'Years Experience', sublabel: 'Web Development' },
  ];

  const filteredCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Skills"
          title="Tech Stack"
          subtitle="The technologies and tools I use to bring ideas to life."
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'text-content-secondary hover:text-content-primary border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {filteredCategories.map((category, categoryIndex) => (
              <GlassCard key={category.title} delay={categoryIndex * 0.08}>
                <h3 className="text-sm font-semibold text-content-primary mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-content-secondary border border-[var(--border)] hover:border-accent/30 hover:text-accent hover:bg-accent-muted transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <GlassCard hover={false} className="!p-8 md:!p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1.5}
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm font-medium text-content-primary mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-content-muted">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Skills;