import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface RollingTextProps {
  text: string;
  duplicateCount?: number;
  rollDuration?: number;
  staggerDelay?: number;
  blurIntensity?: number;
  className?: string;
  animationPattern?: "sequential" | "alternating";
  charHeight?: number;
}

const RollingText = ({
  text,
  duplicateCount = 8,
  rollDuration = 2,
  staggerDelay = 0.1,
  blurIntensity = 8,
  className = "",
  animationPattern = "sequential",
  charHeight = 60,
}: RollingTextProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsAnimating(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const handleReplay = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 50);
  };

  const characters = text.split("");

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center overflow-hidden cursor-pointer select-none ${className}`}
      onClick={handleReplay}
    >
      <div className="flex items-center justify-center" style={{ gap: "0.05em" }}>
        {characters.map((char, index) => (
          <CharacterColumn
            key={`${char}-${index}`}
            character={char}
            duplicateCount={duplicateCount}
            rollDuration={rollDuration}
            delay={index * staggerDelay}
            blurIntensity={blurIntensity}
            isAnimating={isAnimating}
            animationPattern={animationPattern}
            characterIndex={index}
            charHeight={charHeight}
          />
        ))}
      </div>
    </div>
  );
};

function CharacterColumn({
  character,
  duplicateCount,
  rollDuration,
  delay,
  blurIntensity,
  isAnimating,
  animationPattern,
  characterIndex,
  charHeight,
}: {
  character: string;
  duplicateCount: number;
  rollDuration: number;
  delay: number;
  blurIntensity: number;
  isAnimating: boolean;
  animationPattern: "sequential" | "alternating";
  characterIndex: number;
  charHeight: number;
}) {
  const totalScrollDistance = charHeight * (duplicateCount - 1);
  const isOddPosition = characterIndex % 2 === 0;
  const shouldRollFromBottom = animationPattern === "alternating" && !isOddPosition;
  const initialY = shouldRollFromBottom ? -totalScrollDistance : 0;
  const finalY = shouldRollFromBottom ? 0 : -totalScrollDistance;

  const duplicates = Array(duplicateCount).fill(character);

  return (
    <div
      className="relative overflow-hidden flex items-start justify-center"
      style={{ height: `${charHeight}px` }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: initialY }}
        animate={isAnimating ? { y: finalY } : { y: initialY }}
        transition={{
          duration: rollDuration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween",
        }}
      >
        {duplicates.map((char, index) => (
          <motion.span
            key={index}
            className="flex items-center justify-center text-foreground"
            style={{ height: `${charHeight}px`, lineHeight: "1em" }}
            initial={{ filter: "blur(0px)" }}
            animate={
              isAnimating
                ? {
                    filter: [
                      "blur(0px)",
                      `blur(${blurIntensity}px)`,
                      `blur(${blurIntensity}px)`,
                      "blur(0px)",
                    ],
                  }
                : { filter: "blur(0px)" }
            }
            transition={{
              duration: rollDuration,
              delay,
              times: [0, 0.2, 0.8, 1],
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default RollingText;
