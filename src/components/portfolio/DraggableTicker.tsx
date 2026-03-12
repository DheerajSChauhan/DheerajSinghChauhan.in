import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame, animate } from "framer-motion";

interface TickerImage {
  src: string;
  alt: string;
}

interface DraggableTickerProps {
  images: TickerImage[];
  speed?: number;
  gap?: number;
  cardWidth?: number;
  className?: string;
}

const DraggableTicker = ({
  images,
  speed = 1,
  gap = 16,
  cardWidth = 320,
  className = "",
}: DraggableTickerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Triple the images for seamless looping
  const tripled = [...images, ...images, ...images];
  const singleSetWidth = images.length * (cardWidth + gap);

  useAnimationFrame((_, delta) => {
    if (isPaused || isDragging) return;
    const moveBy = -speed * (delta / 16);
    let newX = x.get() + moveBy;
    // Reset when scrolled past one full set
    if (newX <= -singleSetWidth) {
      newX += singleSetWidth;
    }
    x.set(newX);
  });

  const handleDragEnd = useCallback(
    (_: any, info: { velocity: { x: number } }) => {
      setIsDragging(false);
      // Apply momentum
      const momentum = info.velocity.x * 0.3;
      const target = x.get() + momentum;
      animate(x, target, {
        type: "tween",
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
    },
    [x]
  );

  // Keep x in bounds
  useEffect(() => {
    const unsubscribe = x.on("change", (val) => {
      if (val <= -singleSetWidth * 2) {
        x.set(val + singleSetWidth);
      } else if (val > 0) {
        x.set(val - singleSetWidth);
      }
    });
    return unsubscribe;
  }, [x, singleSetWidth]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsDragging(false);
      }}
    >
      <motion.div
        className="flex items-center h-full"
        style={{ x, gap }}
        drag="x"
        dragConstraints={{ left: -singleSetWidth * 2, right: singleSetWidth }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        {tripled.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-full rounded-xl overflow-hidden"
            style={{ width: cardWidth }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DraggableTicker;
