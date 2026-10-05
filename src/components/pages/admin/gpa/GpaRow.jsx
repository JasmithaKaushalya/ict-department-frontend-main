import { Eye } from "lucide-react";

function GpaRow({ student, onView }) {
  return (
    <tr className="border-b last:border-0 hover:bg-gray-50">
      <td className="p-3 text-sm font-medium text-blue-700">{student.enrollmentNumber}</td>
      <td className="p-3 text-sm text-gray-900">{student.fullName}</td>
      <td className="p-3 text-sm font-semibold text-gray-900">
        {student.semesterGPA > 0 ? student.semesterGPA.toFixed(2) : "—"}
      </td>
      <td className="p-3 text-sm text-gray-700">
        {student.cgpa > 0 ? student.cgpa.toFixed(2) : "—"}
      </td>
      <td className="p-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            student.semesterGPA > 0
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {student.semesterGPA > 0 ? "Calculated" : "Pending"}
        </span>
      </td>
      <td className="p-3">
        <button
          onClick={() => onView(student)}
          className="flex items-center gap-1 text-gray-400 hover:text-blue-700 text-sm"
        >
          <Eye className="h-4 w-4" /> View
        </button>
      </td>
    </tr>
  );
}

export default GpaRow;