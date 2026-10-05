import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";
import careers from "../../../../data/courses/careers";

function CareerGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Career Opportunities"
          subtitle="Where Our Graduates Go"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {careers.map((career, index) => (
            <Card key={index} className="text-center py-6">
              <p className="font-semibold text-gray-900">{career}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerGrid;
