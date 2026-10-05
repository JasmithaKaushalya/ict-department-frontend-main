import { Eye, Pencil, Trash2 } from "lucide-react";
import Card from "../../../common/ui/Card";

function StaffTable({ staff, onView, onEdit, onDelete }) {
  if (staff.length === 0) {
    return (
      <Card>
        <p className="text-center text-gray-500 py-12">
          No staff members match your search.
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
                Photo
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Designation
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Phone
              </th>
              <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {staff.map((member) => {
              // Ensure we fallback gracefully
              const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                member.displayName || member.name
              )}&background=eff6ff&color=1d4ed8&size=128`;
              const imageUrl = member.photo || defaultAvatar;

              return (
                <tr
                  key={member.email}
                  className="border-b last:border-0 hover:bg-gray-50"
                >
                  <td className="p-3">
                    <img
                      src={imageUrl}
                      alt={member.displayName}
                      className="h-9 w-9 rounded-full object-cover border border-gray-200"
                    />
                  </td>
                  <td className="p-3 text-sm font-medium text-gray-900">
                    {/* Render Full Display Name instead of raw name */}
                    {member.displayName}
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    {member.designation}
                  </td>
                  <td className="p-3 text-sm text-gray-600">{member.email}</td>
                  <td className="p-3 text-sm text-gray-600">
                    {member.phone || "—"}
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onView(member)}
                        className="text-gray-400 hover:text-blue-700"
                        title="View"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onEdit(member)}
                        className="text-gray-400 hover:text-blue-700"
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDelete(member)}
                        className="text-gray-400 hover:text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default StaffTable;