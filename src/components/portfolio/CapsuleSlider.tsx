import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SliderImage {
  src: string;
  alt: string;
}

interface CapsuleSliderProps {
  images?: SliderImage[];
  cardBorderRadius?: number;
  className?: string;
}

const defaultImages: SliderImage[] = [
  { src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg", alt: "Gradient 1" },
  { src: "https://framerusercontent.com/images/aNsAT3jCvt4zglbWCUoFe33Q.jpg", alt: "Gradient 2" },
  { src: "https://framerusercontent.com/images/BYnxEV1zjYb9bhWh1IwBZ1ZoS60.jpg", alt: "Gradient 3" },
  { src: "https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg", alt: "Gradient 4" },
  { src: "https://framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg", alt: "Gradient 5" },
];

const CapsuleSlider = ({
  images = defaultImages,
  cardBorderRadius = 12,
  className = "",
}: CapsuleSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = images.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); handlePrev(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); handleNext(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const isCenter = diff === 0;
    const isLeft = diff === -1 || (currentIndex === 0 && index === total - 1);
    const isRight = diff === 1 || (currentIndex === total - 1 && index === 0);

    if (isCenter) {
      return { transform: "translateX(0%) scale(1) rotateZ(0deg)", zIndex: 3, opacity: 1 };
    } else if (isLeft) {
      return { transform: "translateX(-110%) scale(0.75) rotateZ(-12deg)", zIndex: 2, opacity: 0.7 };
    } else if (isRight) {
      return { transform: "translateX(110%) scale(0.75) rotateZ(12deg)", zIndex: 2, opacity: 0.7 };
    } else {
      return { transform: "translateX(0%) scale(0.5)", zIndex: 1, opacity: 0 };
    }
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-[5%] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer p-0"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Cards */}
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence initial={false}>
          {images.map((img, index) => {
            const cardStyle = getCardStyle(index);
            const isVisible =
              Math.abs(index - currentIndex) <= 1 ||
              (currentIndex === 0 && index === total - 1) ||
              (currentIndex === total - 1 && index === 0);

            if (!isVisible) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={cardStyle}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: cardBorderRadius,
                  overflow: "hidden",
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    draggable={false}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-[5%] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer p-0"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default CapsuleSlider;
