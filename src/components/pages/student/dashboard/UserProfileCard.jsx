import { ChevronDown } from "lucide-react";

function UserProfileCard({ name, role, avatar }) {
  return (
    <button className="flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors">
      <img
        src={avatar}
        alt={name}
        className="w-9 h-9 rounded-full object-cover border-2 border-blue-100"
      />

      <div className="hidden sm:block text-left">
        <p className="text-sm font-semibold text-gray-900 leading-tight">
          {name}
        </p>
        <p className="text-xs text-gray-500 capitalize">{role}</p>
      </div>

      <ChevronDown className="h-4 w-4 text-gray-400" />
    </button>
  );
}

export default UserProfileCard;