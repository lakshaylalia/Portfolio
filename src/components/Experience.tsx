import React, { useEffect, useRef } from 'react';
import { MapPin, Calendar, Users, Award, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.achievement-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.achievements-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'Secretary',
      organization: 'Computer Science and Engineering Club (CSEC)',
      location: 'NIT Hamirpur',
      period: '2023 - Present',
      type: 'Leadership Role',
      description: 'Leading the technical initiatives and community engagement for the CSE department club.',
      responsibilities: [
        'Managing web development projects and maintaining club website',
        'Coordinating media and content creation for events and workshops',
        'Organizing technical workshops and coding competitions',
        'Building community engagement through social media and outreach programs'
      ],
      achievements: [
        'Increased club engagement by 150% through digital initiatives',
        'Successfully organized 5+ technical workshops with 200+ participants',
        'Led development of club\'s official website with modern tech stack'
      ],
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Hackathon Organizing Team',
      organization: 'Various Hackathons',
      location: 'NIT Hamirpur',
      period: '2025',
      type: 'Event Management',
      description: 'Part of organizing team for multiple hackathons and coding competitions.',
      responsibilities: [
        'Technical infrastructure setup and management',
        'Participant coordination and support',
        'Problem setting and evaluation for coding contests',
        'Mentoring participants during hackathons'
      ],
      achievements: [
        'Successfully managed technical aspects of major hackathons',
        'Coordinated events with 900+ participants',
        'Received appreciation for seamless event execution'
      ],
      icon: Zap,
      color: 'orange'
    }
  ];

  const achievements = [
    {
      title: '300+ DSA Problems',
      description: 'Solved across LeetCode, GeeksforGeeks, and Codeforces',
      icon: Award,
      color: 'green'
    },
    {
      title: 'Full Stack Projects',
      description: '5+ complete MERN stack applications developed',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Technical Leadership',
      description: 'Leading CSEC initiatives and hackathon organizations',
      icon: Zap,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      orange: 'from-orange-500 to-orange-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getBgColor = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
      green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-200 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Leadership
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            My journey in leadership roles, event management, and community building 
            alongside technical development and problem-solving achievements.
          </p>
        </div>

       
        <div className="relative">
      
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-slate-600 transform md:-translate-x-px"></div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className={`timeline-item relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white dark:bg-slate-900 border-4 border-blue-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-blue-500" />
                </div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
               
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getColorClasses(exp.color)} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-800 dark:text-slate-200 font-medium mb-2">
                        {exp.organization}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                  
                    <p className="text-gray-700 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-sm text-gray-600 dark:text-slate-400 flex items-start">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(exp.color)} mt-2 mr-2 flex-shrink-0`}></div>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-600 dark:text-slate-400 flex items-start">
                            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="achievements-section mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="achievement-card bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-full ${getBgColor(achievement.color)} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-slate-400">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;