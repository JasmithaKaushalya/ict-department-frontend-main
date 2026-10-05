import { useState, useEffect } from "react";
import { getAllBatches } from "../../../../api/batchApi";

function StudentFilters({ batch, setBatch }) {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    getAllBatches()
      .then((data) => {
        setBatches(data.map((b) => b.batchName));
      })
      .catch((err) => console.error("Failed to load batches for filters", err));
  }, []);

  return (
    <div className="flex gap-3">
      <select
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
        className="rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      >
        <option value="All Batches">All Batches</option>
        {batches.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StudentFilters;