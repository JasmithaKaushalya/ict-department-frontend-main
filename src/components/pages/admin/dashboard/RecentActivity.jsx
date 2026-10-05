import Card from "../../../common/ui/Card";

function RecentActivity({ activities }) {
  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-900 mb-5">
        Recent Registrations
      </h2>

      {activities && activities.length > 0 ? (
        <div className="space-y-5">
          {activities.map((item) => (
            <div key={item.id} className="relative pl-6">
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-blue-700" />
              <p className="text-sm font-medium text-gray-900">{item.text}</p>
              <p className="mt-1 text-xs text-gray-500">{item.time}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 text-center py-6">
          No recent activity found.
        </p>
      )}
    </Card>
  );
}

export default RecentActivity;
