import { BookOpen, CheckCircle, XCircle, Percent } from "lucide-react";
import SummaryCard from "../../student/gpa/SummaryCard";

function ResultsStats({ summary }) {
  if (!summary) return null;

  const stats = [
    {
      id: 1,
      title: "Total Subjects",
      value: summary.totalSubjects,
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Passed Subjects",
      value: summary.passedSubjects,
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Failed Subjects",
      value: summary.failedSubjects,
      icon: XCircle,
    },
    { id: 4, title: "Pass Rate", value: summary.passRate, icon: Percent },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <SummaryCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ResultsStats;
