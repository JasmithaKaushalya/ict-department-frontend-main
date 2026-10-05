import { CheckCircle2 } from "lucide-react";
import GradeBadge from "./GradeBadge";
import { getGradeFromMarks } from "../../../../data/admin/results/gradeScale";

function MarksRow({ result, onMarksChange, error }) {
  const gradeInfo = getGradeFromMarks(result.marks);

  return (
    <tr className="border-b last:border-0 hover:bg-gray-50 transition-colors">
      <td className="p-3 text-sm font-medium text-blue-700">
        {result.enrollmentNumber}
      </td>
      <td className="p-3 text-sm text-gray-900">{result.studentName}</td>
      <td className="p-3">
        <input
          type="number"
          value={result.marks}
          onChange={(e) =>
            onMarksChange(result.enrollmentNumber, e.target.value)
          }
          min={0}
          max={100}
          className={`w-20 rounded-lg border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 bg-white ${
            error
              ? "border-red-400 focus:ring-red-300"
              : "border-gray-200 focus:ring-blue-500"
          }`}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </td>
      <td className="p-3">
        <GradeBadge grade={gradeInfo?.grade} />
      </td>
      <td className="p-3 text-center">
        {result.marks !== "" && !error && (
          <CheckCircle2 className="h-5 w-5 text-green-600 inline" />
        )}
      </td>
    </tr>
  );
}

export default MarksRow;
