import Card from "../../../common/ui/Card";
import todayTimetable from "../../../../data/student/todayTimetable";

function TimetablePreview() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Today's Timetable</h2>

      <div className="mt-6 space-y-5">
        {todayTimetable.map((lesson) => (
          <div key={lesson.id} className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold">{lesson.course}</h3>

            <p className="text-sm text-gray-600">{lesson.title}</p>

            <p className="text-sm text-blue-700 mt-1">{lesson.time}</p>

            <p className="text-xs text-gray-500">{lesson.venue}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TimetablePreview;
