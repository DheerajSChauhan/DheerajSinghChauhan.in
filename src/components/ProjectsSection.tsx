import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, RoundedBox } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';
import { useGame } from '../context/GameContext';
import * as THREE from 'three';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard3D: React.FC<{ color: string; index: number }> = ({ color, index }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() + index) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() + index) * 0.1;
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[1.5, 0.8, 0.1]} radius={0.1} smoothness={4}>
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </RoundedBox>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { addXP, unlockAchievement } = useGame();

  const handleProjectClick = () => {
    addXP(25);
    unlockAchievement('Project Explorer');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group cursor-pointer"
      onClick={handleProjectClick}
    >
      <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
        <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            <ProjectCard3D color={project.color} index={index} />
          </Canvas>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <div className="absolute top-4 right-4 flex gap-2">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-900/70 backdrop-blur-sm rounded-lg hover:bg-gray-800/70 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-white" />
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900/70 backdrop-blur-sm rounded-lg hover:bg-gray-800/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.a>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{project.forks}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>Live Demo</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration with modern UI/UX design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 24,
      forks: 8,
      color: "#6366F1"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates using Socket.io. Built with React and Express, featuring drag-and-drop interface and team collaboration tools.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 18,
      forks: 5,
      color: "#22D3EE"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization and forecasting. Integrates multiple weather APIs with responsive design and location-based services.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API"],
      githubUrl: "#",
      stars: 12,
      forks: 3,
      color: "#10B981"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio website you're viewing! Built with React, Three.js, and Framer Motion. Features interactive 3D elements and gamification system.",
      technologies: ["React", "Three.js", "TypeScript", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 31,
      forks: 12,
      color: "#F59E0B"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms and user authentication. Built with React and Firebase, featuring emoji support and file sharing capabilities.",
      technologies: ["React", "Firebase", "Material-UI"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 15,
      forks: 6,
      color: "#EF4444"
    },
    {
      title: "Data Visualizer",
      description: "Interactive data visualization tool for analyzing large datasets. Built with D3.js and React, featuring multiple chart types and export functionality.",
      technologies: ["React", "D3.js", "Python", "Flask"],
      githubUrl: "#",
      stars: 9,
      forks: 2,
      color: "#8B5CF6"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Project Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into reality through code, creativity, and continuous innovation
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;