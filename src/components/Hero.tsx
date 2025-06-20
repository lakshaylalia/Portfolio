import React, { useEffect, useRef } from 'react';
import { Download, MessageCircle, Github, Linkedin, Globe } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
    );

    tl.fromTo('.profile-image',
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 1, ease: 'back.out(1.7)' },
      '-=0.5'
    );

    const text = "Full Stack Developer";
    const chars = text.split('');

    if (typingRef.current) {
      typingRef.current.innerHTML = '';

      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        typingRef.current?.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          duration: 0.05,
          delay: 1 + (index * 0.1),
          ease: 'none'
        });
      });
    }

    gsap.to('.hero-float', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/lakshaylalia', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lakshay-lalia/', label: 'LinkedIn' },
    { icon: Globe, href: 'https://codolio.com/profile/Phoenix_13', label: 'Codolio' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-200 dark:bg-slate-900">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 dark:bg-indigo-400/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={heroRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-float grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 animate-pulse">
                <div className="bg-white dark:bg-slate-900 rounded-full p-2">
                  <div className="w-80 h-80 rounded-full bg-gray-50 dark:bg-slate-800"></div>
                </div>
              </div>

              <div className="profile-image relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src="/image.jpg"
                  alt="Lakshay Lalia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-2xl lg:text-5xl font-bold text-gray-600 dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gray-900 dark:bg-gradient-to-r dark:from-blue-600 dark:via-purple-600 dark:to-indigo-600 dark:bg-clip-text dark:text-transparent">
                Lakshay Lalia
              </span>
            </h1>


            <div className="text-base sm:text-xs md:text-lg lg:text-2xl text-gray-700 dark:text-slate-300 mb-4 h-12">
              <span ref={typingRef} className="font-medium"></span>
              <span className="animate-pulse text-blue-600">|</span>
            </div>

            <p className="text-sm sm:text-sm text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Pre-final year CSE student at <strong className="text-gray-900 dark:text-white">NIT Hamirpur</strong>.
              MERN Stack enthusiast, CSEC Secretary, and passionate problem solver
              building impactful real-world applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <a href='/Lakshay.pdf' target='_blank' download className="group px-8 py-4 bg-gray-800  dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>

              <a href='#contact' className="group px-8 py-4 border-2 border-gray-800 dark:border-slate-300 text-gray-800 dark:text-slate-300 font-semibold rounded-xl hover:bg-gray-800 hover:text-white dark:hover:bg-slate-300 dark:hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Contact Me
              </a>
            </div>


            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-slate-800 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-gray-800 dark:text-slate-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;