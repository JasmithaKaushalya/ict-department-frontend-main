import { X } from "lucide-react";

function Row({ label, value }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
}

function BatchDetailsModal({ batch, onClose }) {
  if (!batch) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Batch Information</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Row label="Batch Name" value={batch.batchName} />
        <Row label="Academic Year" value={batch.intakeYear} />
        <Row label="Intake Month" value={batch.intakeMonth} />
        <Row label="Student Count" value={batch.studentCount} />
        <Row label="Status" value={batch.status} />
      </div>
    </div>
  );
}

export default BatchDetailsModal;
