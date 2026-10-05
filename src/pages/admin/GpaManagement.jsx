import { useState } from "react";
import { Download } from "lucide-react";
import GpaFilters from "../../components/pages/admin/gpa/GpaFilters";
import GpaStatistics from "../../components/pages/admin/gpa/GpaStatistics";
import GpaTable from "../../components/pages/admin/gpa/GpaTable";
import GpaSummaryCard from "../../components/pages/admin/gpa/GpaSummaryCard";
import GradePointTable from "../../components/pages/admin/gpa/GradePointTable";
import GpaDetailsModal from "../../components/pages/admin/gpa/GpaDetailsModal";
import ResultSearch from "../../components/pages/admin/results/ResultSearch";
import { getAllStudents } from "../../api/studentApi";
import {
  getStudentResults,
  getStudentResultsBySemester,
} from "../../api/resultApi";

function GpaManagement() {
  const [filters, setFilters] = useState({ batch: "", semester: "" });
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [students, setStudents] = useState([]);
  const [calculated, setCalculated] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Students");
  const [viewingStudent, setViewingStudent] = useState(null);

  const handleLoadStudents = async () => {
    setLoading(true);
    setCalculated(false);

    try {
      const allStudents = await getAllStudents();
      const batchStudents = allStudents
        .filter((s) => s.batchName === filters.batch)
        .map((s) => ({
          enrollmentNumber: s.enrollmentNumber,
          fullName: s.fullName,
          semester: filters.semester,
          modules: [],
          semesterGPA: 0,
          cgpa: 0,
        }));

      setStudents(batchStudents);
    } catch (err) {
      console.error("Failed to load students:", err);
      alert("Failed to load students from the server.");
    } finally {
      setLoading(false);
    }
  };

  // Format Backend Enum (A_PLUS) to UI Grade (A+)
  const parseGradeEnum = (enumStr) => {
    if (!enumStr) return "—";
    return enumStr.replace("_PLUS", "+").replace("_MINUS", "-");
  };

  // Reusable strict math function for GPA based on returned credits & points
  const calculateAccurateGPA = (resultsArray) => {
    if (!resultsArray || resultsArray.length === 0) return 0;
    const totalCredits = resultsArray.reduce(
      (sum, r) => sum + r.subject.creditHours,
      0,
    );
    const totalPoints = resultsArray.reduce(
      (sum, r) => sum + r.subject.creditHours * r.gradePoint,
      0,
    );
    return totalCredits > 0 ? totalPoints / totalCredits : 0;
  };

  const handleCalculateGPA = async () => {
    setCalculating(true);

    try {
      const semesterEnum = `SEMESTER_${filters.semester}`;

      const updatedPromises = students.map(async (student) => {
        try {
          // Fetch results for this specific semester
          const semResults = await getStudentResultsBySemester(
            student.enrollmentNumber,
            semesterEnum,
          );
          // Fetch all historical results for CGPA
          const allResults = await getStudentResults(student.enrollmentNumber);

          const semesterGPA = calculateAccurateGPA(semResults);
          const cgpa = calculateAccurateGPA(allResults);

          // Map for the Details Modal UI
          const modules = semResults.map((r) => ({
            code: r.subject.subjectCode,
            credits: r.subject.creditHours,
            grade: parseGradeEnum(r.grade),
            gradePoint: r.gradePoint,
          }));

          return { ...student, modules, semesterGPA, cgpa };
        } catch (err) {
          // If a student has no results, APIs might throw 404/500 depending on backend config
          console.error(
            `Failed to calculate for ${student.enrollmentNumber}`,
            err,
          );
          return student;
        }
      });

      const updatedStudents = await Promise.all(updatedPromises);
      setStudents(updatedStudents);
      setCalculated(true);
      alert(
        `GPA successfully calculated for ${updatedStudents.length} students.`,
      );
    } catch (error) {
      console.error("Error during GPA calculation process:", error);
      alert("An error occurred while calculating GPAs.");
    } finally {
      setCalculating(false);
    }
  };

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.fullName.toLowerCase().includes(search.toLowerCase()) ||
      s.enrollmentNumber.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All Students" ||
      (statusFilter === "Dean's List" && s.semesterGPA >= 3.7) ||
      (statusFilter === "Probation" &&
        s.semesterGPA > 0 &&
        s.semesterGPA < 2.0);

    return matchesSearch && matchesStatus;
  });

  const handleExport = (format) => {
    alert(`Exporting GPA report as ${format} (placeholder).`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          GPA Management
        </h1>
        <p className="mt-1 text-gray-500 text-sm">
          Automatically calculate Semester GPA and CGPA directly from database
          records.
        </p>
      </div>

      <GpaFilters
        filters={filters}
        onChange={setFilters}
        onLoad={handleLoadStudents}
        loading={loading}
      />

      {students.length > 0 && (
        <>
          <GpaStatistics students={students} />

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <ResultSearch value={search} onChange={setSearch} />

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>All Students</option>
                <option>Dean's List</option>
                <option>Probation</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCalculateGPA}
                disabled={calculating}
                className="px-5 py-2.5 rounded-lg bg-blue-700 text-white font-medium text-sm hover:bg-blue-800 disabled:opacity-50"
              >
                {calculating ? "Calculating..." : "Calculate GPA"}
              </button>

              <div className="relative group">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">
                  <Download className="h-4 w-4" /> Export
                </button>
                <div className="absolute right-0 mt-1 hidden group-hover:block bg-white border border-gray-100 rounded-lg shadow-lg z-10 w-32">
                  <button
                    onClick={() => handleExport("PDF")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    PDF
                  </button>
                  <button
                    onClick={() => handleExport("Excel")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Excel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <GpaTable
                students={filteredStudents}
                onView={setViewingStudent}
              />
              {calculated && <GpaSummaryCard students={students} />}
            </div>

            <GradePointTable />
          </div>
        </>
      )}

      <GpaDetailsModal
        student={viewingStudent}
        onClose={() => setViewingStudent(null)}
      />
    </div>
  );
}

export default GpaManagement;
