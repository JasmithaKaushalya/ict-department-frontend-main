import Card from "../../../common/ui/Card";
import weeklyTimetable from "../../../../data/student/timetable/weeklyTimetable";
import ClassCard from "./ClassCard";

function WeeklyTimetable() {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-6">Weekly Schedule</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
        {weeklyTimetable.map((day) => (
          <div key={day.day}>
            <h3 className="font-semibold mb-3">{day.day}</h3>

            <div className="space-y-3">
              {day.lessons.length > 0 ? (
                day.lessons.map((lesson) => (
                  <ClassCard key={lesson.id} lesson={lesson} />
                ))
              ) : (
                <p className="text-xs text-gray-400">No classes</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default WeeklyTimetable;
