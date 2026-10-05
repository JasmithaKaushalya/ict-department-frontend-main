import SectionTitle from "../../../common/SectionTitle";
import timeline from "../../../../data/about/timeline";

function DepartmentTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle title="Our Journey" subtitle="Department Timeline" />

        <div className="mt-14 relative border-l-2 border-blue-200 pl-8 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-blue-700 border-4 border-white shadow" />
              <p className="text-blue-700 font-bold text-lg">{item.year}</p>
              <p className="mt-1 text-gray-700">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DepartmentTimeline;
