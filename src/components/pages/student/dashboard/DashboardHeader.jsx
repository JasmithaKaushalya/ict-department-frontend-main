import { useNavigate } from "react-router-dom";
import Button from "../../../common/ui/Button";

function DashboardHeader({ userName }) {
  const hour = new Date().getHours();
  const navigate = useNavigate();

  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          {greeting}, {userName || "Student"}
        </h1>
        <p className="mt-3 text-gray-600">
          Welcome back to the ICT Department Management System.
        </p>
      </div>

      <Button onClick={() => navigate("/student/profile")}>View Profile</Button>
    </div>
  );
}

export default DashboardHeader;