import Card from "../../../common/ui/Card";

function BatchStatistics({ batches }) {
  const stats = [
    { label: "Total Batches", value: batches.length },
    { label: "Active", value: batches.filter((b) => b.status === "Active").length },
    { label: "Upcoming", value: batches.filter((b) => b.status === "Upcoming").length },
    { label: "Completed", value: batches.filter((b) => b.status === "Completed").length },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center py-4">
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
}

export default BatchStatistics;