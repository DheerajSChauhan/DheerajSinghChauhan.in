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
import slider5 from "@/assets/slider-5.jpg";
import slider6 from "@/assets/slider-6.jpg";
import slider7 from "@/assets/slider-7.jpg";
import slider8 from "@/assets/slider-8.jpg";
import slider9 from "@/assets/slider-9.jpg";
import slider10 from "@/assets/slider-10.jpg";
import slider11 from "@/assets/slider-11.jpg";
import slider12 from "@/assets/slider-12.jpg";
import slider13 from "@/assets/slider-13.jpg";
import slider14 from "@/assets/slider-14.jpg";
import slider15 from "@/assets/slider-15.jpg";
import slider16 from "@/assets/slider-16.jpg";
import slider17 from "@/assets/slider-17.jpg";
import slider18 from "@/assets/slider-18.jpg";
import slider19 from "@/assets/slider-19.jpg";
import slider20 from "@/assets/slider-20.jpg";
import slider21 from "@/assets/slider-21.jpg";
import slider22 from "@/assets/slider-22.jpg";
import slider23 from "@/assets/slider-23.jpg";
import slider24 from "@/assets/slider-24.jpg";
import slider25 from "@/assets/slider-25.jpg";
import slider26 from "@/assets/slider-26.jpg";
import slider27 from "@/assets/slider-27.jpg";
// import slider28 from "@/assets/slider-28.jpg";
// import slider29 from "@/assets/slider-29.jpg";
// import slider30 from "@/assets/slider-30.jpg";
// import slider31 from "@/assets/slider-31.jpg";
// import slider32 from "@/assets/slider-32.jpg";
// import slider33 from "@/assets/slider-33.jpg";
// import slider34 from "@/assets/slider-34.jpg";
// import slider35 from "@/assets/slider-35.jpg";
// import slider36 from "@/assets/slider-36.jpg";
// import slider37 from "@/assets/slider-37.jpg";
// import slider38 from "@/assets/slider-38.jpg";
// import slider39 from "@/assets/slider-39.jpg";
// import slider40 from "@/assets/slider-40.jpg";
// import slider41 from "@/assets/slider-41.jpg";
// import slider42 from "@/assets/slider-42.jpg";
// import slider43 from "@/assets/slider-43.jpg";
// import slider44 from "@/assets/slider-44.jpg";
// import slider45 from "@/assets/slider-45.jpg";
// import slider46 from "@/assets/slider-46.jpg";
// import slider47 from "@/assets/slider-47.jpg";
// import slider48 from "@/assets/slider-48.jpg";
// import slider49 from "@/assets/slider-49.jpg";
// import slider50 from "@/assets/slider-50.jpg";
// import slider51 from "@/assets/slider-51.jpg";
// import slider52 from "@/assets/slider-52.jpg";
// import slider53 from "@/assets/slider-53.jpg";
// import slider54 from "@/assets/slider-54.jpg";
// import slider55 from "@/assets/slider-55.jpg";
// import slider56 from "@/assets/slider-56.jpg";
// import slider57 from "@/assets/slider-57.jpg";
// import slider58 from "@/assets/slider-58.jpg";
// import slider59 from "@/assets/slider-59.jpg";
// import slider60 from "@/assets/slider-60.jpg";
// import slider61 from "@/assets/slider-61.jpg";
// import slider62 from "@/assets/slider-62.jpg";
// import slider63 from "@/assets/slider-63.jpg";
// import slider64 from "@/assets/slider-64.jpg";
// import slider65 from "@/assets/slider-65.jpg";
// import slider66 from "@/assets/slider-66.jpg";
// import slider67 from "@/assets/slider-67.jpg";
// import slider68 from "@/assets/slider-68.jpg";
// import slider69 from "@/assets/slider-69.jpg";
// import slider70 from "@/assets/slider-70.jpg";
// import slider71 from "@/assets/slider-71.jpg";
// import slider72 from "@/assets/slider-72.jpg";
// import slider73 from "@/assets/slider-73.jpg";
// import slider74 from "@/assets/slider-74.jpg";
// import slider75 from "@/assets/slider-75.jpg";
// import slider76 from "@/assets/slider-76.jpg";
// import slider77 from "@/assets/slider-77.jpg";
// import slider78 from "@/assets/slider-78.jpg";
// import slider79 from "@/assets/slider-79.jpg";
// import slider80 from "@/assets/slider-80.jpg";
// import slider81 from "@/assets/slider-81.jpg";
// import slider82 from "@/assets/slider-82.jpg";
// import slider83 from "@/assets/slider-83.jpg";
// import slider84 from "@/assets/slider-84.jpg";
// import slider85 from "@/assets/slider-85.jpg";
// import slider86 from "@/assets/slider-86.jpg";
// import slider87 from "@/assets/slider-87.jpg";
// import slider88 from "@/assets/slider-88.jpg";
// import slider89 from "@/assets/slider-89.jpg";
// import slider90 from "@/assets/slider-90.jpg";
// import slider91 from "@/assets/slider-91.jpg";
// import slider92 from "@/assets/slider-92.jpg";
// import slider93 from "@/assets/slider-93.jpg";
// import slider94 from "@/assets/slider-94.jpg";
// import slider95 from "@/assets/slider-95.jpg";
// import slider96 from "@/assets/slider-96.jpg";
// import slider97 from "@/assets/slider-97.jpg";
// import slider98 from "@/assets/slider-98.jpg";
// import slider99 from "@/assets/slider-99.jpg";
// import slider100 from "@/assets/slider-100.jpg";
// import slider101 from "@/assets/slider-101.jpg";
// import slider102 from "@/assets/slider-102.jpg";
// import slider103 from "@/assets/slider-103.jpg";
// import slider104 from "@/assets/slider-104.jpg";
// import slider105 from "@/assets/slider-105.jpg";
// import slider106 from "@/assets/slider-106.jpg";
// import slider107 from "@/assets/slider-107.jpg";
// import slider108 from "@/assets/slider-108.jpg";
// import slider109 from "@/assets/slider-109.jpg";
// import slider110 from "@/assets/slider-110.jpg";
// import slider111 from "@/assets/slider-111.jpg";
// import slider112 from "@/assets/slider-112.jpg";
// import slider113 from "@/assets/slider-113.jpg";
// import slider114 from "@/assets/slider-114.jpg";
// import slider115 from "@/assets/slider-115.jpg";
// import slider116 from "@/assets/slider-116.jpg";


const photos = [
  { src: slider1, alt: "Nature photo 1" },
  { src: slider13, alt: "Moody tones" },
  { src: slider2, alt: "Nature photo 2" },
  { src: slider3, alt: "Aesthetic photo 1" },
  { src: slider14, alt: "nainital lake" },
  { src: slider4, alt: "Aesthetic photo 2" },
  { src: slider5, alt: "Landscape scenery" },
  { src: slider6, alt: "Aesthetic vibes" },
  { src: slider7, alt: "Nature closeup" },
  { src: slider8, alt: "Aesthetic detail" },
  { src: slider9, alt: "Golden hour" },
  { src: slider10, alt: "Forest path" },
  { src: slider11, alt: "Moody tones" },
  { src: slider12, alt: "Forest path" },
  { src: slider15, alt: "Aesthetic photo 3" },
  { src: slider16, alt: "Aesthetic photo 4" },
  { src: slider17, alt: "Aesthetic photo 5" },
  { src: slider18, alt: "Aesthetic photo 6" },
  { src: slider19, alt: "Aesthetic photo 7" },
  { src: slider20, alt: "Aesthetic photo 8" },
  { src: slider27, alt: "Aesthetic photo 15" },
  { src: slider21, alt: "Aesthetic photo 9" },
  { src: slider22, alt: "Aesthetic photo 10" },
  { src: slider23, alt: "Aesthetic photo 11" },
  { src: slider24, alt: "Aesthetic photo 12" },
  { src: slider25, alt: "Aesthetic photo 13" },
  { src: slider26, alt: "Aesthetic photo 14" },
  //{ src: slider28, alt: "Aesthetic photo 16" },
  //{ src: slider29, alt: "Aesthetic photo 17" },
  // { src: slider30, alt: "Aesthetic photo 18" },
  // { src: slider31, alt: "Aesthetic photo 19" },
  // { src: slider32, alt: "Aesthetic photo 20" },
  // { src: slider33, alt: "Aesthetic photo 21" },
  // { src: slider34, alt: "Aesthetic photo 22" },
  // { src: slider35, alt: "Aesthetic photo 23" },
  // { src: slider36, alt: "Aesthetic photo 24" },
  // { src: slider37, alt: "Aesthetic photo 25" },
  // { src: slider38, alt: "Aesthetic photo 26" },
  // { src: slider39, alt: "Aesthetic photo 27" },
  // { src: slider40, alt: "Aesthetic photo 28" },
  // { src: slider41, alt: "Aesthetic photo 29" },
  // { src: slider42, alt: "Aesthetic photo 30" },
  // { src: slider43, alt: "Aesthetic photo 31" },
  // { src: slider44, alt: "Aesthetic photo 32" },
  // { src: slider45, alt: "Aesthetic photo 33" },
  // { src: slider46, alt: "Aesthetic photo 34" },
  // { src: slider47, alt: "Aesthetic photo 35" },
  // { src: slider48, alt: "Aesthetic photo 36" },
  // { src: slider49, alt: "Aesthetic photo 37" },
  // { src: slider50, alt: "Aesthetic photo 38" },
  // { src: slider51, alt: "Aesthetic photo 39" },
  // { src: slider52, alt: "Aesthetic photo 40" },
  // { src: slider53, alt: "Aesthetic photo 41" },
  // { src: slider54, alt: "Aesthetic photo 42" },
  // { src: slider55, alt: "Aesthetic photo 43" },
  // { src: slider56, alt: "Aesthetic photo 44" },
  // { src: slider57, alt: "Aesthetic photo 45" },
  // { src: slider58, alt: "Aesthetic photo 46" },
  // { src: slider59, alt: "Aesthetic photo 47" },
  // { src: slider60, alt: "Aesthetic photo 48" },
  // { src: slider61, alt: "Aesthetic photo 49" },
  // { src: slider62, alt: "Aesthetic photo 50" },
  // { src: slider63, alt: "Aesthetic photo 51" },
  // { src: slider64, alt: "Aesthetic photo 52" },
  // { src: slider65, alt: "Aesthetic photo 53" },
  // { src: slider66, alt: "Aesthetic photo 54" },
  // { src: slider67, alt: "Aesthetic photo 55" },
  // { src: slider68, alt: "Aesthetic photo 56" },
  // { src: slider69, alt: "Aesthetic photo 57" },
  // { src: slider70, alt: "Aesthetic photo 58" },
  // { src: slider71, alt: "Aesthetic photo 59" },
  // { src: slider72, alt: "Aesthetic photo 60" },
  // { src: slider73, alt: "Aesthetic photo 61" },
  // { src: slider74, alt: "Aesthetic photo 62" },
  // { src: slider75, alt: "Aesthetic photo 63" },
  // { src: slider76, alt: "Aesthetic photo 64" },
  // { src: slider77, alt: "Aesthetic photo 65" },
  // { src: slider78, alt: "Aesthetic photo 66" },
  // { src: slider79, alt: "Aesthetic photo 67" },
  // { src: slider80, alt: "Aesthetic photo 68" },
  // { src: slider81, alt: "Aesthetic photo 69" },
  // { src: slider82, alt: "Aesthetic photo 70" },
  // { src: slider83, alt: "Aesthetic photo 71" },
  // { src: slider84, alt: "Aesthetic photo 72" },
  // { src: slider85, alt: "Aesthetic photo 73" },
  // { src: slider86, alt: "Aesthetic photo 74" },
  // { src: slider87, alt: "Aesthetic photo 75" },
  // { src: slider88, alt: "Aesthetic photo 76" },
  // { src: slider89, alt: "Aesthetic photo 77" },
  // { src: slider90, alt: "Aesthetic photo 78" },
  // { src: slider91, alt: "Aesthetic photo 79" },
  // { src: slider92, alt: "Aesthetic photo 80" },
  // { src: slider93, alt: "Aesthetic photo 81" },
  // { src: slider94, alt: "Aesthetic photo 82" },
  // { src: slider95, alt: "Aesthetic photo 83" },
  // { src: slider96, alt: "Aesthetic photo 84" },
  // { src: slider97, alt: "Aesthetic photo 85" },
  // { src: slider98, alt: "Aesthetic photo 86" },
  // { src: slider99, alt: "Aesthetic photo 87" },
  // { src: slider100, alt: "Aesthetic photo 88" },
  // { src: slider101, alt: "Aesthetic photo 89" },
  // { src: slider102, alt: "Aesthetic photo 90" },
  // { src: slider103, alt: "Aesthetic photo 91" },
  // { src: slider104, alt: "Aesthetic photo 92" },
  // { src: slider105, alt: "Aesthetic photo 93" },
  // { src: slider106, alt: "Aesthetic photo 94" },
  // { src: slider107, alt: "Aesthetic photo 95" },
  // { src: slider108, alt: "Aesthetic photo 96" },
  // { src: slider109, alt: "Aesthetic photo 97" },
  // { src: slider110, alt: "Aesthetic photo 98" },
  // { src: slider111, alt: "Aesthetic photo 99" },
  // { src: slider112, alt: "Aesthetic photo 100" },
  // { src: slider113, alt: "Aesthetic photo 101" },
  // { src: slider114, alt: "Aesthetic photo 102" },
  // { src: slider115, alt: "Aesthetic photo 103" },
  // { src: slider116, alt: "Aesthetic photo 104" },
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
