import { useState, useEffect } from "react";
import { getAllBatches } from "../../../../api/batchApi";

function GpaFilters({ filters, onChange, onLoad, loading }) {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    getAllBatches().then(setBatches).catch(console.error);
  }, []);

  const handleChange = (field, value) => {
    onChange({ ...filters, [field]: value });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
      <div>
        <label className="text-sm font-medium text-gray-700">Batch</label>
        <select
          value={filters.batch}
          onChange={(e) => handleChange("batch", e.target.value)}
          className="mt-1 rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="mt-1 rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Semester</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
            <option key={s} value={s}>
              Semester {s}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onLoad}
        disabled={!filters.batch || !filters.semester || loading}
        className="px-6 py-2.5 rounded-lg bg-blue-700 text-white font-medium disabled:opacity-40 hover:bg-blue-800 transition-colors"
      >
        {loading ? "Loading..." : "Load Students"}
      </button>
    </div>
  );
}

export default GpaFilters;
