import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import studentMenu from "../../../../data/student/studentMenu";
import SidebarItem from "./SidebarItem";
import logo from "../../../../assets/logos/uwu-logo.png";
import { useAuth } from "../../../../context/AuthContext";

function Sidebar({ open, onClose }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 flex flex-col z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="px-6 py-8 border-b">
          <img src={logo} alt="UWU" className="w-14 h-14 object-contain" />
          <h2 className="mt-4 font-bold text-lg">ICT Department</h2>
          <p className="text-sm text-gray-500">Student Portal</p>
        </div>

        <nav className="flex-1 p-5 space-y-2 overflow-y-auto">
          {studentMenu.map((item) => (
            <SidebarItem key={item.title} item={item} />
          ))}
        </nav>

        <div className="p-5 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
