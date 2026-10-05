import Card from "../ui/Card";

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500">{stat.title}</p>

          <h2 className="mt-3 text-3xl font-bold">{stat.value}</h2>
        </div>

        <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center">
          <Icon className="h-7 w-7 text-blue-700" />
        </div>
      </div>
    </Card>
  );
}

export default StatCard;
