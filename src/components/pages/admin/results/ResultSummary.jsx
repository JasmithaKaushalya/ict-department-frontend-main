import Card from "../../../common/ui/Card";

function Row({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
}

function ResultSummary({ course, batch, results }) {
  const entered = results.filter((r) => r.marks !== "").length;
  const pending = results.length - entered;

  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Summary</h2>

      {!course ? (
        <p className="text-sm text-gray-400">Load students to see a summary.</p>
      ) : (
        <div>
          <p className="font-semibold text-gray-900">{course.subjectName}</p>
          <p className="text-sm text-blue-700">{course.subjectCode}</p>

          <div className="mt-4">
            <Row label="Credits" value={course.creditHours} />
            <Row label="Batch" value={batch} />
            <Row label="Students Loaded" value={results.length} />
            <Row label="Results Entered" value={entered} />
            <Row label="Pending" value={pending} />
          </div>
        </div>
      )}
    </Card>
  );
}

export default ResultSummary;
