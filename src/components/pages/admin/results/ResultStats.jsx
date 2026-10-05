import Card from "../../../common/ui/Card";

function ResultStats({ results }) {
  const withMarks = results.filter((r) => r.marks !== "").map((r) => Number(r.marks));

  const average = withMarks.length
    ? (withMarks.reduce((sum, m) => sum + m, 0) / withMarks.length).toFixed(1)
    : "—";
  const highest = withMarks.length ? Math.max(...withMarks) : "—";
  const lowest = withMarks.length ? Math.min(...withMarks) : "—";
  const passRate = withMarks.length
    ? `${Math.round((withMarks.filter((m) => m >= 40).length / withMarks.length) * 100)}%`
    : "—";

  const stats = [
    { label: "Total Students", value: results.length },
    { label: "Average Marks", value: average },
    { label: "Highest", value: highest },
    { label: "Lowest", value: lowest },
    { label: "Pass Rate", value: passRate },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center py-4">
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
}

export default ResultStats;