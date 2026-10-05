import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";
import Button from "../../../common/ui/Button";

function DeleteResultModal({ courseCode, onClose, onDelete }) {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!enrollmentNumber.trim()) return;
    setLoading(true);
    await onDelete(enrollmentNumber.trim());
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h2 className="text-lg font-bold text-gray-900">Delete Result</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Remove the saved result for{" "}
          <span className="font-semibold text-gray-900">{courseCode}</span> from
          the database.
        </p>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Student Enrollment Number
          </label>
          <input
            type="text"
            value={enrollmentNumber}
            onChange={(e) => setEnrollmentNumber(e.target.value)}
            placeholder="e.g. UWU/ICT/23/019"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-gray-200 py-2.5 text-gray-600 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <Button
            onClick={handleSubmit}
            disabled={!enrollmentNumber.trim() || loading}
            className="flex-1 !bg-red-600 hover:!bg-red-700"
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteResultModal;
