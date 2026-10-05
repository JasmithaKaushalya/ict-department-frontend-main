import { AlertTriangle } from "lucide-react";
import Button from "../../../common/ui/Button";

function DeleteStudentModal({ student, onCancel, onConfirm }) {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
        <AlertTriangle className="h-12 w-12 text-red-500 mx-auto" />

        <h2 className="mt-4 text-lg font-bold text-gray-900">
          Delete Student?
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Are you sure you want to remove{" "}
          <span className="font-semibold text-gray-700">
            {student.fullName}
          </span>{" "}
          from the department?
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-lg border border-gray-200 py-2.5 text-gray-600 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>

          <Button
            onClick={() => onConfirm(student.enrollmentNumber)}
            className="flex-1 !bg-red-600 hover:!bg-red-700"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteStudentModal;
