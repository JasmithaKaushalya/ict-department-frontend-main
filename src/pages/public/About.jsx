import PublicLayout from "../../layouts/PublicLayout";
import AboutHero from "../../components/pages/public/about/AboutHero";
import WhoWeAre from "../../components/pages/public/about/WhoWeAre";
import MissionVision from "../../components/pages/public/about/MissionVision";
import WhyChooseUs from "../../components/pages/public/about/WhyChooseUs";
import DepartmentTimeline from "../../components/pages/public/about/DepartmentTimeline";
import CTASection from "../../components/pages/public/home/CTASection";

function About() {
  return (
    <PublicLayout>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhyChooseUs />
      <DepartmentTimeline />
      <CTASection />
    </PublicLayout>
  );
}

export default About;
