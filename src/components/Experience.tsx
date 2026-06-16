import React from 'react';
import { MapPin, Calendar, Zap, GraduationCap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      organization: 'Helioexpect Energy Pvt. Ltd',
      location: 'Remote',
      period: 'May 2026 – Present',
      description:
        'Collaborated with UI/UX team to deliver seamless frontend integrations, translating 15+ Figma designs into React.js components. Developed and deployed 10+ backend API endpoints in Python.',
      highlights: [
        'Reduced design-to-code turnaround by 30%',
        'Cut server response latency by 25%',
        'Improved data retrieval efficiency by 30%',
      ],
      icon: Zap,
    },
    {
      title: 'Web Team Lead',
      organization: 'Computer Science and Engineering Club (CSEC)',
      location: 'NIT Hamirpur',
      period: '2025',
      description:
        'Led the development of the CSEC portfolio website. Coordinated with designers and backend developers, maintained performance and accessibility standards.',
      highlights: [
        'Delivered responsive club portfolio website',
        'Improved web visibility and engagement',
      ],
      icon: Globe,
    },
    {
      title: 'Student Coordinator',
      organization: 'Computer Science and Engineering Club (CSEC)',
      location: 'NIT Hamirpur',
      period: '2025 – Present',
      description:
        'Coordinating student activities and bridging communication between student body and club leadership. Facilitating coordination between teams and faculty.',
      highlights: [
        'Improved communication pipeline',
        'Contributed to successful events',
      ],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Experience & Leadership"
          subtitle="My journey in professional roles and leadership, building technical skills alongside community impact."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[19px] top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex gap-6 group"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] group-hover:border-accent/40 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/10">
                      <Icon className="w-4 h-4 text-content-muted group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 glass rounded-2xl p-5 md:p-6 gradient-border glow-hover transition-all duration-500 hover:bg-[var(--bg-card-hover)] mb-2">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-content-primary">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-content-secondary font-medium">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-content-muted">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-content-secondary leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium text-content-muted border border-[var(--border)] hover:border-accent/30 hover:text-accent transition-all duration-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;