import { useState, useEffect } from "react";
import ResultsHeader from "../../components/pages/student/results/ResultsHeader";
import ResultsStats from "../../components/pages/student/results/ResultsStats";
import SemesterFilter from "../../components/pages/student/results/SemesterFilter";
import SearchBar from "../../components/pages/student/results/SearchBar";
import ResultsTable from "../../components/pages/student/results/ResultsTable";
import PerformanceSummary from "../../components/pages/student/results/PerformanceSummary";
import { getMyResults } from "../../api/resultApi";

function Results() {
  const [semester, setSemester] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [resultsData, setResultsData] = useState([]);
  const [summary, setSummary] = useState({
    totalSubjects: 0,
    passedSubjects: 0,
    failedSubjects: 0,
    highestGrade: "—",
    lowestGrade: "—",
    passRate: "0%",
  });

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getMyResults();

        if (!data || data.length === 0) {
          setLoading(false);
          return;
        }

        // Format backend enum (A_PLUS) to UI grade (A+)
        const parseGradeEnum = (enumStr) => {
          if (!enumStr) return "—";
          return enumStr.replace("_PLUS", "+").replace("_MINUS", "-");
        };

        // Format Data for the table
        const formattedData = data.map((item) => ({
          id: item.subject.subjectCode,
          code: item.subject.subjectCode,
          subject: item.subject.subjectName,
          credits: item.subject.creditHours,
          grade: parseGradeEnum(item.grade),
          gradePoint: item.gradePoint.toFixed(2),
          semester: item.semester.replace("SEMESTER_", "Semester "),
          // Assume a Grade Point > 0 is a Pass (E grade usually = 0.0)
          status: item.gradePoint > 0 ? "Pass" : "Fail",
        }));

        setResultsData(formattedData);

        // Calculate Performance Summary
        const total = formattedData.length;
        const passed = formattedData.filter((r) => r.status === "Pass").length;
        const failed = total - passed;
        const passRate =
          total > 0 ? Math.round((passed / total) * 100) + "%" : "0%";

        const points = data.map((d) => d.gradePoint);
        const highestObj = data.find(
          (d) => d.gradePoint === Math.max(...points),
        );
        const lowestObj = data.find(
          (d) => d.gradePoint === Math.min(...points),
        );

        setSummary({
          totalSubjects: total,
          passedSubjects: passed,
          failedSubjects: failed,
          highestGrade: highestObj ? parseGradeEnum(highestObj.grade) : "—",
          lowestGrade: lowestObj ? parseGradeEnum(lowestObj.grade) : "—",
          passRate,
        });
      } catch (error) {
        console.error("Failed to fetch results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const filteredResults = resultsData.filter((subject) => {
    const matchesSemester = semester === "All" || subject.semester === semester;
    const matchesSearch =
      subject.subject.toLowerCase().includes(search.toLowerCase()) ||
      subject.code.toLowerCase().includes(search.toLowerCase());

    return matchesSemester && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ResultsHeader />
      <ResultsStats summary={summary} />

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SemesterFilter value={semester} onChange={setSemester} />
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="grid xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <ResultsTable results={filteredResults} />
        </div>
        <PerformanceSummary summary={summary} />
      </div>
    </div>
  );
}

export default Results;
