import { useLocation } from "react-router-dom";
import { Menu, Search, Bell } from "lucide-react";
import adminMenu from "../../../../data/admin/sidebar/adminMenu";

function AdminHeader({ onMenuClick }) {
  const location = useLocation();

  const currentPage =
    adminMenu.find((item) => location.pathname.startsWith(item.path))
      ?.title || "Dashboard";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden text-gray-600">
          <Menu className="h-6 w-6" />
        </button>

        <div>
          <p className="text-xs text-gray-400">
            Admin Panel / <span className="text-gray-600">{currentPage}</span>
          </p>
          <h1 className="text-lg font-bold text-gray-900">{currentPage}</h1>
        </div>
      </div>

      <div className="hidden md:block text-sm text-gray-500">{today}</div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search..."
            className="w-48 lg:w-64 rounded-lg border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="relative text-gray-500 hover:text-gray-700">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Administrator"
            className="h-9 w-9 rounded-full"
          />
          <span className="hidden sm:block text-sm font-semibold text-gray-800">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;