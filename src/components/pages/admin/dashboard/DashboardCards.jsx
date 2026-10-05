import StatCard from "./StatCard";
import { Users, GraduationCap, Layers, BookOpen } from "lucide-react";

function DashboardCards({ stats }) {
  const cards = [
    {
      id: 1,
      title: "Total Students",
      value: stats?.totalStudents || 0,
      icon: Users,
      trend: "+ Active",
    },
    {
      id: 2,
      title: "Academic Staff",
      value: stats?.totalStaff || 0,
      icon: GraduationCap,
      trend: "+ Active",
    },
    {
      id: 3,
      title: "Total Batches",
      value: stats?.totalBatches || 0,
      icon: Layers,
      trend: "Ongoing",
    },
    {
      id: 4,
      title: "Total Subjects",
      value: stats?.totalSubjects || 0,
      icon: BookOpen,
      trend: "Curriculum",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}

export default DashboardCards;
