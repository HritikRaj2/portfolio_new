import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/ui/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AlliancesSection from "@/components/sections/AlliancesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AlliancesSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
