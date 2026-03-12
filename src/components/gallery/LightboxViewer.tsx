import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Play,
  Pause,
  X,
} from "lucide-react";

interface LightboxViewerProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onIndexChange: (index: number) => void;
}

const LightboxViewer = ({
  images,
  currentIndex,
  open,
  onOpenChange,
  onIndexChange,
}: LightboxViewerProps) => {
  const [zoom, setZoom] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);

  const goNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  const goPrev = useCallback(() => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  // Reset zoom on image change
  useEffect(() => {
    setZoom(1);
  }, [currentIndex]);

  // Reset auto-play on close
  useEffect(() => {
    if (!open) {
      setAutoPlay(false);
      setZoom(1);
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, goNext, goPrev, onOpenChange]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || !open) return;
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, [autoPlay, open, goNext]);

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-border bg-background/95 backdrop-blur-md overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">
          {currentImage.alt} - Image {currentIndex + 1} of {images.length}
        </DialogTitle>

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-background/80 to-transparent">
          <span className="text-sm font-mono text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => setZoom((z) => Math.min(z + 0.5, 4))}
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => setZoom((z) => Math.max(z - 0.5, 0.5))}
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => setZoom(1)}
              title="Reset view"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => setAutoPlay((p) => !p)}
              title={autoPlay ? "Pause slideshow" : "Start slideshow"}
            >
              {autoPlay ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => onOpenChange(false)}
              title="Close"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Image area */}
        <div className="relative flex items-center justify-center min-h-[60vh] max-h-[95vh] overflow-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={currentImage.src}
              alt={currentImage.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-full max-h-[85vh] object-contain select-none"
              style={{ transform: `scale(${zoom})`, transition: "transform 0.2s ease" }}
              draggable={false}
            />
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/60 text-foreground hover:bg-background/80"
              onClick={goPrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/60 text-foreground hover:bg-background/80"
              onClick={goNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LightboxViewer;
