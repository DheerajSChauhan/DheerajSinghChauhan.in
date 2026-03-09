import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ShowMoreWrapper from "./ShowMoreWrapper";

interface Project {
  name: string;
  period: string;
  url: string;
  description?: string;
  highlights?: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    name: "CollabSphere",
    period: "2024",
    url: "https://github.com/DheerajSChauhan",
    description: "Student collaboration platform for faster team formation with 15+ reusable components and RESTful APIs.",
    highlights: [
      "Engineered 15+ reusable, responsive UI components with ReactJS and CSS",
      "Built RESTful APIs with Node.js and Express for auth, profiles, and teams",
      "Reduced onboarding bounce rate by 30% with optimized user flows",
      "Implemented Passport.js for secure authentication",
      "Achieved 30+ project listings within first two weeks of testing",
    ],
    tags: ["React.js", "CSS", "JavaScript", "MongoDB", "Node.js", "Passport.js"],
  },
  {
    name: "NoteNest",
    period: "2023",
    url: "https://notenest-note.vercel.app/",
    description: "Full-stack note-taking app with markdown, media uploads, and real-time syncing.",
    highlights: [
      "Built with Next.js and Tailwind CSS for high performance and accessibility",
      "Clerk Authentication with JWT-based secure routing",
      "Rich-text editing with Tiptap, improving engagement by 40%",
      "Convex integration for real-time syncing with 300ms latency",
    ],
    tags: ["Next.js", "Tailwind CSS", "Convex", "Clerk", "Tiptap"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="experience-card block group hover:border-foreground/20 transition-colors"
  >
    <div className="flex items-start justify-between gap-2 mb-2">
      <h3 className="text-sm font-semibold text-foreground group-hover:underline">{project.name}</h3>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
    {project.description && (
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
    )}
    {project.highlights && (
      <ul className="text-xs text-muted-foreground space-y-1 mb-3 list-disc list-inside">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    )}
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((tag) => (
        <span key={tag} className="tag-pill">{tag}</span>
      ))}
    </div>
  </a>
);

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-container px-4 py-6 border-t border-border"
    >
      <h2 className="text-lg font-semibold text-foreground mb-5">Projects</h2>
      <div className="space-y-4">
        <ShowMoreWrapper
          initialCount={3}
          items={projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        />
      </div>
    </motion.section>
  );
};

export default ProjectsSection;