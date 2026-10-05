import SectionTitle from "../../../common/SectionTitle";

const steps = [
  "100 Level",
  "200 Level",
  "Students Apply",
  "Preference Selection",
  "CGPA Considered (if demand exceeds capacity)",
  "Software Technology  OR  Business Intelligence",
  "Industrial Training",
  "Capstone Project",
  "Graduate",
];

function SelectionProcess() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6">
        <SectionTitle
          title="Specialization Selection Process"
          subtitle="From Enrollment to Graduation"
        />

        <div className="mt-14 relative border-l-2 border-blue-200 pl-8 space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-blue-700 border-4 border-white shadow" />
              <p className="text-gray-800 font-medium">{step}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-500 text-center leading-6">
          If one specialization receives significantly more applications,
          students are selected based on CGPA in accordance with the
          department's specialization allocation policy.
        </p>
      </div>
    </section>
  );
}

export default SelectionProcess;
