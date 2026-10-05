import Card from "../../../common/ui/Card";
import gradePoints from "../../../utils/gpaCalculator";

function GradePointTable() {
  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-900">GPA Formula</h2>

      <div className="mt-4 rounded-lg bg-slate-50 p-4 text-center">
        <p className="font-semibold text-gray-800">Semester GPA</p>
        <p className="mt-2 text-sm text-gray-600">
          Σ (Grade Point × Credit)
          <br />
          <span className="inline-block border-t border-gray-400 mt-1 pt-1">
            Total Credits
          </span>
        </p>
      </div>

      <p className="mt-5 text-sm font-semibold text-gray-700">Grade Scale</p>
      <div className="mt-2 grid grid-cols-3 gap-y-1 text-xs text-gray-600">
        {Object.entries(gradePoints).map(([grade, point]) => (
          <div key={grade} className="flex justify-between pr-3">
            <span>{grade}</span>
            <span className="font-medium">{point.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default GradePointTable;
