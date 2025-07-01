import React from 'react';
import { ArrowLeft, ExternalLink, Github, Users, MessageSquare, Video, FileText, BarChart3, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
// import { ResumeButton } from '../components/ResumeButton';

export const CollabSphereDetail: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Real-time Collaboration',
      description: 'Instant messaging and chat system for seamless team communication'
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Robust security with Passport.js ensuring 100% authentication success'
    },
    {
      icon: FileText,
      title: 'Project Management',
      description: 'Comprehensive task assignment and project tracking capabilities'
    },
    {
      icon: Video,
      title: 'Video Conferencing',
      description: 'Integrated video calls for face-to-face collaboration'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Detailed insights and progress tracking for academic performance'
    },
    {
      icon: Users,
      title: 'Course Management',
      description: 'Complete learning management system for educational institutions'
    }
  ];

  const techStack = [
    { name: 'React.js', color: 'bg-blue-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'Express.js', color: 'bg-gray-600' },
    { name: 'MongoDB', color: 'bg-green-600' },
    { name: 'Passport.js', color: 'bg-purple-500' },
    { name: 'Socket.io', color: 'bg-black' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <ThemeToggle />
      {/* <ResumeButton /> */}
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236366f1' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">
                    April 2024
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Collab Sphere
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  A comprehensive college collaboration platform that revolutionizes how students, faculty, and administrators interact. Successfully handling over 300 active sessions with 100% authentication success rate.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>

            {/* Project Image with Network Visualization */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Collab Sphere Platform"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Network Nodes */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-12 left-8 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -right-2 w-5 h-5 bg-purple-300 rounded-full animate-bounce delay-1000"></div>
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="20%" y1="30%" x2="80%" y2="20%" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="15%" y1="70%" x2="85%" y2="50%" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="3s" repeatCount="indefinite" />
                </line>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
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
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Empowering educational institutions with cutting-edge collaboration tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-8 bg-white dark:bg-dark-100 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Platform Success</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">300+</div>
              <div className="text-purple-100">Active Sessions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">100%</div>
              <div className="text-purple-100">Auth Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">50+</div>
              <div className="text-purple-100">Institutions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};