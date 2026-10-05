import Card from "../../../common/ui/Card";

function Row({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b last:border-0">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
}

function PerformanceSummary({ summary }) {
  if (!summary) return null;

  return (
    <Card>
      <h2 className="text-xl font-bold mb-5 text-gray-900">
        Performance Summary
      </h2>

      <div className="space-y-1">
        <Row label="Total Subjects" value={summary.totalSubjects} />
        <Row label="Passed Subjects" value={summary.passedSubjects} />
        <Row label="Failed Subjects" value={summary.failedSubjects} />
        <Row label="Highest Grade" value={summary.highestGrade} />
        <Row label="Lowest Grade" value={summary.lowestGrade} />
        <Row label="Pass Rate" value={summary.passRate} />
      </div>
    </Card>
  );
}

export default PerformanceSummary;
