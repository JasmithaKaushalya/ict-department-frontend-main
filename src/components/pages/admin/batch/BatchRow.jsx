import { Pencil, Trash2 } from "lucide-react";

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Upcoming: "bg-blue-100 text-blue-700",
  Completed: "bg-gray-100 text-gray-500",
};

function BatchRow({ batch, onView, onEdit, onDelete }) {
  return (
    <tr className="border-b last:border-0 hover:bg-gray-50">
      <td className="p-3">
        <button onClick={() => onView(batch)} className="text-sm font-semibold text-blue-700 hover:underline">
          {batch.batchName} {/* Changed from name */}
        </button>
      </td>
      <td className="p-3 text-sm text-gray-600">BICT</td> {/* Hardcoded as degree isn't in backend response */}
      <td className="p-3 text-sm text-gray-600">{batch.intakeYear}</td>
      <td className="p-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[batch.status] || 'bg-gray-100'}`}>
          {batch.status}
        </span>
      </td>
      <td className="p-3 text-sm text-gray-600">
        {batch.studentCount} {/* Changed from expectedStudents */}
      </td>
      <td className="p-3">
        <div className="flex items-center gap-3">
          <button onClick={() => onEdit(batch)} className="text-gray-400 hover:text-blue-700" title="Edit">
            <Pencil className="h-4 w-4" />
          </button>
          <button onClick={() => onDelete(batch)} className="text-gray-400 hover:text-red-600" title="Delete">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default BatchRow;