import { motion } from "framer-motion";
import RollingText from "./RollingText";
import DraggableTicker from "./DraggableTicker";
import slider1 from "@/assets/slider-1.jpeg";
import slider2 from "@/assets/slider-2.jpeg";
import slider3 from "@/assets/slider-3.jpeg";
import slider4 from "@/assets/slider-4.jpeg";
import slider6 from "@/assets/slider-6.jpg";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col items-center px-4 pt-11 pb-6 overflow-hidden">
      {/* Logo */}
      <div className="flex justify-center mb-2">
        <div className="text-5xl font-bold tracking-tighter font-mono">
          <RollingText text="D S C" duplicateCount={8} rollDuration={2} staggerDelay={0.1} blurIntensity={8} animationPattern="alternating" />
        </div>
      </div>

      {/* Capsule Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full flex-1 min-h-0 max-h-[44vh] sm:max-h-[52vh] md:max-h-[60vh]"
      >
        <DraggableTicker
          images={[
            { src: slider1, alt: "DB City" },
            { src: slider2, alt: "VIT Bhopal University" },
            { src: slider3, alt: "Mountain View" },
            { src: slider4, alt: "Jal Mahal" },
            { src: slider6, alt: "Aesthetic vibes" },
          ]}
          speed={1.2}
          cardWidth={360}
          gap={16}
        />
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center gap-2 justify-center mt-4"
      >
        <h1 className="text-4xl font-semibold">
          <RollingText text="Dheeraj  Singh  Chauhan" duplicateCount={6} rollDuration={1.8} staggerDelay={0.08} blurIntensity={6} animationPattern="sequential" charHeight={40} />
        </h1>
      </motion.div>
      <p className="text-sm text-muted-foreground mt-2 text-center mb-2">
        Building responsive, user-centric web applications.
      </p>
    </section>
  );
};

export default HeroSection;
