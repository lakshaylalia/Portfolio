import React from 'react';
import { Code, Trophy, Zap, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Engineer',
      description:
        'Creating responsive, performant interfaces with React and modern CSS frameworks.',
    },
    {
      icon: Zap,
      title: 'App Developer',
      description:
        'Building cross-platform applications with seamless performance and modern UI.',
    },
    {
      icon: Cpu,
      title: 'Backend Developer',
      description:
        'Designing APIs and scalable systems using Node.js, Express, and MongoDB.',
    },
    {
      icon: Trophy,
      title: 'Problem Solver',
      description:
        'Solved 750+ DSA problems across competitive programming platforms.',
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About"
          title="What I Do"
          subtitle="Passionate about building scalable applications, solving complex problems, and creating real-world impact through technology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Narrative — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <h3 className="text-xl font-semibold text-content-primary">
              My Journey
            </h3>
            <p className="text-content-secondary leading-relaxed text-sm sm:text-base">
              As a final year Computer Science student at NIT Hamirpur,
              I've immersed myself in full-stack development with a focus on backend
              technologies. My journey began with C++ and data structures, building a
              strong foundation in algorithmic thinking.
            </p>
            <p className="text-content-secondary leading-relaxed text-sm sm:text-base">
              I believe in continuous learning, contributing to open-source projects,
              and sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Highlight Cards — 3 cols */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-muted flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-content-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;