import { Trash2 } from "lucide-react";
import Card from "../../../common/ui/Card";
import GradeBadge from "./GradeBadge";

function SavedResultsTable({ results, onDelete }) {
  if (results.length === 0) {
    return (
      <Card>
        <p className="text-center text-gray-500 py-12">
          No saved results found for this subject in the database.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Enrollment No
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Student Name
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Marks
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Grade
              </th>
              <th className="text-center p-3 text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr
                key={result.enrollmentNumber}
                className="border-b last:border-0 hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 text-sm font-medium text-blue-700">
                  {result.enrollmentNumber}
                </td>
                <td className="p-3 text-sm text-gray-900">
                  {result.studentName}
                </td>
                <td className="p-3 text-sm text-gray-900">{result.marks}</td>
                <td className="p-3">
                  <GradeBadge grade={result.grade} />
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => onDelete(result.enrollmentNumber)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete Result"
                  >
                    <Trash2 className="h-4 w-4 mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default SavedResultsTable;
