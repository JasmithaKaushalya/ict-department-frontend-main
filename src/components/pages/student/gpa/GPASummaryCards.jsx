import SummaryCard from "./SummaryCard";
import { GraduationCap, TrendingUp, BookOpen, Award } from "lucide-react";

function GPASummaryCards({ data }) {
  if (!data) return null;

  const summaryItems = [
    { id: 1, title: "Cumulative GPA", value: data.cgpa, icon: GraduationCap },
    { id: 2, title: "Current Semester GPA", value: data.currentSemGPA, icon: TrendingUp },
    { id: 3, title: "Total Credits Earned", value: data.totalCredits, icon: BookOpen },
    { id: 4, title: "Academic Standing", value: Number(data.cgpa) >= 2.0 ? "Good" : "Probation", icon: Award },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {summaryItems.map((item) => (
        <SummaryCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default GPASummaryCards;