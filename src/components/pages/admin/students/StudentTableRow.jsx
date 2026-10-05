import { Eye, Pencil, Trash2 } from "lucide-react";

function StudentTableRow({ student, onView, onEdit, onDelete }) {
  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    student.fullName,
  )}&background=eff6ff&color=1d4ed8&size=128`;

  const imageUrl = student.profilePicture
    ? student.profilePicture.startsWith("http")
      ? student.profilePicture
      : `http://localhost:8081${student.profilePicture}`
    : defaultAvatar;

  return (
    <tr className="border-b last:border-0 hover:bg-gray-50">
      <td className="p-3">
        <img
          src={imageUrl}
          alt={student.fullName}
          className="h-9 w-9 rounded-full object-cover border border-gray-200"
        />
      </td>
      <td className="p-3 text-sm text-gray-600">{student.enrollmentNumber}</td>
      <td className="p-3 text-sm font-medium text-gray-900">
        {student.fullName}
      </td>
      <td className="p-3 text-sm text-gray-600">{student.email}</td>
      <td className="p-3 text-sm text-gray-600">{student.batchName}</td>
      <td className="p-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onView(student)}
            className="text-gray-400 hover:text-blue-700"
            title="View"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={() => onEdit(student)}
            className="text-gray-400 hover:text-blue-700"
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(student)}
            className="text-gray-400 hover:text-red-600"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default StudentTableRow;
