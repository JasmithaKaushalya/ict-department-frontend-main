const colorStyles = {
  blue: "bg-blue-100 border-blue-400",
  green: "bg-green-100 border-green-400",
  purple: "bg-purple-100 border-purple-400",
  orange: "bg-orange-100 border-orange-400",
  red: "bg-red-100 border-red-400",
};

function ClassCard({ lesson }) {
  return (
    <div className={`rounded-xl border-l-4 p-4 ${colorStyles[lesson.color]}`}>
      <h3 className="font-semibold">{lesson.code}</h3>

      <p className="text-sm mt-1">{lesson.title}</p>

      <p className="text-xs mt-2">{lesson.time}</p>

      <p className="text-xs">{lesson.venue}</p>
    </div>
  );
}

export default ClassCard;
