import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search subject..."
        className="rounded-xl border border-gray-300 pl-12 pr-4 py-2.5 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
      />
    </div>
  );
}

export default SearchBar;