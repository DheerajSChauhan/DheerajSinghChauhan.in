import { motion } from "framer-motion";

interface Education {
  school: string;
  degree: string;
  period: string;
  grade: string;
}

const education: Education[] = [
  {
    school: "Vellore Institute of Technology University, Bhopal",
    degree: "B.Tech in Computer Science",
    period: "2022—2026",
    grade: "CGPA: 8.15",
  },
  {
    school: "Saraswati Academy, Haldwani, Nainital",
    degree: "12th Standard — CBSE",
    period: "2021",
    grade: "86%",
  },
  {
    school: "Saraswati Academy, Haldwani, Nainital",
    degree: "10th Standard — CBSE",
    period: "2019",
    grade: "91%",
  },
];

const EducationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="education"
      className="section-container px-4 py-6 border-t border-border"
    >
      <h2 className="text-lg font-semibold text-foreground mb-5">Education</h2>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.degree + edu.period} className="experience-card">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-sm font-semibold text-foreground">{edu.school}</h3>
              <span className="text-xs text-muted-foreground font-mono shrink-0">{edu.period}</span>
            </div>
            <p className="text-xs text-muted-foreground">{edu.degree}</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">{edu.grade}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationSection;