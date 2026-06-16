import React, { useState } from 'react';
import { ExternalLink, Github, Database, Globe, ListTodo, Users, FileText, Palette, LayoutDashboard, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'B+ Tree Visual DB',
      description: 'Interactive visualization tool for B+ Tree operations, helping students understand database indexing with real-time animations and step-by-step explanations.',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'Canvas', 'Tailwind CSS'],
      icon: Database,
      gradient: 'from-rose-500 to-pink-500',
      github: 'https://github.com/lakshaylalia/DB-Project.git',
      demo: 'https://db-project-nine.vercel.app/',
      screenshot: '',
      status: 'Live',
      year: '2025',
      category: 'Full Stack',
    },
    {
      title: 'CSEC Website',
      description: 'Official website for the Computer Science and Engineering Club at NIT Hamirpur with modern design, event management, and member portal.',
      technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Redux', 'GSAP', 'Node.js'],
      icon: Users,
      gradient: 'from-violet-500 to-indigo-500',
      github: 'https://github.com/lakshaylalia/Csec_Website.git',
      demo: 'https://csec.nith.ac.in/',
      screenshot: '',
      status: 'Live',
      year: '2024',
      category: 'Full Stack',
    },
    {
      title: 'Vibble',
      description: 'Hybrid platform combining YouTube and Twitter — share video content with social media interactions and real-time engagement features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT'],
      icon: Globe,
      gradient: 'from-cyan-500 to-teal-500',
      github: 'https://github.com/lakshaylalia/Vibble.git',
      demo: '',
      screenshot: '',
      status: 'Development',
      year: '2025',
      category: 'Full Stack',
    },
    {
      title: "Design o' Crats",
      description: 'Official website for the Architecture Department club at NIT Hamirpur, showcasing creative works, events, and team members.',
      technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/lakshaylalia/designOcrafts.git',
      demo: 'https://design-ocrafts.vercel.app/',
      screenshot: '',
      status: 'Live',
      year: '2025',
      category: 'Frontend',
    },
    {
      title: 'Inkspire',
      description: 'Modern blog platform with rich text editing, comprehensive user management, and advanced content discovery features.',
      technologies: ['Express.js', 'EJS', 'MongoDB', 'Tailwind CSS', 'Node.js'],
      icon: FileText,
      gradient: 'from-emerald-500 to-teal-500',
      github: 'https://github.com/lakshaylalia/Inkspire.git',
      demo: 'https://inkspire-18re.onrender.com/',
      screenshot: '',
      status: 'Live',
      year: '2025',
      category: 'Full Stack',
    },
    {
      title: 'Kudos',
      description: 'Comprehensive task tracking system with Jira-like functionality for project management, team collaboration, and productivity.',
      technologies: ['Next.js', 'Tailwind CSS', 'Redux', 'TypeScript', 'REST API'],
      icon: ListTodo,
      gradient: 'from-amber-500 to-orange-500',
      github: 'https://github.com/lakshaylalia/KudosFrontEnd.git',
      demo: 'https://kudos-roan-xi.vercel.app/',
      screenshot: '',
      status: 'Live',
      year: '2025',
      category: 'Frontend',
    },
    {
      title: 'Portfolio',
      description: 'Personal portfolio website showcasing projects, skills, and journey — built with smooth animations and responsive design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
      icon: LayoutDashboard,
      gradient: 'from-blue-500 to-indigo-500',
      github: 'https://github.com/lakshaylalia/Portfolio.git',
      demo: 'https://portfolio-vadv.onrender.com/',
      screenshot: '',
      status: 'Live',
      year: '2025',
      category: 'Frontend',
    },
  ];

  const filterCategories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

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
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'text-content-secondary hover:text-content-primary border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)]'
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
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="group glass rounded-2xl p-6 md:p-8 gradient-border glow-hover transition-all duration-500 hover:bg-[var(--bg-card-hover)] flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-content-primary group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="flex items-center gap-1 text-xs text-content-muted">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                project.status === 'Live' ? 'bg-[var(--success)]' : 'bg-[var(--warning)]'
                              }`}
                            />
                            {project.status}
                          </span>
                          <span className="text-xs text-content-muted">·</span>
                          <span className="text-xs text-content-muted">{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-content-secondary leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-[var(--border)] hover:border-[var(--border-hover)] text-content-secondary hover:text-content-primary hover:bg-[var(--bg-card)] transition-all duration-300"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg shadow-accent/10 hover:shadow-accent/20 transition-all duration-300 hover:opacity-90"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    ) : project.screenshot ? (
                      <a
                        href={project.screenshot}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg shadow-accent/10 hover:shadow-accent/20 transition-all duration-300 hover:opacity-90"
                      >
                        <Image className="w-3.5 h-3.5" />
                        Preview
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-[var(--border)] text-content-muted cursor-not-allowed opacity-60">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Coming Soon
                      </div>
                    )}
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