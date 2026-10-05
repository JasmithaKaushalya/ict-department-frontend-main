import { X } from "lucide-react";

function Row({ label, value }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value || "—"}</span>
    </div>
  );
}

function StudentDetailsModal({ student, onClose }) {
  if (!student) return null;

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    student.fullName,
  )}&background=eff6ff&color=1d4ed8&size=256`;

  const imageUrl = student.profilePicture
    ? student.profilePicture.startsWith("http")
      ? student.profilePicture
      : `http://localhost:8081${student.profilePicture}`
    : defaultAvatar;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Student Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={imageUrl}
            alt={student.fullName}
            className="h-16 w-16 rounded-full object-cover border-4 border-blue-100 bg-white"
          />
          <div>
            <p className="font-bold text-gray-900">{student.fullName}</p>
          </div>
        </div>

        <div>
          <Row label="Name with Initials" value={student.nameWithInitials} />
          <Row label="Enrollment Number" value={student.enrollmentNumber} />
          <Row label="Email" value={student.email} />
          <Row label="Batch" value={student.batchName} />
          <Row label="Role" value={student.role} />
        </div>

        <p className="mt-6 text-xs text-gray-400 text-center">
          Semester GPA, CGPA, and Results will appear here once connected to the
          backend.
        </p>
      </div>
    </div>
  );
}

export default StudentDetailsModal;
