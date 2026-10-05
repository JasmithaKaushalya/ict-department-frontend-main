import { Search } from "lucide-react";

const statuses = ["All", "Active", "Upcoming", "Completed"];

function BatchFilters({ search, setSearch, status, setStatus }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1 min-w-[220px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search batch..."
          className="w-full rounded-lg border border-gray-200 pl-11 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}

export default BatchFilters;