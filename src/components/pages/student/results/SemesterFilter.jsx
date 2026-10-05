function SemesterFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] text-gray-700 bg-white"
    >
      <option value="All">All Semesters</option>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
        <option key={s} value={`Semester ${s}`}>
          Semester {s}
        </option>
      ))}
    </select>
  );
}

export default SemesterFilter;
