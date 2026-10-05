import { X } from "lucide-react";
import { useState, useEffect } from "react";
import StudentForm from "../../admin/registration/StudentForm";
import StudentFormActions from "../../admin/registration/StudentFormActions";
import { getAllBatches } from "../../../../api/batchApi";

function StudentEditModal({
  student,
  errors,
  onChange,
  onSave,
  onCancel,
  loading,
}) {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    if (student) {
      getAllBatches()
        .then((data) => {
          setBatches(data.map((b) => ({ id: b.batchName, name: b.batchName })));
        })
        .catch(console.error);
    }
  }, [student]);

  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-xl my-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Edit Student</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {errors?.submit && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {errors.submit}
          </div>
        )}

        <StudentForm 
          student={student} 
          errors={errors} 
          onChange={onChange} 
          batches={batches}
          isEditing={true} 
        />

        <div className="mt-6">
          <StudentFormActions
            onSubmit={onSave}
            onReset={onCancel}
            isEditing={true}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default StudentEditModal;