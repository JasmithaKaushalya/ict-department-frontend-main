import { Search } from "lucide-react";

function ResultSearch({ value, onChange }) {
  return (
    <div className="relative max-w-sm">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by enrollment number or name..."
        className="w-full rounded-lg border border-gray-200 pl-11 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default ResultSearch;
