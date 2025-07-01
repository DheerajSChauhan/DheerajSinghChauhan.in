import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Users } from 'lucide-react';
import { useGame } from '../context/GameContext';

const GamificationUI: React.FC = () => {
  const { xp, level, achievements, visitorCount } = useGame();
  const xpProgress = (xp % 100) / 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50"
    >
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>Level {level}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${xpProgress * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-xs text-gray-400">{xp} XP</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-orange-400" />
          <span>{achievements.length}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-cyan-400" />
          <span>{visitorCount}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GamificationUI;