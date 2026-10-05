import Card from "../../../common/ui/Card";

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
}

function AcademicSummary({ summary }) {
  if (!summary) return null;

  return (
    <Card>
      <h2 className="text-xl font-bold mb-6 text-gray-900">Academic Summary</h2>

      <div className="space-y-4">
        <SummaryRow label="Highest GPA" value={summary.highestGPA} />
        <SummaryRow label="Lowest GPA" value={summary.lowestGPA} />
        <SummaryRow
          label="Completed Credits"
          value={summary.completedCredits}
        />
        <SummaryRow
          label="Remaining Credits"
          value={summary.remainingCredits}
        />

        <div className="pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-gray-700">Degree Progress</span>
            <span className="text-blue-700">{summary.degreeProgress}%</span>
          </div>

          <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#0F4C81] transition-all duration-1000"
              style={{ width: `${summary.degreeProgress}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AcademicSummary;
