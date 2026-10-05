import Card from "../../../common/ui/Card";

function ResultsTable({ results }) {
  if (results.length === 0) {
    return (
      <Card>
        <p className="text-center text-gray-500 py-8">
          No subjects match your search.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase">
                Code
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase">
                Subject
              </th>
              <th className="text-center p-4 text-sm font-medium text-gray-500 uppercase">
                Credits
              </th>
              <th className="text-center p-4 text-sm font-medium text-gray-500 uppercase">
                Grade
              </th>
              <th className="text-center p-4 text-sm font-medium text-gray-500 uppercase">
                Grade Point
              </th>
              <th className="text-center p-4 text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {results.map((subject) => (
              <tr key={subject.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-blue-700">
                  {subject.code}
                </td>
                <td className="p-4 font-medium text-gray-900">
                  {subject.subject}
                </td>
                <td className="text-center text-gray-600">{subject.credits}</td>
                <td className="text-center font-semibold text-gray-900">
                  {subject.grade}
                </td>
                <td className="text-center text-gray-600">
                  {subject.gradePoint}
                </td>
                <td className="text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      subject.status === "Pass"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {subject.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default ResultsTable;
