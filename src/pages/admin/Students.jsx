import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/ui/Button";
import StudentSearch from "../../components/pages/admin/students/StudentSearch";
import StudentFilters from "../../components/pages/admin/students/StudentFilters";
import StudentsTable from "../../components/pages/admin/students/StudentsTable";
import StudentDetailsModal from "../../components/pages/admin/students/StudentDetailsModal";
import StudentEditModal from "../../components/pages/admin/students/StudentEditModal";
import DeleteStudentModal from "../../components/pages/admin/students/DeleteStudentModal";
import StudentPagination from "../../components/pages/admin/students/StudentPagination";
import {
  getAllStudents,
  updateStudent,
  deleteStudent,
} from "../../api/studentApi";

const PAGE_SIZE = 6;

function Students() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState("All Batches");
  const [page, setPage] = useState(1);

  const [viewingStudent, setViewingStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editErrors, setEditErrors] = useState({});
  const [savingEdit, setSavingEdit] = useState(false);
  const [deletingStudent, setDeletingStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await getAllStudents();
      setStudents(data || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching students:", err);
      setError("Failed to load students from the server.");
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      s.enrollmentNumber?.toLowerCase().includes(search.toLowerCase());

    const matchesBatch = batch === "All Batches" || s.batchName === batch;

    return matchesSearch && matchesBatch;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / PAGE_SIZE),
  );
  const paginatedStudents = filteredStudents.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const handleEditSave = async () => {
    const newErrors = {};
    if (!editingStudent.fullName?.trim()) newErrors.fullName = "Full name is required";
    if (!editingStudent.nameWithInitials?.trim()) newErrors.nameWithInitials = "Name with initials is required";
    if (!editingStudent.email?.trim()) newErrors.email = "Email is required";

    setEditErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSavingEdit(true);

    try {
      const payload = {
        enrollmentNumber: editingStudent.enrollmentNumber,
        fullName: editingStudent.fullName,
        nameWithInitials: editingStudent.nameWithInitials,
        email: editingStudent.email,
      };

      await updateStudent(editingStudent.enrollmentNumber, payload);

      
      setStudents((prev) =>
        prev.map((s) =>
          s.enrollmentNumber === editingStudent.enrollmentNumber
            ? { ...s, ...payload } 
            : s,
        ),
      );
      setEditingStudent(null);
    } catch (err) {
      console.error("Error updating student:", err);
      setEditErrors({
        submit: err.response?.data?.message || "Failed to update student.",
      });
    } finally {
      setSavingEdit(false);
    }
  };

  const handleDeleteConfirm = async (enrollmentNumber) => {
    try {
      await deleteStudent(enrollmentNumber);

      setStudents((prev) =>
        prev.filter((s) => s.enrollmentNumber !== enrollmentNumber),
      );
      setDeletingStudent(null);

      if (paginatedStudents.length === 1 && page > 1) {
        setPage(page - 1);
      }
    } catch (err) {
      console.error("Error deleting student:", err);
      alert(
        err.response?.data?.message ||
          "Failed to delete student. Please try again.",
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Students
          </h1>
          <p className="mt-1 text-gray-500 text-sm">
            Manage registered ICT students.
          </p>
        </div>

        <Button onClick={() => navigate("/admin/student-registration")}>
          + Register Student
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <StudentSearch
          value={search}
          onChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
        />
        <StudentFilters
          batch={batch}
          setBatch={(value) => {
            setBatch(value);
            setPage(1);
          }}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          <StudentsTable
            students={paginatedStudents}
            onView={setViewingStudent}
            onEdit={(student) => {
              setEditingStudent(student);
              setEditErrors({});
            }}
            onDelete={setDeletingStudent}
            onRegister={() => navigate("/admin/student-registration")}
          />

          {filteredStudents.length > 0 && (
            <StudentPagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}

      <StudentDetailsModal
        student={viewingStudent}
        onClose={() => setViewingStudent(null)}
      />

      <StudentEditModal
        student={editingStudent}
        errors={editErrors}
        onChange={setEditingStudent}
        onSave={handleEditSave}
        onCancel={() => setEditingStudent(null)}
        loading={savingEdit}
      />

      <DeleteStudentModal
        student={deletingStudent}
        onCancel={() => setDeletingStudent(null)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}

export default Students;