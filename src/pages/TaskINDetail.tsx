import React from 'react';
import { ArrowLeft, ExternalLink, Github, Smartphone, Users, Zap, Shield, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { ResumeButton } from '../components/ResumeButton';

export const TaskINDetail: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Compatibility',
      description: 'Native performance on both iOS and Android with a single codebase'
    },
    {
      icon: MapPin,
      title: 'Geolocation Matching',
      description: 'Smart location-based service provider matching for optimal user experience'
    },
    {
      icon: Users,
      title: 'Real-time Booking',
      description: 'Instant service booking with live tracking and status updates'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Multiple payment gateways with bank-level security encryption'
    },
    {
      icon: Star,
      title: 'Rating System',
      description: 'Comprehensive review and rating system for quality assurance'
    },
    {
      icon: Zap,
      title: 'Push Notifications',
      description: 'Real-time updates for booking confirmations and service status'
    }
  ];

  const techStack = [
    { name: 'Flutter', color: 'bg-blue-500' },
    { name: 'Dart', color: 'bg-cyan-500' },
    { name: 'Firebase', color: 'bg-orange-500' },
    { name: 'Firestore', color: 'bg-yellow-500' },
    { name: 'Cloud Functions', color: 'bg-green-500' },
    { name: 'Firebase Auth', color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <ThemeToggle />
      <ResumeButton />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23015FFC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">
                    January 2025
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  TaskIN
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  A revolutionary cross-platform mobile application that bridges the gap between local service providers and customers, featuring a streamlined onboarding process that improved user adoption by 30%.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3228866/pexels-photo-3228866.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="TaskIN App"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
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
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the powerful features that make TaskIN the go-to platform for local service connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-8 bg-white dark:bg-dark-100 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Project Impact</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">30%</div>
              <div className="text-blue-100">Improved Onboarding</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">500+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold">95%</div>
              <div className="text-blue-100">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};