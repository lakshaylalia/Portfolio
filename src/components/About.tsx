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
    description: 'Crafting responsive, high-performance user interfaces using React, Next.js, and modern design systems with a focus on UX and accessibility.',
  },
  {
    icon: Zap,
    title: 'App Developer',
    description: 'Building seamless, cross-platform mobile experiences with robust state management, fluid animations, and native-level performance.',
  },
  {
    icon: Cpu,
    title: 'Backend & Systems Engineer',
    description: 'Designing scalable microservices and robust REST APIs. Experienced in distributed systems, database optimization (SQL/NoSQL), and caching strategies.',
  },
  {
    icon: Trophy,
    title: 'Problem Solver',
    description: 'Deep analytical thinker with 750+ DSA problems solved across major competitive programming platforms, optimizing for time and space complexity.',
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-lg font-semibold text-content-primary tracking-tight">
              My Journey
            </h3>

            <p className="text-content-secondary leading-relaxed text-sm sm:text-base">
              Final year CS student at <span className="text-content-primary font-medium">NIT Hamirpur</span>,
              focused on full-stack development and backend systems. Started with C++ and
              algorithms — that foundation in problem-solving shapes how I approach every project.
            </p>

            <p className="text-content-secondary leading-relaxed text-sm sm:text-base">
              I care about clean code, shipping things that work, and continuously picking up
              whatever the next problem demands.
            </p>

            {/* Subtle divider with quick facts */}
            <div className="pt-2 space-y-3 border-t border-[var(--border)]">
              {[
                { label: 'Degree', value: 'B.Tech — Computer Science' },
                { label: 'Institute', value: 'NIT Hamirpur' },
                { label: 'Focus', value: 'Full Stack · DSA · Systems' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-content-muted">{label}</span>
                  <span className="text-content-secondary font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={index} delay={index * 0.08}>
                  <div className="flex flex-col gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-content-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-content-secondary leading-relaxed">
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