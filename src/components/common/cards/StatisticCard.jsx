import * as LucideIcons from "lucide-react";


function StatisticCard({ number, title, icon }) {
  const Icon = LucideIcons[icon];

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
        {Icon && <Icon className="h-7 w-7 text-blue-700" />}
      </div>
      <h2 className="text-4xl font-bold text-blue-700">{number}</h2>

      <p className="mt-3 text-gray-600">{title}</p>
    </div>
  );
}

export default StatisticCard;
