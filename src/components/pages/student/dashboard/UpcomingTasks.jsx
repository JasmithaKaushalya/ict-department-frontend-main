import Card from "../../../common/ui/Card";
import upcomingTasks from "../../../../data/student/upcomingTasks";

const priorityStyles = {
  high: "bg-red-50 text-red-600",
  medium: "bg-yellow-50 text-yellow-600",
  low: "bg-green-50 text-green-600",
};

function UpcomingTasks() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Upcoming Deadlines</h2>

      <div className="mt-6 space-y-4">
        {upcomingTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between gap-4"
          >
            <div>
              <h3 className="font-medium text-gray-900 text-sm">
                {task.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Due{" "}
                {new Date(task.dueDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold capitalize flex-shrink-0 ${priorityStyles[task.priority]}`}
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default UpcomingTasks;
