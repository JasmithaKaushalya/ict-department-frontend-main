import Card from "../../../common/ui/Card";

function GpaStatistics({ students }) {
  const gpas = students.map((s) => s.semesterGPA).filter((g) => g > 0);

  const stats = [
    { label: "Students", value: students.length },
    { label: "Highest GPA", value: gpas.length ? Math.max(...gpas).toFixed(2) : "—" },
    {
      label: "Average GPA",
      value: gpas.length
        ? (gpas.reduce((sum, g) => sum + g, 0) / gpas.length).toFixed(2)
        : "—",
    },
    { label: "Lowest GPA", value: gpas.length ? Math.min(...gpas).toFixed(2) : "—" },
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

export default GpaStatistics;