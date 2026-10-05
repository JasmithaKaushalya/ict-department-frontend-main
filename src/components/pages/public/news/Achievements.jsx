import * as LucideIcons from "lucide-react";
import SectionTitle from "../../../common/SectionTitle";
import Card from "../../../common/ui/Card";
import achievements from "../../../../data/news/achievements";

function Achievements() {
  return (
    <section className="relative overflow-hidden py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Department Achievements"
          subtitle="What We're Proud Of"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">
          {achievements.map((item, index) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Award;

            return (
              <Card key={index} className="text-center h-full">
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100">
                  {Icon && <Icon className="h-7 w-7 text-blue-700" />}
                </div>

                <h3 className="mt-5 font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
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

export default Achievements;
