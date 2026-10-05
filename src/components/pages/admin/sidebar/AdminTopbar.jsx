import { Bell, Search, Menu } from "lucide-react";

function AdminTopbar({ onMenuClick }) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
      <button onClick={onMenuClick} className="lg:hidden text-gray-600">
        <Menu className="h-6 w-6" />
      </button>

      <div className="relative hidden sm:block w-80">
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

        <input
          placeholder="Search students, lecturers, modules..."
          className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-4 lg:gap-6 ml-auto">
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            5
          </span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Administrator"
            className="h-11 w-11 rounded-full"
          />

          <div className="hidden sm:block">
            <p className="font-semibold">Administrator</p>
            <p className="text-xs text-gray-500">System Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminTopbar;
