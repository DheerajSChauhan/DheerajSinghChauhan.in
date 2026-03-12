import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="about"
      className="section-container px-4 py-6 border-t border-border"
    >
      <h2 className="text-lg font-semibold text-foreground mb-4">About</h2>
      <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc list-inside">
        <li>
          <strong className="text-foreground">Frontend Developer</strong> and B.Tech Computer Science student at VIT Bhopal, passionate about building responsive, user-centric web applications.
        </li>
        <li>
          Skilled in <strong className="text-foreground">React.js</strong>, <strong className="text-foreground">Next.js</strong>, <strong className="text-foreground">TypeScript</strong>, and <strong className="text-foreground">Tailwind CSS</strong>; focused on delivering high-quality UI/UX with performance optimizations.
        </li>
        <li>
          Built <strong className="text-foreground">CollabSphere</strong>, a student collaboration platform with 15+ reusable components and RESTful APIs, reducing onboarding bounce rate by 30%.
        </li>
        <li>
          Built <strong className="text-foreground">NoteNest</strong>, a full-stack note-taking app with real-time syncing, rich-text editing, and secure authentication.
        </li>
        <li>
          Contributed to <strong className="text-foreground">7+ open-source repositories</strong> during Hacktoberfest 2025 and secured 75th Global Rank in Hack The Box Cyber Apocalypse CTF.
        </li>
      </ul>
    </motion.section>
  );
};

export default AboutSection;