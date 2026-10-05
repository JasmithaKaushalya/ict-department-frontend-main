import DashboardHeader from "../../components/pages/student/dashboard/DashboardHeader";
import DashboardStats from "../../components/pages/student/dashboard/DashboardStats";
import TimetablePreview from "../../components/pages/student/dashboard/TimetablePreview";
import QuickLinks from "../../components/pages/student/dashboard/QuickLinks";
import GPAChart from "../../components/pages/student/charts/GPAChart";
import { useState, useEffect } from "react";
import { getMyResults } from "../../api/resultApi";
import { getMyProfile } from "../../api/userApi";

function Dashboard() {
  const [userName, setUserName] = useState("Student");
  const [gpaData, setGpaData] = useState([]);
  const [stats, setStats] = useState({
    cgpa: "0.00",
    creditsEarned: 0,
    courseModules: 0,
  });

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // 1. Fetch User Profile for Header
        const profile = await getMyProfile();
        if (profile && profile.fullName) {
          setUserName(profile.fullName.split(" ")[0]);
        }

        // 2. Fetch Results for Stats & Chart
        const results = await getMyResults();
        if (results && results.length > 0) {
          let totalAttemptedCredits = 0;
          let earnedCredits = 0;
          let totalPoints = 0;
          let modulesCount = results.length;
          const semMap = {};

          results.forEach((r) => {
            const credits = r.subject.creditHours;
            totalAttemptedCredits += credits;
            totalPoints += credits * r.gradePoint;

            // Only count credits if they actually passed (> 0 grade points)
            if (r.gradePoint > 0) {
              earnedCredits += credits;
            }

            // Group by semester for the chart
            const semLabel = r.semester.replace("SEMESTER_", "Semester ");
            if (!semMap[semLabel]) semMap[semLabel] = { credits: 0, points: 0 };
            semMap[semLabel].credits += credits;
            semMap[semLabel].points += credits * r.gradePoint;
          });

          // Calculate CGPA
          const cgpa =
            totalAttemptedCredits > 0
              ? (totalPoints / totalAttemptedCredits).toFixed(2)
              : "0.00";

          // Format chart data
          const formattedChart = Object.keys(semMap).map((sem) => ({
            semester: sem,
            gpa:
              semMap[sem].credits > 0
                ? (semMap[sem].points / semMap[sem].credits).toFixed(2)
                : "0.00",
          }));

          setGpaData(formattedChart);

          // Update Stats
          setStats({
            cgpa,
            creditsEarned: earnedCredits,
            courseModules: modulesCount,
          });
        }
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      }
    };

    loadDashboardData();
  }, []);

  return (
    <div className="space-y-8">
      <DashboardHeader userName={userName} />

      {/* Pass dynamic stats down */}
      <DashboardStats stats={stats} />

      <div className="grid lg:grid-cols-2 gap-8">
        <TimetablePreview />
        <QuickLinks />
      </div>

      <GPAChart data={gpaData} />
    </div>
  );
}

export default Dashboard;
