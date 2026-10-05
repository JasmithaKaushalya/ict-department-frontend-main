import Card from "../../../common/ui/Card";
import MarksRow from "./MarksRow";

function StudentMarksTable({ results, onMarksChange, errors }) {
  if (results.length === 0) {
    return (
      <Card>
        <p className="text-center text-gray-500 py-12">
          No students match your search.
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
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <MarksRow
                key={result.enrollmentNumber}
                result={result}
                onMarksChange={onMarksChange}
                error={errors[result.enrollmentNumber]}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default StudentMarksTable;
