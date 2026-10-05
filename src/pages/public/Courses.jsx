import PublicLayout from "../../layouts/PublicLayout"
import CourseHero from "../../components/pages/public/courses/CourseHero";
import DegreeOverview from "../../components/pages/public/courses/DegreeOverview";
import CurriculumAccordion from "../../components/pages/public/courses/CurriculumAccordion";
import SpecializationCards from "../../components/pages/public/courses/SpecializationCards";
import SelectionProcess from "../../components/pages/public/courses/SelectionProcess";
import CareerGrid from "../../components/pages/public/courses/CareerGrid";
import FAQ from "../../components/pages/public/courses/FAQ";
import CTASection from "../../components/pages/public/home/CTASection";

function Courses() {
  return (
    <PublicLayout>
      <CourseHero />
      <DegreeOverview />
      <CurriculumAccordion />
      <SpecializationCards />
      <SelectionProcess />
      <CareerGrid />
      <FAQ />
      <CTASection />
    </PublicLayout>
  );
}

export default Courses;
