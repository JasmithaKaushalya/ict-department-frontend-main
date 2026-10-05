import { useState, useEffect } from "react";
import AddSubjectForm from "../../components/pages/admin/courses/AddSubjectForm";
import Card from "../../components/common/ui/Card";
import semesters from "../../data/courses/semesters";
import { getAllSubjects, getSubjectsBySemester } from "../../api/subjectApi";

const formatSemester = (semester) =>
  semester?.replace("SEMESTER_", "Semester ");

function CourseModuleManagement() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSemester, setSelectedSemester] = useState("");

  const loadSubjects = async () => {
    setLoading(true);
    try {
      // Format correctly for backend Enum filter
      const semesterEnum = selectedSemester && !selectedSemester.startsWith("SEMESTER_") 
        ? `SEMESTER_${selectedSemester}` 
        : selectedSemester;

      const data = semesterEnum
        ? await getSubjectsBySemester(semesterEnum)
        : await getAllSubjects();
        
      setSubjects(data);
    } catch (error) {
      console.error("Failed to load subjects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubjects();
  }, [selectedSemester]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Course Module Management
        </h1>
        <p className="mt-1 text-gray-500 text-sm">
          Manage course modules and curriculum subjects.
        </p>
      </div>

      <AddSubjectForm onSubjectAdded={loadSubjects} />

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            Registered Course Modules
          </h2>

          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Semesters</option>
            {semesters.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : subjects.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No course modules found.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <div
                key={subject.subjectCode}
                className="rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow bg-white"
              >
                <p className="text-sm font-semibold text-blue-700">
                  {subject.subjectCode}
                </p>
                <p className="mt-1 font-medium text-gray-900">
                  {subject.subjectName}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {formatSemester(subject.semester)} · {subject.creditHours}{" "}
                  Credit{subject.creditHours !== 1 ? "s" : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

export default CourseModuleManagement;