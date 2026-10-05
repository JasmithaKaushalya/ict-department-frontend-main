import { Link } from "react-router-dom";
import Card from "../../../common/ui/Card";
import quickLinks from "../../../../data/student/dashboard/quickLinks";

function QuickLinks() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Quick Links</h2>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {quickLinks.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.id}
              to={link.path}
              className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 p-5 text-center hover:border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <div className="h-11 w-11 rounded-lg bg-blue-50 flex items-center justify-center">
                <Icon className="h-5 w-5 text-blue-700" />
              </div>

              <span className="text-sm font-medium text-gray-700">
                {link.title}
              </span>
            </Link>
          );
        })}
      </div>
    </Card>
  );
}

export default QuickLinks;