import { Link } from "react-router-dom";
import { UserPlus, GraduationCap, Layers, FileSpreadsheet } from "lucide-react";
import Card from "../../../common/ui/Card";

const actions = [
  { title: "Register Student", path: "/admin/student-registration", icon: UserPlus },
  { title: "Add Academic Staff", path: "/admin/staff", icon: GraduationCap },
  { title: "Create Batch", path: "/admin/batches", icon: Layers },
  { title: "Enter Results", path: "/admin/results", icon: FileSpreadsheet },
];

function QuickActions() {
  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-900 mb-5">Quick Actions</h2>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.title}
              to={action.path}
              className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 p-5 text-center hover:border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <div className="h-11 w-11 rounded-lg bg-blue-50 flex items-center justify-center">
                <Icon className="h-5 w-5 text-blue-700" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {action.title}
              </span>
            </Link>
          );
        })}
      </div>
    </Card>
  );
}

export default QuickActions;