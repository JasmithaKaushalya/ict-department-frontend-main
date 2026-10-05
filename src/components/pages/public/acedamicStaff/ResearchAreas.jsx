import SectionTitle from "../../../common/SectionTitle";

function ResearchAreas({ areas = [] }) {
  // Hide the section entirely if no staff members have added research interests yet
  if (!areas || areas.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Research Interests"
          subtitle="Areas Our Staff Specialize In"
        />

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {areas.map((area, index) => (
            <span
              key={index}
              className="px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-700 font-medium text-sm shadow-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchAreas;