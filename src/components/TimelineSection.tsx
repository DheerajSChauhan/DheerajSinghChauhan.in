import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Briefcase } from 'lucide-react';
import { useGame } from '../context/GameContext';
import * as THREE from 'three';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  percentage?: string;
  icon: React.ReactNode;
  index: number;
}

const FloatingIcon: React.FC<{ index: number }> = ({ index }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5 + index;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 + index;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() + index) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 16, 16]}>
      <meshStandardMaterial color={index % 2 === 0 ? "#6366F1" : "#22D3EE"} metalness={0.8} roughness={0.2} />
    </Sphere>
  );
};

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, percentage, icon, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { addXP, unlockAchievement } = useGame();

  const handleClick = () => {
    addXP(15);
    if (index === 0) unlockAchievement('Academic Excellence');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group cursor-pointer`}
      onClick={handleClick}
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
        <motion.div
          className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg">
              {icon}
            </div>
            <span className="text-2xl font-bold text-cyan-400">{year}</span>
            {percentage && (
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                {percentage}
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      </div>
      
      <div className="relative w-20 h-20 flex-shrink-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />
          <FloatingIcon index={index} />
        </Canvas>
      </div>
      
      <div className="flex-1" />
    </motion.div>
  );
};

const TimelineSection: React.FC = () => {
  const timelineData = [
    {
      year: "2019",
      title: "Class 10th Excellence",
      description: "Achieved 90.8% in CBSE Class 10th at Saraswati Academy, establishing a strong foundation in academics with particular strength in Mathematics and Science.",
      percentage: "90.8%",
      icon: <Award className="w-5 h-5 text-white" />
    },
    {
      year: "2021",
      title: "Class 12th Achievement",
      description: "Secured 86% in CBSE Class 12th at Saraswati Academy with focus on Science stream, preparing for engineering entrance examinations.",
      percentage: "86%",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      year: "2022",
      title: "BTech Journey Begins",
      description: "Started BTech at Vellore Institute of Technology, diving deep into Computer Science and Engineering with focus on modern web technologies and software development.",
      icon: <Briefcase className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section id="timeline" className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Academic Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones that shaped my path from foundation to innovation
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-500 rounded-full opacity-30" />
          
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;