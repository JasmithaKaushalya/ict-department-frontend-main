import Card from "../../../common/ui/Card";
import GpaRow from "./GpaRow";

function GpaTable({ students, onView }) {
  if (students.length === 0) {
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
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Enrollment No</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Student Name</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Semester GPA</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">CGPA</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <GpaRow key={student.enrollmentNumber} student={student} onView={onView} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default GpaTable;