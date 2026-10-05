function ResultFilters({
  filters,
  onChange,
  onLoad,
  loading,
  batches = [],
  courses = [],
}) {
  const handleChange = (field, value) => {
    onChange({ ...filters, [field]: value });
  };

  return (
    <div className="space-y-4">
      {/* Changed to 3 columns since we removed Assessment Type */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Batch</label>
          <select
            value={filters.batch}
            onChange={(e) => handleChange("batch", e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select Batch</option>
            {batches.map((b) => (
              <option key={b.batchName} value={b.batchName}>
                {b.batchName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Semester</label>
          <select
            value={filters.semester}
            onChange={(e) => handleChange("semester", e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select Semester</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
              <option key={s} value={s}>
                Semester {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Course Module
          </label>
          <select
            value={filters.courseCode}
            onChange={(e) => handleChange("courseCode", e.target.value)}
            disabled={!filters.semester}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 bg-white"
          >
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c.subjectCode} value={c.subjectCode}>
                {c.subjectCode} — {c.subjectName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onLoad("entry")}
          disabled={
            !filters.batch ||
            !filters.semester ||
            !filters.courseCode ||
            loading
          }
          className="px-6 py-2.5 rounded-lg bg-blue-700 text-white font-medium disabled:opacity-40 hover:bg-blue-800 transition-colors"
        >
          {loading ? "Loading..." : "Load for Data Entry"}
        </button>
        <button
          onClick={() => onLoad("view")}
          disabled={
            !filters.batch ||
            !filters.semester ||
            !filters.courseCode ||
            loading
          }
          className="px-6 py-2.5 rounded-lg border border-blue-700 text-blue-700 font-medium disabled:opacity-40 hover:bg-blue-50 bg-white transition-colors"
        >
          {loading ? "Loading..." : "View Saved Results"}
        </button>
      </div>
    </div>
  );
}

export default ResultFilters;
