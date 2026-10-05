import SectionTitle from "../../../common/SectionTitle";
import StatisticsData from "../../../../data/statistics";
import StatisticCard from "../../../common/cards/StatisticCard";

function Statistics() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 ">
        <SectionTitle title="Our Department" subtitle="ICT by the numbers" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {StatisticsData.map((item) => (
            <StatisticCard
              key={item.id}
              number={item.number}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
