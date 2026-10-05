import { Link } from "react-router-dom";
import Card from "../../../common/ui/Card";
import dashboardAnnouncements from "../../../../data/student/dashboard/dashboardAnnouncements";

function AnnouncementPreview() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Latest Announcements</h2>

        <Link
          to="/student/announcements"
          className="text-sm text-blue-700 font-medium"
        >
          View All
        </Link>
      </div>

      <div className="mt-6 space-y-5">
        {dashboardAnnouncements.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <h3 className="font-semibold text-gray-900 text-sm">
              {item.title}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {new Date(item.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default AnnouncementPreview;
