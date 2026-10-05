import { useState, useEffect } from "react";
import DashboardCards from "../../components/pages/admin/dashboard/DashboardCards";
import QuickActions from "../../components/pages/admin/dashboard/QuickActions";
import RecentActivity from "../../components/pages/admin/dashboard/RecentActivity";
import DashboardCharts from "../../components/pages/admin/dashboard/DashboardCharts";

// Import your API calls
import { getAllStudents } from "../../api/studentApi";
import { getAllBatches } from "../../api/batchApi"; // Assume this is where batch APIs live
import { getAllAcademicStaff } from "../../api/academicStaffApi";
import { getAllSubjects } from "../../api/subjectApi"; // Assume this is where subject APIs live

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalStaff: 0,
    totalBatches: 0,
    totalSubjects: 0,
  });
  const [batchChartData, setBatchChartData] = useState([]);
  const [trendChartData, setTrendChartData] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Fetch everything in parallel
        const [students, batches, staff, subjects] = await Promise.all([
          getAllStudents().catch(() => []),
          getAllBatches().catch(() => []),
          getAllAcademicStaff().catch(() => []),
          getAllSubjects().catch(() => []),
        ]);

        // 1. Update Top Stats Cards
        setStats({
          totalStudents: students.length,
          totalStaff: staff.length,
          totalBatches: batches.length,
          totalSubjects: subjects.length,
        });

        // 2. Prepare Data for "Students by Batch" Bar Chart
        const batchCounts = {};
        students.forEach((s) => {
          batchCounts[s.batchName] = (batchCounts[s.batchName] || 0) + 1;
        });
        const bData = Object.keys(batchCounts).map((batchName) => ({
          name: batchName.replace("BATCH_", ""), // Clean up the name for the chart UI
          students: batchCounts[batchName],
        }));
        setBatchChartData(bData);

        // 3. Prepare Data for "Intake Trend" Line Chart
        // Sort batches chronologically by year
        const sortedBatches = [...batches].sort(
          (a, b) => a.intakeYear - b.intakeYear,
        );
        const tData = sortedBatches.map((b) => ({
          year: b.intakeYear.toString(),
          students: b.studentCount,
        }));
        setTrendChartData(tData);

        // 4. Prepare Recent Activity (Show the 4 most recently registered students)
        const recent = students
          .slice(-4)
          .reverse()
          .map((s, idx) => ({
            id: idx,
            text: `Student ${s.enrollmentNumber} (${s.fullName}) registered`,
            time: `Batch: ${s.batchName}`,
          }));
        setRecentActivities(recent);
      } catch (error) {
        console.error("Dashboard data fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <DashboardCards stats={stats} />
      <QuickActions />

      <div className="grid xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <DashboardCharts
            batchData={batchChartData}
            trendData={trendChartData}
          />
        </div>
        <RecentActivity activities={recentActivities} />
      </div>
    </div>
  );
}

export default Dashboard;
