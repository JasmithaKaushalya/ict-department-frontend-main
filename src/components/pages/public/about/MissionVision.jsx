import Card from "../../../common/ui/Card";
import SectionTitle from "../../../common/SectionTitle";

const items = [
  {
    id: 1,
    title: "Mission",
    text: "To provide quality ICT education that equips students with the technical skills and innovative mindset needed to solve real-world problems.",
  },
  {
    id: 2,
    title: "Vision",
    text: "To become a leading ICT department recognized for excellence in teaching, research, and industry collaboration.",
  },
  {
    id: 3,
    title: "Core Values",
    text: "Innovation, Integrity, Collaboration, and Excellence guide everything we do, from the classroom to the research lab.",
  },
];

function MissionVision() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="What Drives Us"
          subtitle="Mission, Vision & Values"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {items.map((item) => (
            <Card key={item.id}>
              <h3 className="text-xl font-bold text-blue-700">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-7">
                {item.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;