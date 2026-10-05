const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const statuses = ["Upcoming", "Active", "Completed"];

function BatchModal({
  batch,
  errors,
  onChange,
  onSave,
  onCancel,
  isEditing,
  saving,
}) {
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "intakeYear" || name === "studentCount") {
      value = parseInt(value, 10) || "";
    }
    onChange({ ...batch, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
        <h2 className="text-lg font-bold text-gray-900">
          {isEditing ? "Edit Batch" : "Create New Batch"}
        </h2>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Academic Year
              </label>
              <input
                type="number"
                name="intakeYear"
                value={batch.intakeYear || ""}
                onChange={handleChange}
                placeholder="2026"
                className={`mt-1 w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 ${
                  errors?.intakeYear
                    ? "border-red-400 focus:ring-red-300"
                    : "border-gray-200 focus:ring-blue-500"
                }`}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Intake Month
              </label>
              <select
                name="intakeMonth"
                value={batch.intakeMonth || "JANUARY"}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Student Count
            </label>
            <input
              type="number"
              name="studentCount"
              value={batch.studentCount || ""}
              onChange={handleChange}
              placeholder="100"
              className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Status</label>
            <div className="mt-2 flex gap-4">
              {statuses.map((s) => (
                <label
                  key={s}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="status"
                    value={s}
                    checked={batch.status === s}
                    onChange={handleChange}
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-lg border border-gray-200 py-2.5 text-gray-600 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={saving}
            className="flex-1 rounded-lg bg-blue-700 py-2.5 text-white font-medium hover:bg-blue-800 disabled:opacity-50"
          >
            {saving ? "Saving..." : isEditing ? "Update Batch" : "Create Batch"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BatchModal;
