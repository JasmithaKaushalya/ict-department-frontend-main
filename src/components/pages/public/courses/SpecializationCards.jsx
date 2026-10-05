import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";
import specializations from "../../../../data/courses/specializations";

function SpecializationCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Specializations"
          subtitle="Choose Your Path at Level 300"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {specializations.map((spec) => (
            <Card key={spec.id}>
              <div className="text-4xl">{spec.icon}</div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {spec.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">{spec.description}</p>

              <p className="mt-6 font-semibold text-gray-800 text-sm uppercase tracking-wide">
                Core Areas
              </p>
              <ul className="mt-3 space-y-2">
                {spec.coreAreas.map((area, index) => (
                  <li key={index} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-green-600">✓</span>
                    {area}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-semibold text-gray-800 text-sm uppercase tracking-wide">
                Career Paths
              </p>
              <ul className="mt-3 space-y-2">
                {spec.careers.map((career, index) => (
                  <li key={index} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-blue-700">•</span>
                    {career}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecializationCards;
