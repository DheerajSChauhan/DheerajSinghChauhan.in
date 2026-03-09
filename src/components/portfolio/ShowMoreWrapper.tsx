import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ShowMoreWrapperProps {
  items: React.ReactNode[];
  initialCount?: number;
}

const ShowMoreWrapper = ({ items, initialCount = 3 }: ShowMoreWrapperProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > initialCount;
  const visible = expanded ? items : items.slice(0, initialCount);

  return (
    <>
      <AnimatePresence initial={false}>
        {visible.map((item, i) => (
          <motion.div
            key={i}
            initial={i >= initialCount ? { opacity: 0, height: 0 } : false}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {item}
          </motion.div>
        ))}
      </AnimatePresence>

      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group inline-flex items-center gap-1.5 px-5 py-2 rounded-full
                       bg-foreground/10 backdrop-blur-xl border border-foreground/10
                       text-sm font-medium text-foreground
                       shadow-lg shadow-black/5
                       hover:bg-foreground/15 hover:shadow-xl hover:shadow-black/10
                       active:scale-95
                       transition-all duration-300 ease-out"
          >
            {expanded ? "Show Less" : "Show More"}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default ShowMoreWrapper;