import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import GradientBackground from "@/components/portfolio/GradientBackground";
import Footer from "@/components/portfolio/Footer";

import slider1 from "@/assets/slider-1.jpeg";
import slider2 from "@/assets/slider-2.jpeg";
import slider3 from "@/assets/slider-3.jpeg";
import slider4 from "@/assets/slider-4.jpeg";

const photos = [
  { src: slider1, alt: "Nature photo 1" },
  { src: slider2, alt: "Nature photo 2" },
  { src: slider3, alt: "Aesthetic photo 1" },
  { src: slider4, alt: "Aesthetic photo 2" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0">
        <GradientBackground
          color1="#4b0082"
          color2="#1a1a2e"
          color3="#0d0d1a"
          timeSpeed={0.2}
          warpStrength={1}
          warpFrequency={4}
          warpSpeed={0.2}
          warpAmplitude={6}
          rotationAmount={300}
          grainAmount={0.02}
          saturation={1.3}
          contrast={1.1}
          zoom={1}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="section-container px-4 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-foreground mb-1">Gallery</h1>
            <p className="text-muted-foreground mb-10">Nature & Aesthetics</p>
          </motion.div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
