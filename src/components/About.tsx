import React, { useEffect, useRef } from 'react';
import { Code, Users, Trophy, BookOpen } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-text',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: 'MERN Stack Developer',
      description: 'Building full-stack applications with modern technologies and best practices.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'CSEC Secretary',
      description: 'Leading web development, media management, and community tech initiatives.',
      color: 'green'
    },
    {
      icon: Trophy,
      title: 'Problem Solver',
      description: 'Solved 250+ DSA problems across various competitive programming platforms.',
      color: 'purple'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and contributing to the developer community.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-200 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="about-text text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-5">
            About Me
          </h2>
          <p className="about-text text-lg lg:text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate about backend and frontend development, solving complex DSA problems, and building applications that create real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="about-card group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-200 dark:border-slate-700"
              >
                <div className={`w-12 h-12 rounded-xl ${getColorClasses(item.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>


        {/* <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
          <div className="about-text max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                As a pre-final year Computer Science and Engineering student at NIT Hamirpur, 
                I've immersed myself in the world of full-stack development with a special 
                focus on backend technologies. My journey began with C++ and data structures, 
                which laid a strong foundation for problem-solving and algorithmic thinking.
              </p>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                Currently serving as the Secretary of CSEC (Computer Science and Engineering Club), 
                I handle web development projects, media management, and community tech initiatives. 
                This role has enhanced my leadership skills and taught me the importance of 
                collaborative development and project management.
              </p>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring junior students. I believe in continuous 
                learning and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;