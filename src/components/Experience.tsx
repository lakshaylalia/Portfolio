import React from "react";
import { MapPin, Calendar, Zap, GraduationCap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      organization: "Helioexpect Energy Pvt. Ltd",
      location: "Remote",
      period: "May 2026 – Present",
      type: "Internship",
      description:
        "Collaborated with UI/UX team to deliver seamless frontend integrations, translating 15+ Figma designs into React.js components. Developed and deployed 10+ backend API endpoints in Python.",
      highlights: [
        "Reduced design-to-code turnaround by 30%",
        "Cut server response latency by 25%",
        "Improved data retrieval efficiency by 30%",
      ],
      icon: Zap,
    },
    {
      title: "Web Team Lead",
      organization: "CSEC — NIT Hamirpur",
      location: "NIT Hamirpur",
      period: "May 2025 – Present",
      type: "Leadership",
      description:
        "Led the development of the CSEC portal website. Coordinated with designers and backend developers, maintained performance and accessibility standards across all web properties.",
      highlights: [
        "Delivered responsive club portal",
        "Improved web visibility & engagement",
      ],
      icon: Globe,
    },
    {
      title: "Student Coordinator",
      organization: "CSEC — NIT Hamirpur",
      location: "NIT Hamirpur",
      period: "Sep 2025 – Present",
      type: "Leadership",
      description:
        "Coordinating student activities and bridging communication between the student body and club leadership. Facilitating team–faculty coordination for smooth event execution.",
      highlights: [
        "Improved communication pipeline",
        "Contributed to successful events",
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--border)] hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="flex gap-5 sm:gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center flex-shrink-0 z-10">
                      <Icon className="w-4 h-4 text-content-secondary" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors duration-200 overflow-hidden">
                    <div className="p-5 md:p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-y-2 gap-x-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-sm font-semibold text-content-primary leading-tight">
                              {exp.title}
                            </h3>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase text-content-muted border border-[var(--border)] bg-[var(--bg-card)]">
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-xs font-medium text-content-secondary">
                            {exp.organization}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 text-[11px] text-content-muted flex-shrink-0">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-[var(--border)] mb-4" />

                      {/* Body */}
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <p className="flex-1 text-xs sm:text-sm text-content-secondary leading-relaxed">
                          {exp.description}
                        </p>

                        <ul className="flex flex-col gap-2 md:min-w-[190px] md:max-w-[210px]">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-[6px] w-1 h-1 rounded-full bg-content-muted flex-shrink-0" />
                              <span className="text-[11px] text-content-secondary leading-snug">
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
