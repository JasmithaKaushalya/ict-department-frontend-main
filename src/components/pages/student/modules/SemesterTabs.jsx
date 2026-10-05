const semesters = [
  { key: "semester1", label: "Semester 1" },
  { key: "semester2", label: "Semester 2" },
  { key: "semester3", label: "Semester 3" },
  { key: "semester4", label: "Semester 4" },
  { key: "semester5", label: "Semester 5" },
  { key: "semester6", label: "Semester 6" },
  { key: "semester7", label: "Semester 7" },
  { key: "semester8", label: "Semester 8" },
];

function SemesterTabs({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {semesters.map((sem) => (
        <button
          key={sem.key}
          onClick={() => onSelect(sem.key)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selected === sem.key
              ? "bg-blue-700 text-white"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
          }`}
        >
          {sem.label}
        </button>
      ))}
    </div>
  );
}

export default SemesterTabs;