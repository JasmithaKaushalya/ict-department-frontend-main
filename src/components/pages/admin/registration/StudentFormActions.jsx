import Button from "../../../common/ui/Button";

function StudentFormActions({ onSubmit, onReset, isEditing, loading }) {
  return (
    <div className="flex gap-3">
      <Button onClick={onSubmit} disabled={loading}>
        {loading
          ? "Saving..."
          : isEditing
            ? "Update Student"
            : "Register Student"}
      </Button>

      <button
        type="button"
        onClick={onReset}
        className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
      >
        {isEditing ? "Cancel" : "Reset"}
      </button>
    </div>
  );
}

export default StudentFormActions;
