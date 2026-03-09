import { motion } from "framer-motion";

interface Experience {
  company: string;
  url?: string;
  current?: boolean;
  roles: {
    title: string;
    type: string;
    period: string;
    location?: string;
    skills: string[];
    highlights?: string[];
  }[];
}

const experiences: Experience[] = [
  {
    company: "Formac Software Services Ltd.",
    current: false,
    roles: [
      {
        title: "Frontend Development Intern",
        type: "Internship",
        period: "01.2025—04.2025",
        location: "Raipur, India",
        skills: ["React.js", "HTML", "CSS", "JavaScript"],
        highlights: [
          "Built responsive UI components using React.js, HTML, CSS, and JavaScript",
          "Improved user engagement by 25% through UI/UX enhancements and performance optimizations",
          "Collaborated with cross-functional teams in agile sprints and code reviews",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-container px-4 py-6 border-t border-border"
    >
      <h2 className="text-lg font-semibold text-foreground mb-5">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.company} className="experience-card">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-sm font-semibold text-foreground">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="link-highlight">{exp.company}</a>
                ) : (
                  exp.company
                )}
              </h3>
              {exp.current && (
                <span className="text-[10px] font-medium bg-accent text-accent-foreground px-1.5 py-0.5 rounded">
                  Current
                </span>
              )}
            </div>
            <div className="space-y-4">
              {exp.roles.map((role, i) => (
                <div key={i}>
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm font-medium text-foreground">{role.title}</h4>
                    <span className="text-xs text-muted-foreground font-mono shrink-0">{role.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{role.type}{role.location ? ` · ${role.location}` : ""}</p>
                  {role.highlights && (
                    <ul className="text-xs text-muted-foreground space-y-1 mb-3 list-disc list-inside">
                      {role.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <span key={skill} className="tag-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;