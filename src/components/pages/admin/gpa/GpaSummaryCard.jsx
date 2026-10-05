import Card from "../../../common/ui/Card";
import { getPerformanceCategory } from "../../../utils/gpaCalculator";

const categoryColors = {
  Excellent: "bg-green-500",
  Good: "bg-blue-500",
  Average: "bg-yellow-500",
  Probation: "bg-red-500",
};

function GpaSummaryCard({ students }) {
  const withGpa = students.filter((s) => s.semesterGPA > 0);

  const distribution = ["Excellent", "Good", "Average", "Probation"].map((category) => {
    const count = withGpa.filter((s) => getPerformanceCategory(s.semesterGPA) === category).length;
    const percent = withGpa.length ? Math.round((count / withGpa.length) * 100) : 0;
    return { category, count, percent };
  });

  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Student Performance Distribution
      </h2>

      <div className="space-y-4">
        {distribution.map((item) => (
          <div key={item.category}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">{item.category}</span>
              <span className="text-gray-500">{item.count} Students</span>
            </div>
            <div className="h-2.5 rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full ${categoryColors[item.category]}`}
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default GpaSummaryCard;