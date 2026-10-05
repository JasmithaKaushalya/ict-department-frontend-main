import Button from "../../../common/ui/Button";
import degree from "../../../../data/courses/degree";

function DegreeOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
          {degree.university}
        </p>

        <p className="mt-6 text-gray-600 leading-8">{degree.description}</p>

        <Button to="/contact" className="mt-8">
          Apply Now
        </Button>
      </div>
    </section>
  );
}

export default DegreeOverview;
