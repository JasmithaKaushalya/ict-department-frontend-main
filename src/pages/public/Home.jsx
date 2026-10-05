import AboutPreview from "../../components/pages/public/home/AboutPreview";
import CTASection from "../../components/pages/public/home/CTASection";
import FeaturedCourses from "../../components/pages/public/home/FeaturedCourses";
import Hero from "../../components/pages/public/home/Hero";
import LatestNews from "../../components/pages/public/home/LatestNews";
import Statistics from "../../components/pages/public/home/Statistics";
import PublicLayout from "../../layouts/PublicLayout";

const Home = () => {
  return (
    <PublicLayout>
      <Hero />

      <AboutPreview />

      <Statistics />

      <LatestNews />

      <FeaturedCourses />
    </PublicLayout>
  );
};

export default Home;
