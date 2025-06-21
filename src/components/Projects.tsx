import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Database, Globe, ListTodo, Users, FileText, Palette, Star, Calendar, Code2, LayoutDashboard } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.projects-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );


      gsap.fromTo('.project-card',
        { y: 100, opacity: 0, scale: 0.8, rotationX: 15 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );


      gsap.fromTo('.feature-item',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.project-card',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.tech-tag',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.tech-tags',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'B+ Tree Visual DB',
      description: 'An interactive visualization tool for B+ Tree data structure operations, helping students understand database indexing with real-time animations and step-by-step explanations.',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'HTML5 Canvas', 'Tailwind CSS', 'Vercel'],
      icon: Database,
      color: 'red',
      gradient: 'from-red-500 via-pink-500 to-rose-500',
      features: ['Interactive Visualization', 'Step-by-step Operations', 'Educational Tool', 'Real-time Updates'],
      github: 'https://github.com/lakshaylalia/DB-Project.git',
      demo: 'https://db-project-nine.vercel.app/',
      status: 'Live',
      year: '2025'
    },
    {
      title: 'Lakshay Lalia Portfolio',
      description: 'A personal portfolio website built to showcase my projects, skills, and development journey. It features smooth GSAP animations, responsive design, and Framer Motion transitions.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'EmailJS', 'Vite', 'Vercel'],
      icon: LayoutDashboard,
      color: 'blue',
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      features: ['Responsive Design', 'Smooth Animations', 'Dark Mode', 'Contact Form', 'Live Deploy'],
      github: 'https://github.com/lakshaylalia/Portfolio.git',
      demo: 'https://portfolio-vadv.onrender.com/',
      status: 'Live',
      year: '2025'
    },
    {
      title: 'CSEC Website',
      description: 'Official website for the Computer Science and Engineering Club at NIT Hamirpur featuring modern design, event management system, and comprehensive member portal.',
      technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Redux Toolkit', 'GSAP', 'Node.js'],
      icon: Users,
      color: 'purple',
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      features: ['Event Management', 'Member Portal', 'News Updates', 'Gallery System'],
      github: 'https://github.com/lakshaylalia/Csec_Website.git',
      demo: 'https://csec.nith.ac.in/',
      status: 'Live',
      year: '2024'
    },
    {
      title: 'Vibble',
      description: 'A unique hybrid platform combining YouTube and Twitter features, enabling users to share video content with social media interactions and real-time engagement.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT'],
      icon: Globe,
      color: 'blue',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      features: ['Video Upload & Streaming', 'Real-time Comments', 'Social Feed', 'User Authentication'],
      github: 'https://github.com/lakshaylalia/Vibble.git',
      demo: '',
      status: 'Development',
      year: '2025'
    },
    {
      title: 'Design o\' Crats',
      description: 'Official website for the Architecture Department club at NIT Hamirpur, showcasing creative works, events, and team members with stunning visual design.',
      technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'JavaScript', 'Vercel'],
      icon: Palette,
      color: 'indigo',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      features: ['Dynamic Club Sections', 'Team Showcase', 'Event Highlights', 'Responsive Design'],
      github: 'https://github.com/lakshaylalia/designOcrafts.git',
      demo: 'https://design-ocrafts.vercel.app/',
      status: 'Live',
      year: '2025'
    },
    {
      title: 'Inkspire',
      description: 'A modern blog platform with rich text editing capabilities, comprehensive user management, and advanced content discovery features for writers and readers.',
      technologies: ['Express.js', 'EJS', 'MongoDB', 'Tailwind CSS', 'Node.js', 'Render'],
      icon: FileText,
      color: 'green',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      features: ['Rich Text Editor', 'User Profiles', 'Content Management', 'Search & Filter'],
      github: 'https://github.com/lakshaylalia/Inkspire.git',
      demo: 'https://inkspire-18re.onrender.com/',
      status: 'Live',
      year: '2025'
    },
    {
      title: 'Kudos',
      description: 'A comprehensive task tracking system with Jira-like functionality for project management, team collaboration, and productivity enhancement.',
      technologies: ['Next.js', 'Tailwind CSS', 'Redux Toolkit', 'TypeScript', 'Vercel', 'REST API'],
      icon: ListTodo,
      color: 'orange',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      features: ['Task Management', 'Team Collaboration', 'Progress Tracking', 'Priority System'],
      github: 'https://github.com/lakshaylalia/KudosFrontEnd.git',
      demo: 'https://kudos-roan-xi.vercel.app/',
      status: 'Live',
      year: '2025'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Development':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="projects-title text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications built with modern
            technologies and focusing on exceptional user experience, performance, and scalability.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-slate-400">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>6 Projects</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-slate-400">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>2024 - 2025</span>
            </div>
          </div>
        </div>


        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === index;

            return (
              <div
                key={index}
                className="project-card group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-slate-700/50 hover:border-gray-300/50 dark:hover:border-slate-600/50"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >

                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}>
                  <div className="absolute inset-[2px] bg-white dark:bg-slate-800 rounded-3xl"></div>
                </div>


                <div className="relative p-8 h-full flex flex-col">

                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                        <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-slate-400">{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <p className="text-sm lg:text-base text-gray-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>


                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-2`}></div>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="feature-item flex items-center text-xs md:text-sm text-gray-600 dark:text-slate-400 group/feature">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mr-2 group-hover/feature:scale-125 transition-transform duration-200`}></div>
                          <span className="group-hover/feature:text-gray-800 dark:group-hover/feature:text-slate-200 transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>


                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-2`}></div>
                      Technologies
                    </h4>
                    <div className="tech-tags flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="tech-tag relative px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-full text-xs font-medium border border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 transition-all duration-200 hover:scale-105 cursor-default"
                        >
                          {tech}
                          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 hover:opacity-10 rounded-full transition-opacity duration-200`}></div>
                        </span>
                      ))}
                    </div>
                  </div>


                  <div className="flex md:space-x-3 mt-auto flex-col md:flex-row gap-2">
                    <a
                      href={project.github}
                      target='_blank'
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden flex items-center justify-center px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <Github className="w-4 h-4 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="relative z-10 text-xs lg:text-base">View Code</span>
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target='_blank'
                        rel="noopener noreferrer"
                        className={`flex-1 group/btn relative overflow-hidden flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-xl transition-all duration-300 text-sm font-medium shadow-lg hover:scale-105`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                        <ExternalLink className="w-4 h-4 lg:mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10 text-xs lg:text-base">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>


                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl border border-indigo-200/50 dark:border-indigo-700/50 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Interested in collaborating?
              </h3>
              <p className="text-gray-600 dark:text-slate-400 mb-6 max-w-md">
                I'm always open to discussing new projects and opportunities.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;