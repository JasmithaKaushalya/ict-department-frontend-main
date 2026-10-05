import { Pencil } from "lucide-react";
import Button from "../../../common/ui/Button";

function ProfileHeader({ onEditClick }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          My Profile
        </h1>
        <p className="mt-1 text-gray-500 text-sm">
          View and manage your personal and academic information.
        </p>
      </div>
    </div>
  );
}

export default ProfileHeader;