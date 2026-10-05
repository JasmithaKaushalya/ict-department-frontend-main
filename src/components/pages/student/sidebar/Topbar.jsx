import { Bell, Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { getMyProfile } from "../../../../api/userApi";

function Topbar({ onMenuClick }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the logged-in user's details when the Topbar loads
    getMyProfile()
      .then(setUser)
      .catch((error) => console.error("Failed to load user for topbar", error));
  }, []);

  // Handle the profile picture URL just like we did in the Profile Avatar
  const imageUrl = user?.profilePicture
    ? user.profilePicture.startsWith("http")
      ? user.profilePicture
      : `${import.meta.env.VITE_API_BASE_URL}${user.profilePicture}`
    : "/images/staff/default.jpg";

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
      <button onClick={onMenuClick} className="lg:hidden text-gray-600">
        <Menu className="h-6 w-6" />
      </button>

      <div className="relative hidden sm:block w-80">
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

        <input
          placeholder="Search..."
          className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-4 lg:gap-6 ml-auto">
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600" />

          {/* Static notification badge for now */}
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src={imageUrl}
            alt={user?.fullName || "User Profile"}
            className="h-11 w-11 rounded-full object-cover border border-gray-200"
          />

          <div className="hidden sm:block">
            <p className="font-semibold text-gray-900">
              {user?.fullName || "Loading..."}
            </p>
            <p className="text-xs text-gray-500">
              {user?.enrollmentNumber || ""}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
