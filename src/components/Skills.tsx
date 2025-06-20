import React, { useEffect, useRef } from 'react';
import { Code, Database, Globe, Wrench, GitBranch, Smartphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '../ui/CountUp';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.skill-category',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );


      gsap.fromTo('.skill-bar',
        { width: '0%' },
        {
          width: (index, element) => element.getAttribute('data-width') || '0%',
          duration: 1.5,
          ease: 'power2.out',
          stagger: 0.1,
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'C', level: 75 }
      ]
    },
    {
      title: 'Frontend',
      icon: Globe,
      color: 'green',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'orange',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'purple',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 75 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconBgColor = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
      purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-200 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
            to build robust and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="skill-category bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >

                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg ${getIconBgColor(category.color)} flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`skill-bar h-full bg-gradient-to-r ${getColorClasses(category.color)} rounded-full transition-all duration-300`}
                          data-width={`${skill.level}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
          <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Problem Solving & Data Structures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="skill-category">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <CountUp
                  from={0}
                  to={300}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+
              </div>
              <div className="text-gray-700 dark:text-slate-300">DSA Problems Solved</div>
              <div className="text-sm text-gray-500 dark:text-slate-500 mt-1">LeetCode, GFG, Codeforces</div>
            </div>
            <div className="skill-category">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2"><CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /></div>
              <div className="text-gray-700 dark:text-slate-300">Full Stack Projects</div>
              <div className="text-sm text-gray-500 dark:text-slate-500 mt-1">MERN Stack Applications</div>
            </div>
            <div className="skill-category">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">1+</div>
              <div className="text-gray-700 dark:text-slate-300">Years Experience</div>
              <div className="text-sm text-gray-500 dark:text-slate-500 mt-1">Web Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;