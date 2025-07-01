import React, { useEffect, useState } from 'react';
import { ChevronDown, Linkedin, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 text-white px-4 sm:px-6"
    >
      {/* Parallax background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(1, 95, 252, 0.1) 0%, transparent 50%)`,
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main content with staggered animations */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-primary-400 bg-clip-text text-transparent animate-fade-in">
            Hi, I'm Dheeraj
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl font-light mb-6 sm:mb-8 text-gray-300 animate-fade-in delay-200">
            a Full Stack Web Developer
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            I build cinematic, engaging, and problem-solving applications that combine cutting-edge technology with exceptional user experiences.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in delay-500">
            <a
              href="https://linkedin.com/in/DSC9720"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-500 text-primary-400 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium text-sm sm:text-base">LinkedIn</span>
            </a>
            
            <a
              href="https://wa.me/918630003996"
              className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium text-sm sm:text-base">WhatsApp Me</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 opacity-60" />
        </div>
      </div>
    </section>
  );
};