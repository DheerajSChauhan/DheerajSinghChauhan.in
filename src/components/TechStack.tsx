import React from 'react';
import { Code, Server, Settings } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TechCard {
  title: string;
  icon: React.ComponentType<any>;
  technologies: string[];
  color: string;
}

const techStacks: TechCard[] = [
  {
    title: 'Frontend',
    icon: Code,
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Next.js'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Convex Database', 'Firebase', 'Cloud Firestore'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Tools',
    icon: Settings,
    technologies: ['Clerk Authentication', 'Passport.js', 'Git', 'GitHub', 'Figma', 'Vercel'],
    color: 'from-purple-500 to-pink-500',
  },
];

export const TechStack: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-white dark:bg-dark-900 transition-theme"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Tech Stack
          </h2>
          <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            The technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {techStacks.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <div
                key={stack.title}
                className={`card-tilt group p-6 sm:p-8 bg-gray-50 dark:bg-dark-100 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${stack.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  {stack.title}
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-300 group-hover:translate-x-2"
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stack.color}`} />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};