import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GameContextType {
  xp: number;
  level: number;
  achievements: string[];
  visitorCount: number;
  addXP: (points: number) => void;
  unlockAchievement: (achievement: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [visitorCount] = useState(Math.floor(Math.random() * 1000) + 500);

  const addXP = (points: number) => {
    const newXP = xp + points;
    setXP(newXP);
    
    const newLevel = Math.floor(newXP / 100) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      unlockAchievement('Level Up!');
    }
  };

  const unlockAchievement = (achievement: string) => {
    if (!achievements.includes(achievement)) {
      setAchievements(prev => [...prev, achievement]);
    }
  };

  return (
    <GameContext.Provider value={{
      xp,
      level,
      achievements,
      visitorCount,
      addXP,
      unlockAchievement
    }}>
      {children}
    </GameContext.Provider>
  );
};