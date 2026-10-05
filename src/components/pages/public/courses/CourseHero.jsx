import Badge from "../../../common/Badge";
import degree from "../../../../data/courses/degree";

function CourseHero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-sky-500 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <Badge>Our Programme</Badge>

        <h1 className="mt-6 text-4xl lg:text-5xl font-bold">{degree.title}</h1>

        <p className="mt-6 text-blue-100 text-lg">
          {degree.duration} · {degree.credits} · {degree.faculty}
        </p>
      </div>
    </section>
  );
}

export default CourseHero;
