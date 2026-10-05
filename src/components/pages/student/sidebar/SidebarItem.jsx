import { NavLink } from "react-router-dom";

function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
          isActive
            ? "bg-blue-700 text-white shadow-md"
            : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
        }`
      }
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{item.title}</span>
    </NavLink>
  );
}

export default SidebarItem;
