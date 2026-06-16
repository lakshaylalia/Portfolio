import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";
import CountUp from "../ui/CountUp";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Languages", "Frontend", "Backend", "Tools"];

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Socket.io",
        "Spring Boot",
        "Django",
        "FastAPI",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git & GitHub",
        "Postman",
        "VS Code",
        "Linux",
        "Vercel",
        "Render",
        "Vite",
      ],
    },
  ];

  const stats = [
    {
      value: 750,
      suffix: "+",
      label: "DSA Problems Solved",
      sublabel: "LeetCode · GFG · Codeforces",
    },
    {
      value: 7,
      suffix: "",
      label: "Full Stack Projects",
      sublabel: "MERN Stack Applications",
    },
    {
      value: 2,
      suffix: "+",
      label: "Years Experience",
      sublabel: "Web Development",
    },
  ];

  const filteredCategories =
    activeCategory === "All"
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]"
                  : "text-content-secondary border border-[var(--border)] hover:border-[var(--border-hover)] hover:text-content-primary"
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`grid gap-3 mb-12 ${
              filteredCategories.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {filteredCategories.map((category, i) => (
              <GlassCard key={category.title} delay={i * 0.06}>
                <h3 className="text-[10px] font-medium text-content-muted mb-4 uppercase tracking-widest">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-normal text-content-secondary bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:text-content-primary transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border border-[var(--border)] rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="flex flex-col items-center justify-center py-8 px-6 text-center bg-[var(--bg-card)]"
            >
              <div className="text-3xl font-medium text-content-primary mb-1.5">
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
      </div>
    </section>
  );
};

export default Skills;
