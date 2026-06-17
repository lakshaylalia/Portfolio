import React, { useEffect, useRef, useState } from 'react';
import { Download, ArrowDown, Github, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const typingSpeed = useRef(100);

  const roles = [
    'Full Stack Developer',
    'Software Engineer',
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      typingSpeed.current = isDeleting ? 45 : 95;
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

  const stats = [
    { value: '500+', label: 'LeetCode solved' },
    { value: '1700+', label: 'Codeforces rating' },
    { value: '10+', label: 'Projects built' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-muted) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20"
      >
        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col items-center text-center lg:hidden gap-8">

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border)] text-content-secondary bg-[var(--bg-card)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-content-primary leading-[1.1]"
          >
            Hi, I'm <span className="gradient-text">Lakshay Lalia</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} className="w-full">
            <div className="text-lg sm:text-xl text-content-secondary font-medium h-8 flex items-center justify-center gap-1">
              <span className="text-accent">{'>'}</span>
              <span>{displayText}</span>
              <span
                className="inline-block w-[2px] h-[1.1em] bg-accent"
                style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
              />
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative mt-2 mb-2">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-20 blur-2xl animate-glow-pulse" />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-[var(--glass-border)] shadow-2xl shadow-[var(--shadow-color)]"
            >
              <img src="/image.png" alt="Lakshay Lalia" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-16px] pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-accent opacity-60" />
              <div className="absolute bottom-3 right-0 w-1.5 h-1.5 rounded-full bg-accent-secondary opacity-40" />
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-content-secondary max-w-md leading-relaxed">
            Final year CSE student at{' '}
            <span className="text-content-primary font-semibold">NIT Hamirpur</span>.
            Building impactful full-stack applications and solving complex problems
            with clean, scalable code.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 w-full max-w-sm">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-0.5 px-2 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
              >
                <span className="text-lg font-bold gradient-text">{stat.value}</span>
                <span className="text-[10px] text-content-secondary leading-tight text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 items-center w-full justify-center">
            <button
              onClick={() => scrollTo('#projects')}
              className="group px-6 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02] text-sm flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>

            <a
              href="/LakshayLalia_Resume.pdf"
              target="_blank"
              download
              className="group px-6 py-3 border border-[var(--border)] hover:border-[var(--border-hover)] text-content-primary font-semibold rounded-xl transition-all duration-300 hover:bg-[var(--bg-card)] hover:scale-[1.02] text-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Resume
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 text-content-secondary hover:text-accent font-medium transition-all duration-300 text-sm"
            >
              Contact →
            </button>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="flex justify-center gap-3">
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
        {/* ── END MOBILE LAYOUT ── */}

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:grid grid-cols-5 gap-16 items-center">

          {/* Left — text, 3 cols */}
          <div className="col-span-3 text-left space-y-6">

            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border)] text-content-secondary bg-[var(--bg-card)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl xl:text-7xl font-extrabold tracking-tight text-content-primary leading-[1.05]"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                Lakshay<br />Lalia
              </span>
            </motion.h1>

            {/* Typewriter — terminal pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] font-mono text-base">
                <span className="text-accent select-none">{'>'}</span>
                <span className="text-content-primary">{displayText}</span>
                <span
                  className="inline-block w-[2px] h-[1em] bg-accent"
                  style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base text-content-secondary max-w-lg leading-relaxed"
            >
              Final year CSE student at{' '}
              <span className="text-content-primary font-semibold">NIT Hamirpur</span>.
              Building impactful full-stack applications and solving complex problems
              with clean, scalable code.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  <span className="text-xs text-content-secondary">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex gap-3 items-center">
              <button
                onClick={() => scrollTo('#projects')}
                className="group px-6 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02] text-sm flex items-center gap-2"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </button>

              <a
                href="/LakshayLalia_Resume.pdf"
                target="_blank"
                download
                className="group px-6 py-3 border border-[var(--border)] hover:border-[var(--border-hover)] text-content-primary font-semibold rounded-xl transition-all duration-300 hover:bg-[var(--bg-card)] hover:scale-[1.02] text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                Resume
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="px-4 py-3 text-content-secondary hover:text-accent font-medium transition-all duration-300 text-sm"
              >
                Contact →
              </button>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex gap-3">
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
          {/* ── END left col ── */}

          {/* Right — image, 2 cols */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-20 blur-2xl animate-glow-pulse" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-[var(--glass-border)] shadow-2xl shadow-[var(--shadow-color)]"
              >
                <img src="/image.png" alt="Lakshay Lalia" className="w-full h-full object-cover" />
              </motion.div>
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
          {/* ── END right col ── */}

        </div>
        {/* ── END DESKTOP LAYOUT ── */}

      </motion.div>
    </section>
  );
};

export default Hero;