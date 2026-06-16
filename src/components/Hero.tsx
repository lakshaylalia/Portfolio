import React, { useEffect, useRef, useState } from 'react';
import { Download, ArrowDown, Github, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = useRef(100);

  const roles = [
    'Software Engineer',
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      typingSpeed.current = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed.current);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/lakshaylalia', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lakshay-lalia/', label: 'LinkedIn' },
    { icon: Globe, href: 'https://codolio.com/profile/Phoenix_13', label: 'Codolio' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-muted) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text content — 3 cols */}
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border)] text-content-secondary bg-[var(--bg-card)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-content-primary mb-4 leading-[1.1]"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Lakshay Lalia</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="text-lg sm:text-xl lg:text-2xl text-content-secondary font-medium h-8 sm:h-10">
                <span>{displayText}</span>
                <span className="text-accent animate-pulse">|</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-content-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Final year CSE student at{' '}
              <span className="text-content-primary font-semibold">NIT Hamirpur</span>.
              Building impactful full-stack applications and solving complex problems
              with clean, scalable code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-6 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02] text-sm flex items-center gap-2"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>

              <a
                href="/LakshayLalia_Resume.pdf"
                target="_blank"
                download
                className="group px-6 py-3 border border-[var(--border)] hover:border-[var(--border-hover)] text-content-primary font-semibold rounded-xl transition-all duration-300 hover:bg-[var(--bg-card)] hover:scale-[1.02] text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                Resume
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 text-content-secondary hover:text-accent font-medium transition-all duration-300 text-sm"
              >
                Contact →
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl border border-[var(--border)] hover:border-[var(--border-hover)] text-content-secondary hover:text-content-primary transition-all duration-300 hover:bg-[var(--bg-card)]"
                    aria-label={social.label}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Profile image — 2 cols */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-20 blur-2xl animate-glow-pulse" />

              {/* Photo */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-[var(--glass-border)] shadow-2xl shadow-[var(--shadow-color)]"
              >
                <img
                  src="/image.png"
                  alt="Lakshay Lalia"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Orbital accent dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-16px] pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-accent opacity-60" />
                <div className="absolute bottom-4 right-0 w-1.5 h-1.5 rounded-full bg-accent-secondary opacity-40" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;