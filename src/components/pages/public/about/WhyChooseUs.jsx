import * as LucideIcons from "lucide-react";
import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";
import whyChooseUsData from "../../../../data/about/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Why Choose ICT?"
          subtitle="What Sets Us Apart"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {whyChooseUsData.map((item) => {
            const Icon = LucideIcons[item.icon];

            return (
              <Card key={item.id}>
                <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-blue-50">
                  {Icon && <Icon className="h-7 w-7 text-blue-700" />}
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;