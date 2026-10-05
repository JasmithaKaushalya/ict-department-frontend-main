import SectionTitle from "../../../common/SectionTitle";
import CourseCard from "../../../common/cards/CourseCard";
import degree from "../../../../data/courses/degree";

function FeaturedCourses() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Programs" subtitle="Featured Acadamic Programs" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-8 mt-14">

            <CourseCard
              key={degree.id}
              title={degree.title}
              duration={degree.duration}
              description={degree.description}
            />
     
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
