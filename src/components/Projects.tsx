import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  github: string;
  demo: string;
  previewImage?: string;
  status: string;
  year: string;
  category: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const projects: Project[] = [
    {
      title: 'CSEC Website',
      description:
        'Official portal for CSEC (Computer Science Engineers\' Community) at NIT Hamirpur — showcases events, community highlights, and resources. Hosted live Competitive Programming tournaments with real-time standings and results. Built with Next.js and TypeScript for a responsive, accessible UI, optimized for performance with Tailwind CSS.',
      technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Redux', 'GSAP', 'Node.js'],
      gradient: 'from-violet-500 to-indigo-500',
      github: 'https://github.com/lakshaylalia/Csec_Website.git',
      demo: 'https://csec.nith.ac.in/',
      previewImage: '',
      status: 'Live',
      year: '2024',
      category: 'Full Stack',
    },
    {
      title: "Chirp",
      description:
        "Full-stack real-time chat platform with Google OAuth 2.0 and JWT auth. Supports solo and group chats (up to 100 members) with admin controls. Powered by Socket.io with 10+ custom events for messaging, typing indicators, and presence. Built 30+ REST API endpoints using a service-controller-route pattern, with React Query v5 for caching, optimistic updates, and Cloudinary for image uploads.",
      technologies: [
        "React",
        "React Query v5",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
      ],
      gradient: "from-sky-500 to-blue-600",
      github: "https://github.com/lakshaylalia/Chirp.git",
      demo: "https://chirp-frontend-steel.vercel.app/",
      status: "Live",
      year: "2026",
      category: "Full Stack",
    },
    {
      title: "AstraDB",
      description:
        "Query language compiler for an in-memory database engine. Built a lexer and parser for AstraQL (a custom SQL-like language) supporting 10+ SQL operations, cutting parse errors by 90% and achieving query execution under 15ms.",
      technologies: ["C++", "File I/O", "B+ Tree", "OOP"],
      gradient: "from-orange-500 to-red-500",
      github: "https://github.com/lakshaylalia/AstraDB",
      demo: "",
      previewImage: "/AstraDBPreview.jpg", // e.g. '/images/astradb-preview.png'
      status: "Completed",
      year: "2025",
      category: "Systems",
    },
    {
    title: "Wild Oasis",
    description:
      "Hotel management dashboard for internal staff to manage cabins, bookings, and guests. Built with React and Supabase for real-time data, featuring cabin availability tracking, booking lifecycle management (check-in/check-out), and a dark mode dashboard with sales and occupancy analytics.",
    technologies: ["React", "Supabase", "React Query", "Styled Components"],
    gradient: "from-emerald-500 to-teal-500",
    github: "https://github.com/lakshaylalia/Wild-Oasis",
    demo: "https://wild-oasis-alpha-red.vercel.app/",
    previewImage: "/WildOasisPreview.jpg",
    status: "Completed",
    year: "2025",
    category: "Full Stack",
  },
    {
      title: "Vibble",
      description:
        "Hybrid platform combining YouTube and Twitter — share video content with social media interactions and real-time engagement features.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
        "JWT",
      ],
      gradient: "from-cyan-500 to-teal-500",
      github: "https://github.com/lakshaylalia/Vibble.git",
      demo: "",
      previewImage: "", // e.g. '/images/vibble-preview.png'
      status: "Completed",
      year: "2025",
      category: "Backend",
    },
    {
      title: "Design o' Crats",
      description:
        "Official website for the Architecture Department club at NIT Hamirpur, showcasing creative works, events, and team members.",
      technologies: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/lakshaylalia/designOcrafts.git",
      demo: "https://design-ocrafts.vercel.app/",
      status: "Live",
      year: "2025",
      category: "Frontend",
    },
    {
      title: 'HACK 5.0',
      description:
        'Official website for HACK 5.0, NIT Hamirpur\'s national onsite hackathon organized by CSEC — served 600+ participants with real-time updates, team registration, schedule tracking, and problem statement reveal. Designed for high-traffic reliability with smooth animations and a fully responsive layout.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'ShadCN UI'],
      gradient: 'from-fuchsia-500 to-purple-600',
      github: 'https://github.com/Eyepatch5263/Hack-5.0',
      demo: 'https://hack.nith.ac.in/',
      previewImage: '',
      status: 'Live',
      year: '2025',
      category: 'Full Stack',
    },
    {
      title: "Inkspire",
      description:
        "Modern blog platform with rich text editing, comprehensive user management, and advanced content discovery features.",
      technologies: ["Express.js", "EJS", "MongoDB", "Tailwind CSS", "Node.js"],
      gradient: "from-emerald-500 to-teal-500",
      github: "https://github.com/lakshaylalia/Inkspire.git",
      demo: "https://inkspire-18re.onrender.com/",
      status: "Live",
      year: "2025",
      category: "Full Stack",
    },
  ];

  const filterCategories = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "Systems",
  ];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Work"
          title="Featured Projects"
          subtitle="A showcase of recent work built with modern technologies, focusing on user experience, performance, and scalability."
        />

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "text-content-secondary hover:text-content-primary border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          >
            {filteredProjects.map((project, index) => {
              const hasDemo = !!project.demo;
              const hasPreviewImage = !!project.previewImage;
              const hasGithub = !!project.github;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="group glass rounded-2xl gradient-border glow-hover transition-all duration-500 hover:bg-[var(--bg-card-hover)] flex flex-col overflow-hidden"
                >
                  {/* ── Preview Area ── */}
                  <div
                    className="relative w-full overflow-hidden bg-[var(--bg-secondary)]"
                    style={{ height: "220px" }}
                  >
                    {hasDemo ? (
                      <>
                        {/* Live iframe scaled down to fill container without scrollbars */}
                        <iframe
                          src={project.demo}
                          title={`${project.title} preview`}
                          scrolling="no"
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                          style={{
                            width: "200%",
                            height: "440px",
                            border: "none",
                            pointerEvents: "none",
                            transform: "scale(0.5)",
                            transformOrigin: "top left",
                            overflow: "hidden",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-[10px] font-medium text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Live Preview
                        </div>
                      </>
                    ) : hasPreviewImage ? (
                      <>
                        {/* Static screenshot set by developer */}
                        <img
                          src={project.previewImage}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-[10px] font-medium text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          Preview
                        </div>
                      </>
                    ) : (
                      /* Gradient placeholder — no demo, no screenshot yet */
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                          >
                            <span className="text-white text-xl font-bold">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-content-muted mt-1">
                            Preview coming soon
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Card Body ── */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-content-primary group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="flex items-center gap-1 text-xs text-content-muted">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                project.status === "Live"
                                  ? "bg-[var(--success)]"
                                  : project.status === "Completed"
                                    ? "bg-blue-400"
                                    : "bg-[var(--warning)]"
                              }`}
                            />
                            {project.status}
                          </span>
                          <span className="text-xs text-content-muted">·</span>
                          <span className="text-xs text-content-muted">
                            {project.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-content-secondary leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium text-content-muted border border-[var(--border)] hover:border-accent/30 hover:text-accent transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      {hasGithub ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-[var(--border)] hover:border-[var(--border-hover)] text-content-secondary hover:text-content-primary hover:bg-[var(--bg-card)] transition-all duration-300"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Source Code
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-[var(--border)] text-content-muted cursor-not-allowed opacity-60">
                          <Github className="w-3.5 h-3.5" />
                          Private Repo
                        </div>
                      )}

                      {hasDemo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg shadow-accent/10 hover:shadow-accent/20 transition-all duration-300 hover:opacity-90"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-[var(--border)] text-content-muted cursor-not-allowed opacity-60">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
