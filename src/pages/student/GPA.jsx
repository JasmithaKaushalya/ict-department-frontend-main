import { useState, useEffect } from "react";
import GPAHeader from "../../components/pages/student/gpa/GPAHeader";
import GPASummaryCards from "../../components/pages/student/gpa/GPASummaryCards";
import GPAChart from "../../components/pages/student/charts/GPAChart";
import SemesterResultsTable from "../../components/pages/student/gpa/SemesterResultsTable";
import AcademicSummary from "../../components/pages/student/gpa/AcademicSummary";
import { getMyResults } from "../../api/resultApi";

function GPA() {
  const [loading, setLoading] = useState(true);
  const [academicData, setAcademicData] = useState({
    cgpa: "0.00",
    currentSemGPA: "0.00",
    totalCredits: 0,
    semesterResults: [],
    highestGPA: "0.00",
    lowestGPA: "0.00",
    completedCredits: 0,
    remainingCredits: 120, // Assuming 120 credits for graduation
    degreeProgress: 0,
  });

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const results = await getMyResults();
        if (!results || results.length === 0) {
          setLoading(false);
          return;
        }

        const semesterMap = {};
        let totalCreditsAll = 0;
        let totalPointsAll = 0;

        // Group the backend results by semester and calculate points
        results.forEach((r) => {
          const semName = r.semester.replace("SEMESTER_", "Semester ");
          if (!semesterMap[semName]) {
            semesterMap[semName] = { semester: semName, credits: 0, points: 0 };
          }
          const credits = r.subject.creditHours;
          const points = credits * r.gradePoint;
          
          semesterMap[semName].credits += credits;
          semesterMap[semName].points += points;
          
          totalCreditsAll += credits;
          totalPointsAll += points;
        });

        // Calculate GPA for each individual semester
        const semesterResults = Object.values(semesterMap)
          .map((s) => ({
            semester: s.semester,
            credits: s.credits,
            gpa: s.credits > 0 ? (s.points / s.credits).toFixed(2) : "0.00",
            status: s.credits > 0 && (s.points / s.credits) >= 2.0 ? "Good Standing" : "Probation",
          }))
          .sort((a, b) => a.semester.localeCompare(b.semester)); // Sorts Semester 1 -> Semester 8

        // Overall stats
        const cgpa = totalCreditsAll > 0 ? (totalPointsAll / totalCreditsAll).toFixed(2) : "0.00";
        const currentSemGPA = semesterResults.length > 0 ? semesterResults[semesterResults.length - 1].gpa : "0.00";
        
        const gpaValues = semesterResults.map((s) => Number(s.gpa));
        const highestGPA = gpaValues.length > 0 ? Math.max(...gpaValues).toFixed(2) : "0.00";
        const lowestGPA = gpaValues.length > 0 ? Math.min(...gpaValues).toFixed(2) : "0.00";
        
        const degreeProgress = Math.min(100, Math.round((totalCreditsAll / 120) * 100));

        setAcademicData({
          cgpa,
          currentSemGPA,
          totalCredits: totalCreditsAll,
          semesterResults,
          highestGPA,
          lowestGPA,
          completedCredits: totalCreditsAll,
          remainingCredits: Math.max(0, 120 - totalCreditsAll),
          degreeProgress,
        });

      } catch (error) {
        console.error("Failed to fetch my results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
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
      <GPAHeader />
      <GPASummaryCards data={academicData} />
      <GPAChart data={academicData.semesterResults} />

      <div className="grid xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <SemesterResultsTable results={academicData.semesterResults} />
        </div>
        <AcademicSummary summary={academicData} />
      </div>
    </div>
  );
}

export default GPA;