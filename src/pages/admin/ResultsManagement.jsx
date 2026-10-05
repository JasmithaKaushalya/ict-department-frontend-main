import { useState, useEffect } from "react";
import { Upload } from "lucide-react";
import ResultFilters from "../../components/pages/admin/results/ResultFilters";
import ResultStats from "../../components/pages/admin/results/ResultStats";
import ResultSearch from "../../components/pages/admin/results/ResultSearch";
import StudentMarksTable from "../../components/pages/admin/results/StudentMarksTable";
import SavedResultsTable from "../../components/pages/admin/results/SavedResultsTable";
import ResultSummary from "../../components/pages/admin/results/ResultSummary";
import UploadCSVModal from "../../components/pages/admin/results/UploadCSVModal";
import Button from "../../components/common/ui/Button";
import { getGradeFromMarks } from "../../data/admin/results/gradeScale";
import { getAllStudents } from "../../api/studentApi";
import {
  addResult,
  deleteResult,
  getStudentResultsBySemester,
} from "../../api/resultApi";
import { getAllBatches } from "../../api/batchApi";
import { getSubjectsBySemester } from "../../api/subjectApi";

function ResultsManagement() {
  const [filters, setFilters] = useState({
    batch: "",
    semester: "",
    courseCode: "",
  });

  const [viewMode, setViewMode] = useState(null); // 'entry' or 'view'
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [entryResults, setEntryResults] = useState([]);
  const [savedResults, setSavedResults] = useState([]);

  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState({});
  const [showUpload, setShowUpload] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [batches, setBatches] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllBatches().then(setBatches).catch(console.error);
  }, []);

  useEffect(() => {
    if (filters.semester) {
      getSubjectsBySemester(`SEMESTER_${filters.semester}`)
        .then(setCourses)
        .catch(console.error);
    } else {
      setCourses([]);
    }
  }, [filters.semester]);

  const selectedCourse = courses.find(
    (c) => c.subjectCode === filters.courseCode,
  );

  const parseGradeEnum = (gradeStr) => {
    if (!gradeStr) return "E";
    return gradeStr.replace("_PLUS", "+").replace("_MINUS", "-");
  };

  const handleLoadStudents = async (mode) => {
    setLoading(true);
    setViewMode(mode);
    setSearch("");

    try {
      const allStudents = await getAllStudents();
      const batchStudents = allStudents.filter(
        (s) => s.batchName === filters.batch,
      );

      if (mode === "entry") {
        const entryData = batchStudents.map((s) => ({
          enrollmentNumber: s.enrollmentNumber,
          studentName: s.fullName,
          marks: "",
        }));
        setEntryResults(entryData);
        setSavedResults([]);
      } else if (mode === "view") {
        const semesterEnum = `SEMESTER_${filters.semester}`;

        // Fetch existing results for all students in this batch
        const promises = batchStudents.map((s) =>
          getStudentResultsBySemester(s.enrollmentNumber, semesterEnum).catch(
            () => [],
          ),
        );
        const allResultsArray = await Promise.all(promises);

        const fetchedSaved = [];
        allResultsArray.forEach((studentResults, index) => {
          const courseResult = studentResults.find(
            (r) => r.subject.subjectCode === filters.courseCode,
          );
          if (courseResult) {
            fetchedSaved.push({
              enrollmentNumber: batchStudents[index].enrollmentNumber,
              studentName: batchStudents[index].fullName,
              marks: courseResult.marks,
              grade: parseGradeEnum(courseResult.grade),
            });
          }
        });
        setSavedResults(fetchedSaved);
        setEntryResults([]);
      }

      setErrors({});
      setHasUnsavedChanges(false);
    } catch (err) {
      console.error("Failed to load students:", err);
      alert("Failed to load students from the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleMarksChange = (enrollmentNumber, value) => {
    if (value !== "" && (Number(value) < 0 || Number(value) > 100)) {
      setErrors((prev) => ({
        ...prev,
        [enrollmentNumber]:
          Number(value) < 0
            ? "Marks cannot be negative"
            : "Marks must be between 0 and 100",
      }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[enrollmentNumber];
        return next;
      });
    }

    setEntryResults((prev) =>
      prev.map((r) =>
        r.enrollmentNumber === enrollmentNumber ? { ...r, marks: value } : r,
      ),
    );
    setHasUnsavedChanges(true);
  };

  // Delete directly from the Saved Results table
  const handleDeleteSavedResult = async (enrollmentNumber) => {
    if (
      !window.confirm(
        `Are you sure you want to permanently delete the result for ${enrollmentNumber}?`,
      )
    )
      return;

    try {
      await deleteResult(filters.courseCode, enrollmentNumber);
      setSavedResults((prev) =>
        prev.filter((r) => r.enrollmentNumber !== enrollmentNumber),
      );
    } catch (error) {
      console.error("Delete failed:", error);
      alert(error.response?.data?.message || "Failed to delete result.");
    }
  };

  const formatGradeEnumForBackend = (gradeStr) => {
    if (!gradeStr) return "E";
    return gradeStr.replace("+", "_PLUS").replace("-", "_MINUS");
  };

  const handleSaveResults = async () => {
    if (Object.keys(errors).length > 0) return;
    setSaving(true);

    try {
      const submittedResults = entryResults.filter((r) => r.marks !== "");

      const promises = submittedResults.map((r) => {
        const gradeInfo = getGradeFromMarks(r.marks);
        const payload = {
          enrollmentNumber: r.enrollmentNumber,
          subjectCode: filters.courseCode,
          marks: parseFloat(r.marks),
          grade: formatGradeEnumForBackend(gradeInfo?.grade),
          semester: `SEMESTER_${filters.semester}`,
        };
        return addResult(payload);
      });

      await Promise.all(promises);
      setHasUnsavedChanges(false);
      alert(
        `Successfully saved results for ${submittedResults.length} students!`,
      );

      // Clear marks after saving
      setEntryResults((prev) => prev.map((r) => ({ ...r, marks: "" })));
    } catch (err) {
      console.error("Error saving results:", err);
      alert("Failed to save some or all results. Please check the console.");
    } finally {
      setSaving(false);
    }
  };

  const handleApplyCSV = (rows) => {
    setEntryResults((prev) =>
      prev.map((r) => {
        const uploaded = rows.find(
          (row) => row.enrollmentNumber === r.enrollmentNumber,
        );
        return uploaded ? { ...r, marks: uploaded.marks } : r;
      }),
    );
    setHasUnsavedChanges(true);
    setShowUpload(false);
  };

  const handleLeaveAttempt = (action) => {
    if (hasUnsavedChanges) {
      if (!window.confirm("You have unsaved marks. Leave anyway?")) return;
    }
    action();
  };

  const activeResults = viewMode === "entry" ? entryResults : savedResults;
  const filteredActiveResults = activeResults.filter(
    (r) =>
      r.enrollmentNumber.toLowerCase().includes(search.toLowerCase()) ||
      r.studentName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Results Management
        </h1>
        <p className="mt-1 text-gray-500 text-sm">
          Manage student examination results.
        </p>
      </div>

      <ResultFilters
        filters={filters}
        onChange={(newFilters) =>
          handleLeaveAttempt(() => setFilters(newFilters))
        }
        onLoad={handleLoadStudents}
        loading={loading}
        batches={batches}
        courses={courses}
      />

      {viewMode && (
        <>
          <ResultStats results={activeResults} />

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <ResultSearch value={search} onChange={setSearch} />

            {viewMode === "entry" && (
              <button
                onClick={() => setShowUpload(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 bg-white"
              >
                <Upload className="h-4 w-4" /> Bulk Upload CSV
              </button>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {viewMode === "entry" ? (
                <>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold">Data Entry Mode</h2>
                    <p className="text-sm text-gray-500">
                      Enter marks for students who haven't been graded yet.
                    </p>
                  </div>
                  <StudentMarksTable
                    results={filteredActiveResults}
                    onMarksChange={handleMarksChange}
                    errors={errors}
                  />
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold">Database Records</h2>
                    <p className="text-sm text-gray-500">
                      Viewing already saved results for this subject.
                    </p>
                  </div>
                  <SavedResultsTable
                    results={filteredActiveResults}
                    onDelete={handleDeleteSavedResult}
                  />
                </>
              )}
            </div>

            <ResultSummary
              course={selectedCourse}
              batch={filters.batch}
              results={activeResults}
            />
          </div>

          {viewMode === "entry" && (
            <Button
              onClick={handleSaveResults}
              disabled={Object.keys(errors).length > 0 || saving}
            >
              {saving ? "Saving..." : "Save Results"}
            </Button>
          )}
        </>
      )}

      {showUpload && (
        <UploadCSVModal
          students={entryResults}
          onClose={() => setShowUpload(false)}
          onApply={handleApplyCSV}
        />
      )}
    </div>
  );
}

export default ResultsManagement;
