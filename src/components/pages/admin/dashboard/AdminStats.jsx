import SummaryCard from "../../../pages/student/gpa/SummaryCard";
import stats from "../../../../data/admin/dashboard/adminStats";

function AdminStats() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <SummaryCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AdminStats;
