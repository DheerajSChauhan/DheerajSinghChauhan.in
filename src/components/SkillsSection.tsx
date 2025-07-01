import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, Database, GitBranch, Globe, Zap } from 'lucide-react';
import { useGame } from '../context/GameContext';
import * as THREE from 'three';

interface Skill {
  name: string;
  level: number;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillBarProps {
  level: number;
  color: string;
}

const SkillBar3D: React.FC<SkillBarProps> = ({ level, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group>
      <Box ref={meshRef} args={[level / 20, 0.2, 0.2]} position={[level / 40, 0, 0]}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Box>
    </group>
  );
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { addXP, unlockAchievement } = useGame();

  const handleClick = () => {
    addXP(20);
    if (skill.level >= 80) unlockAchievement('Skill Master');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg">
            {skill.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">{skill.level}%</div>
          </div>
        </div>
        
        <div className="relative h-24 bg-gray-900/50 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            <SkillBar3D level={skill.level} color={skill.color} />
          </Canvas>
          
          <div className="absolute bottom-2 left-2 right-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Proficiency</span>
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: skill.color }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "Front-End Development",
      level: 85,
      description: "React, TypeScript, Modern CSS",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "#6366F1"
    },
    {
      name: "JavaScript & ES6+",
      level: 80,
      description: "Modern JS, Async Programming",
      icon: <Code className="w-6 h-6 text-white" />,
      color: "#22D3EE"
    },
    {
      name: "React Development",
      level: 75,
      description: "Hooks, Context API, Performance",
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "#10B981"
    },
    {
      name: "C++ Programming",
      level: 70,
      description: "Data Structures, Algorithms",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "#F59E0B"
    },
    {
      name: "Version Control",
      level: 65,
      description: "Git, GitHub, Collaboration",
      icon: <GitBranch className="w-6 h-6 text-white" />,
      color: "#EF4444"
    },
    {
      name: "Mobile Development",
      level: 60,
      description: "React Native, Cross-platform",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      color: "#8B5CF6"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and proven expertise
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;