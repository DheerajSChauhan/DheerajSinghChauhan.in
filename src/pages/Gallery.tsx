import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import GradientBackground from "@/components/portfolio/GradientBackground";
import Footer from "@/components/portfolio/Footer";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import LightboxViewer from "@/components/gallery/LightboxViewer";

import slider1 from "@/assets/slider-1.jpeg";
import slider2 from "@/assets/slider-2.jpeg";
import slider3 from "@/assets/slider-3.jpeg";
import slider4 from "@/assets/slider-4.jpeg";

const photos = [
  { src: slider1, alt: "Nature photo 1" },
  { src: slider2, alt: "Nature photo 2" },
  { src: slider3, alt: "Aesthetic photo 1" },
  { src: slider4, alt: "Aesthetic photo 2" },
  { src: slider1, alt: "Landscape scenery" },
  { src: slider3, alt: "Aesthetic vibes" },
  { src: slider2, alt: "Nature closeup" },
  { src: slider4, alt: "Aesthetic detail" },
  { src: slider1, alt: "Golden hour" },
  { src: slider2, alt: "Forest path" },
  { src: slider3, alt: "Moody tones" },
  { src: slider4, alt: "Warm palette" },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

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

        <main className="px-2 sm:px-4 lg:px-6 py-12 max-w-full">
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

          <MasonryGrid images={photos} onImageClick={handleImageClick} />
        </main>

        <Footer />
      </div>

      <LightboxViewer
        images={photos}
        currentIndex={currentIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        onIndexChange={setCurrentIndex}
      />
    </div>
  );
};

export default Gallery;
