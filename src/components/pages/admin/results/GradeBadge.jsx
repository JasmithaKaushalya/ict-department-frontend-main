const gradeColors = {
  "A+": "bg-green-100 text-green-700",
  "A": "bg-green-100 text-green-700",
  "A-": "bg-green-100 text-green-700",
  "B+": "bg-blue-100 text-blue-700",
  "B": "bg-blue-100 text-blue-700",
  "B-": "bg-blue-100 text-blue-700",
  "C+": "bg-yellow-100 text-yellow-700",
  "C": "bg-yellow-100 text-yellow-700",
  "C-": "bg-yellow-100 text-yellow-700",
  "D+": "bg-orange-100 text-orange-700",
  "D": "bg-orange-100 text-orange-700",
  "E": "bg-red-100 text-red-700",
};

function GradeBadge({ grade }) {
  if (!grade) {
    return <span className="text-xs text-gray-400">—</span>;
  }

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${gradeColors[grade] || "bg-gray-100 text-gray-500"}`}>
      {grade}
    </span>
  );
}

export default GradeBadge;