import Card from "../../../common/ui/Card";
import StudentTableRow from "./StudentTableRow";
import EmptyStudents from "./EmptyStudents";

function StudentsTable({ students, onView, onEdit, onDelete, onRegister }) {
  if (students.length === 0) {
    return (
      <Card>
        <EmptyStudents onRegister={onRegister} />
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
                Photo
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Enrollment No
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Batch
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <StudentTableRow
                key={student.enrollmentNumber}
                student={student}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default StudentsTable;
