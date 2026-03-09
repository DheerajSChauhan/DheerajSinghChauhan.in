import { motion } from "framer-motion";
import { Code2, GraduationCap, MapPin, Mail, Phone, Link as LinkIcon } from "lucide-react";

const OverviewSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="section-container px-4 py-6 border-t border-border"
    >
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Overview</h2>
      <div className="space-y-2.5">
        <div className="info-row">
          <Code2 className="w-4 h-4 shrink-0" />
          <span>Frontend Developer</span>
        </div>
        <div className="info-row">
          <GraduationCap className="w-4 h-4 shrink-0" />
          <span>B.Tech CS @ Vellore Institute of Technology (2026)</span>
        </div>
        <div className="info-row">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>Nainital, India</span>
        </div>
        <div className="info-row">
          <Phone className="w-4 h-4 shrink-0" />
          <a href="tel:+918630003996" className="link-highlight">+91 8630003996</a>
        </div>
        <div className="info-row">
          <Mail className="w-4 h-4 shrink-0" />
          <a href="mailto:dheerajsinghchauhan2004@gmail.com" className="link-highlight">dheerajsinghchauhan2004@gmail.com</a>
        </div>
        <div className="info-row">
          <LinkIcon className="w-4 h-4 shrink-0" />
          <a href="https://github.com/DheerajSChauhan" target="_blank" rel="noopener noreferrer" className="link-highlight">github.com/DheerajSChauhan</a>
        </div>
      </div>
    </motion.section>
  );
};

export default OverviewSection;