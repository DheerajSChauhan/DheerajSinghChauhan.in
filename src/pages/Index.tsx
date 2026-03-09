import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import OverviewSection from "@/components/portfolio/OverviewSection";
import SocialLinks from "@/components/portfolio/SocialLinks";
import AboutSection from "@/components/portfolio/AboutSection";
import TechStack from "@/components/portfolio/TechStack";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AwardsSection from "@/components/portfolio/AwardsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import Footer from "@/components/portfolio/Footer";
import GradientBackground from "@/components/portfolio/GradientBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* WebGL Gradient Background */}
      <div className="fixed inset-0 z-0">
        <GradientBackground
          color1="#4b0082"
          color2="#1a1a2e"
          color3="#0d0d1a"
          timeSpeed={0.2}
          warpStrength={1}
          warpFrequency={4}
          warpSpeed={0.2}
          warpAmplitude={6}
          rotationAmount={300}
          grainAmount={0.02}
          saturation={1.3}
          contrast={1.1}
          zoom={1}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="relative z-10">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <SocialLinks />
        <AboutSection />
        <TechStack />
        <ExperienceSection />
        <ProjectsSection />
        <AwardsSection />
        <EducationSection />
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default Index;