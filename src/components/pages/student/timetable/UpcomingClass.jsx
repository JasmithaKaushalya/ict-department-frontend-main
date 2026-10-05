import Card from "../../../common/ui/Card";
import upcoming from "../../../../data/student/timetable/upcomingClass";

function UpcomingClass() {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-5">Next Class</h2>

      <div className="space-y-3">
        <Row label="Course" value={upcoming.subject} />
        <Row label="Code" value={upcoming.code} />
        <Row label="Lecturer" value={upcoming.lecturer} />
        <Row label="Venue" value={upcoming.venue} />
        <Row label="Time" value={upcoming.time} />
      </div>
    </Card>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}

export default UpcomingClass;
