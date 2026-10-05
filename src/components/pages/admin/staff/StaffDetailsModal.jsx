import { X } from "lucide-react";

function StaffDetailsModal({ staff, onClose }) {
  if (!staff) return null;

  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    staff.name,
  )}&background=eff6ff&color=1d4ed8&size=256`;
  const imageUrl = staff.photo || defaultAvatar;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-xl my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Staff Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={imageUrl}
            alt={staff.name}
            className="h-20 w-20 rounded-full object-cover border-4 border-blue-100"
          />
          <div>
            <p className="font-bold text-gray-900">{staff.name}</p>
            <p className="text-sm text-blue-700">{staff.designation}</p>
            <p className="text-xs text-gray-500">{staff.employmentType}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold text-gray-500 uppercase">
            Contact
          </p>
          <p className="mt-1 text-sm text-gray-700">{staff.email}</p>
          {staff.phone && (
            <p className="text-sm text-gray-700">{staff.phone}</p>
          )}
        </div>

        {staff.qualifications.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Qualifications
            </p>
            <ul className="mt-2 space-y-1">
              {staff.qualifications.map((q, i) => (
                <li key={i} className="text-sm text-gray-700">
                  ✓ {q}
                </li>
              ))}
            </ul>
          </div>
        )}

        {staff.research.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Research Interests
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {staff.research.map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StaffDetailsModal;
