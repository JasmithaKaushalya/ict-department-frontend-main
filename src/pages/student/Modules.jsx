import { useState, useEffect } from "react";
import Card from "../../components/common/ui/Card";
import semesters from "../../data/courses/semesters";
import { getAllSubjects, getSubjectsBySemester } from "../../api/subjectApi";

const formatSemester = (semester) => semester?.replace("SEMESTER_", "Semester ");

function Modules() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const loadSubjects = async () => {
    setLoading(true);
    setError("");

    try {
      const data = selectedSemester
        ? await getSubjectsBySemester(selectedSemester)
        : await getAllSubjects();
      setSubjects(data);
    } catch (err) {
      console.error("Failed to load subjects:", err);
      setError("Unable to load course modules. Please try again later.");
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
          Course Modules
        </h1>
        <p className="mt-1 text-gray-500 text-sm">
          View the subjects offered in the ICT degree programme.
        </p>
      </div>

      <select
        value={selectedSemester}
        onChange={(e) => setSelectedSemester(e.target.value)}
        className="rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Semesters</option>
        {semesters.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>

      {loading ? (
        <p className="text-center text-gray-400 py-10">Loading...</p>
      ) : error ? (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600 text-center">
          {error}
        </div>
      ) : subjects.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No course modules found.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card key={subject.subjectCode}>
              <p className="text-sm font-semibold text-blue-700">
                {subject.subjectCode}
              </p>
              <h3 className="mt-1 font-bold text-gray-900">
                {subject.subjectName}
              </h3>
              <p className="mt-3 text-sm text-gray-500">
                {formatSemester(subject.semester)} · {subject.creditHours} Credit
                {subject.creditHours !== 1 ? "s" : ""}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Modules;