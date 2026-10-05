import StatCard from "../../../common/cards/StatCard";
import { Award, BookOpen, CheckCircle, GraduationCap } from "lucide-react";

function DashboardStats({ stats }) {
  // Use the dynamic stats passed from Dashboard.jsx
  const statItems = [
    { id: 1, title: "Current GPA", value: stats?.cgpa || "0.00", icon: GraduationCap },
    { id: 2, title: "Course Modules", value: stats?.courseModules || 0, icon: BookOpen },
    { id: 3, title: "Credits Earned", value: stats?.creditsEarned || 0, icon: CheckCircle },
    { id: 4, title: "Academic Standing", value: Number(stats?.cgpa) >= 2.0 ? "Good" : "Probation", icon: Award },
  ];

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {statItems.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}

export default DashboardStats;