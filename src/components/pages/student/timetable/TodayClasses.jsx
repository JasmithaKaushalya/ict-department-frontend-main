import Card from "../../../common/ui/Card";
import classes from "../../../../data/student/timetable/todayClasses";

function TodayClasses() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Today's Classes</h2>

      <div className="mt-6 space-y-4">
        {classes.map((item) => (
          <div key={item.id} className="border-l-4 border-[#0F4C81] pl-4">
            <h3 className="font-semibold">{item.subject}</h3>

            <p className="text-sm text-gray-600">{item.code}</p>

            <p className="text-sm text-blue-700 mt-1">{item.time}</p>

            <p className="text-xs text-gray-500">{item.venue}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TodayClasses;
