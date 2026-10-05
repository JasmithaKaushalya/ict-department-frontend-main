import TimetableHeader from "../../components/pages/student/timetable/TimetableHeader";
import TodayClasses from "../../components/pages/student/timetable/TodayClasses";
import WeeklyTimetable from "../../components/pages/student/timetable/WeeklyTimetable";
import UpcomingClass from "../../components/pages/student/timetable/UpcomingClass";

function Timetable() {
  return (
    <div className="space-y-8">
      <TimetableHeader />

      <div className="grid xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <TodayClasses />
        </div>

        <UpcomingClass />
      </div>

      <WeeklyTimetable />
    </div>
  );
}

export default Timetable;
