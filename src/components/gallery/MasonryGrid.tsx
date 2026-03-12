import { motion } from "framer-motion";
import { Expand } from "lucide-react";

interface MasonryGridProps {
  images: { src: string; alt: string }[];
  onImageClick: (index: number) => void;
}

const MasonryGrid = ({ images, onImageClick }: MasonryGridProps) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 sm:gap-3 space-y-2 sm:space-y-3">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="break-inside-avoid group relative cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full rounded-lg border border-border transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            draggable={false}
          />
          <div className="absolute inset-0 rounded-lg bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center">
            <Expand className="w-6 h-6 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;
