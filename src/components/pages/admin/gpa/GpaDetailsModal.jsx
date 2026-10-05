import { X } from "lucide-react";
import GradeBadge from "../results/GradeBadge";
import { getGradePoint } from "../../../utils/gpaCalculator";

function GpaDetailsModal({ student, onClose }) {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">{student.fullName}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>Enrollment: {student.enrollmentNumber}</span>
          <span>Semester {student.semester}</span>
        </div>

        <div className="border-t border-gray-100">
          {student.modules.map((mod) => (
            <div
              key={mod.code}
              className="flex items-center justify-between py-3 border-b border-gray-100"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{mod.code}</p>
                <p className="text-xs text-gray-500">{mod.credits} Credits</p>
              </div>
              <div className="flex items-center gap-3">
                <GradeBadge grade={mod.grade} />
                <span className="text-sm text-gray-600 w-10 text-right">
                  {getGradePoint(mod.grade).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-blue-50 p-4 text-center">
            <p className="text-2xl font-bold text-blue-700">
              {student.semesterGPA.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Semester GPA</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">
              {student.cgpa.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Current CGPA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GpaDetailsModal;