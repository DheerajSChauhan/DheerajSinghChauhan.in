import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  title: string;
  date: string;
  tech: string[];
  summary: string;
  image: string;
  slug: string;
  links?: {
    live?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: 'TaskIN',
    date: 'Jan 2025',
    tech: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    summary: 'Cross-platform app for local service providers with 30% improved onboarding',
    image: 'https://images.pexels.com/photos/3228866/pexels-photo-3228866.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'taskin',
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'Collab Sphere',
    date: 'Apr 2024',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Passport.js'],
    summary: 'College collaboration platform with 300+ sessions, 100% auth success',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'collab-sphere',
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'NoteNest',
    date: 'Sep 2023',
    tech: ['Next.js', 'Tailwind', 'Clerk Auth', 'Convex DB'],
    summary: 'Multimedia note-taking app with 30% engagement increase',
    image: 'https://images.pexels.com/photos/3694590/pexels-photo-3694590.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'note-nest',
    links: {
      live: '#',
      github: '#',
    },
  },
];

export const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-800 transition-theme"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Showcasing impactful applications that solve real-world problems
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white dark:bg-dark-100 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 hover:shadow-2xl card-tilt ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <Link
                  to={`/project/${project.slug}`}
                  className="group/btn flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200 text-sm sm:text-base"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};