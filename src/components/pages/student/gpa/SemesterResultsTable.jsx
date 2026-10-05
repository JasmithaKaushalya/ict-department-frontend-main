import Card from "../../../common/ui/Card";

function SemesterResultsTable({ results }) {
  if (!results || results.length === 0) {
    return (
      <Card>
        <h2 className="text-xl font-bold mb-6">Semester Performance</h2>
        <p className="text-gray-500 text-center py-8">
          No semester results available yet.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="text-xl font-bold mb-6">Semester Performance</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left">
              <th className="pb-3 text-sm font-medium text-gray-500 uppercase">
                Semester
              </th>
              <th className="pb-3 text-sm font-medium text-gray-500 uppercase">
                Credits
              </th>
              <th className="pb-3 text-sm font-medium text-gray-500 uppercase">
                GPA
              </th>
              <th className="pb-3 text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((item) => (
              <tr
                key={item.semester}
                className="border-b last:border-0 hover:bg-gray-50"
              >
                <td className="py-4 font-medium text-gray-900">
                  {item.semester}
                </td>
                <td className="text-gray-600">{item.credits}</td>
                <td className="font-semibold text-blue-700">{item.gpa}</td>
                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.status === "Good Standing"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
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

export default SemesterResultsTable;
