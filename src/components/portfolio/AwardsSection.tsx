import { motion } from "framer-motion";
import ShowMoreWrapper from "./ShowMoreWrapper";

interface Achievement {
  title: string;
  detail: string;
}

const achievements: Achievement[] = [
  {
    title: "Hacktoberfest 2025",
    detail: "Contributed to 7+ open-source repositories",
  },
  {
    title: "Hack The Box Cyber Apocalypse CTF",
    detail: "75th Global Rank",
  },
  {
    title: "Event Management",
    detail: "Freelancing Club (2024) – Coordinated the Freelance Arena event",
  },
];

const AchievementCard = ({ a }: { a: Achievement }) => (
  <div className="experience-card">
    <h3 className="text-sm font-semibold text-foreground">{a.title}</h3>
    <p className="text-xs text-muted-foreground mt-1">{a.detail}</p>
  </div>
);

const AwardsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="awards"
      className="section-container px-4 py-6 border-t border-border"
    >
      <h2 className="text-lg font-semibold text-foreground mb-5">Achievements</h2>
      <div className="space-y-3">
        <ShowMoreWrapper
          initialCount={3}
          items={achievements.map((a) => (
            <AchievementCard key={a.title} a={a} />
          ))}
        />
      </div>
    </motion.section>
  );
};

export default AwardsSection;