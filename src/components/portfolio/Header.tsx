import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Sun, Moon } from "lucide-react";
import CommandPalette from "./CommandPalette";
import EyeFollowButton from "./EyeFollowButton";
import { useTheme } from "@/hooks/use-theme";

const Header = () => {
  const [cmdOpen, setCmdOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isGallery = location.pathname === "/gallery";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="section-container flex items-center justify-between py-3 px-4">
          <nav className="flex items-center gap-5">
            <a href="/" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">Home</a>
            {!isGallery && (
              <>
                <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                <a href="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
              </>
            )}
          </nav>

          <div className="flex items-center gap-2">
            {/* Resume eye-follow button */}
            <EyeFollowButton label="Resume" href="/Dheeraj_Singh_Chauhan_Resume.pdf" download="Dheeraj_Singh_Chauhan_Resume.pdf" />

            {/* Search trigger */}
            <button
              onClick={() => setCmdOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-accent transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/DheerajSChauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-accent transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-md border border-border w-8 h-8 text-muted-foreground hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
    </>
  );
};

export default Header;