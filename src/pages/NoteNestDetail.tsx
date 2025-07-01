import React from 'react';
import { ArrowLeft, ExternalLink, Github, FileText, Image, Mic, Video, Search, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { ResumeButton } from '../components/ResumeButton';

export const NoteNestDetail: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Rich Text Editor',
      description: 'Advanced text formatting with markdown support and real-time preview'
    },
    {
      icon: Image,
      title: 'Image Integration',
      description: 'Seamless image embedding with drag-and-drop functionality'
    },
    {
      icon: Mic,
      title: 'Audio Notes',
      description: 'Record and embed audio notes directly within your documents'
    },
    {
      icon: Video,
      title: 'Video Support',
      description: 'Embed videos and create multimedia-rich note collections'
    },
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Powerful search across all content types with smart filtering'
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description: 'Real-time synchronization across all your devices'
    }
  ];

  const techStack = [
    { name: 'Next.js', color: 'bg-black' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500' },
    { name: 'Clerk Auth', color: 'bg-purple-500' },
    { name: 'Convex DB', color: 'bg-orange-500' },
    { name: 'TypeScript', color: 'bg-blue-500' },
    { name: 'Vercel', color: 'bg-gray-800' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <ThemeToggle />
      <ResumeButton />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Paper Texture Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">
                    September 2023
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  NoteNest
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  An innovative multimedia note-taking application that revolutionizes how users capture, organize, and share their thoughts. Achieved a 30% increase in user engagement with advanced search capabilities.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-amber-500 dark:hover:border-amber-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>

            {/* Project Image with Floating Notes */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3694590/pexels-photo-3694590.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="NoteNest App"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating Note Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-12 bg-yellow-200 rounded-lg shadow-lg transform rotate-12 animate-float">
                <div className="p-2">
                  <div className="w-full h-1 bg-yellow-400 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-yellow-400 rounded"></div>
                </div>
              </div>
              <div className="absolute top-8 -right-6 w-14 h-10 bg-blue-200 rounded-lg shadow-lg transform -rotate-6 animate-float delay-500">
                <div className="p-2">
                  <div className="w-full h-1 bg-blue-400 rounded mb-1"></div>
                  <div className="w-2/3 h-1 bg-blue-400 rounded"></div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-8 w-12 h-8 bg-green-200 rounded-lg shadow-lg transform rotate-6 animate-float delay-1000">
                <div className="p-1">
                  <div className="w-full h-0.5 bg-green-400 rounded mb-1"></div>
                  <div className="w-1/2 h-0.5 bg-green-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white/50 dark:bg-dark-100/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-200 rounded-full border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                <span className="font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Multimedia Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the future of note-taking with comprehensive multimedia support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-8 bg-white dark:bg-dark-100 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">User Engagement</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">30%</div>
              <div className="text-amber-100">Engagement Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">1M+</div>
              <div className="text-amber-100">Notes Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">99.9%</div>
              <div className="text-amber-100">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};