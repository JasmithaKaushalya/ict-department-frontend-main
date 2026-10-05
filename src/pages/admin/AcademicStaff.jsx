import { useState, useEffect } from "react";
import Button from "../../components/common/ui/Button";
import StaffSearch from "../../components/pages/admin/staff/StaffSearch";
import StaffTable from "../../components/pages/admin/staff/StaffTable";
import StaffForm from "../../components/pages/admin/staff/StaffForm";
import StaffDetailsModal from "../../components/pages/admin/staff/StaffDetailsModal";
import DeleteStaffModal from "../../components/pages/admin/staff/DeleteStaffModal";
import StudentPagination from "../../components/pages/admin/students/StudentPagination";
import StaffFilters from "../../components/pages/admin/staff/StaffFilters";
import {
  getAllAcademicStaff,
  addAcademicStaff,
  updateAcademicStaff,
  deleteAcademicStaff,
  uploadStaffPicture,
} from "../../api/academicStaffApi";

const PAGE_SIZE = 6;

// Mappings for the exact Backend ENUMs
const TITLE_MAP_TO_FRONTEND = {
  SENIOR_PROFESSOR: "Senior Professor",
  PROFESSOR: "Professor",
  SENIOR_LECTURER: "Senior Lecturer",
  LECTURER: "Lecturer",
  LECTURER_PROBATIONARY: "Probationary Lecturer",
  LECTURER_TEMPORARY: "Temporary Lecturer",
  DEMONSTRATOR: "Demonstrator",
  DEMONSTRATOR_TEMPORARY: "Temporary Demonstrator",
};

const TITLE_MAP_TO_BACKEND = {
  "Senior Professor": "SENIOR_PROFESSOR",
  Professor: "PROFESSOR",
  "Senior Lecturer": "SENIOR_LECTURER",
  Lecturer: "LECTURER",
  "Probationary Lecturer": "LECTURER_PROBATIONARY",
  "Temporary Lecturer": "LECTURER_TEMPORARY",
  Demonstrator: "DEMONSTRATOR",
  "Temporary Demonstrator": "DEMONSTRATOR_TEMPORARY",
};

const emptyStaff = {
  honorific: "MR", // Added separated honorific
  name: "",
  designation: "",
  employmentType: "",
  phone: "",
  email: "",
  qualifications: [],
  research: [],
  photoFile: null,
  photoPreview: "",
};

function AcademicStaff() {
  const [staffList, setStaffList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [designation, setDesignation] = useState("All Designations");
  const [employment, setEmployment] = useState("All Employment Types");
  const [page, setPage] = useState(1);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(emptyStaff);
  const [formErrors, setFormErrors] = useState({});
  const [editingEmail, setEditingEmail] = useState(null);
  const [saving, setSaving] = useState(false);

  const [viewingStaff, setViewingStaff] = useState(null);
  const [deletingStaff, setDeletingStaff] = useState(null);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      setIsLoading(true);
      const data = await getAllAcademicStaff();

      const mappedData = data.map((s) => {
        // Extract honorific and raw name for editing
        let extractedHonorific = "MR";
        let cleanName = s.displayName;

        if (s.displayName && s.displayName.includes(". ")) {
          const parts = s.displayName.split(". ");
          extractedHonorific = parts[0];
          cleanName = parts.slice(1).join(". "); // Gets the rest of the name
        }

        // Map backend enum to frontend readable string
        const mappedDesignation =
          TITLE_MAP_TO_FRONTEND[s.title] ||
          (s.title ? s.title.replace(/_/g, " ") : "");

        return {
          honorific: extractedHonorific,
          name: cleanName,
          displayName: s.displayName, // Keep full display name for the table view
          email: s.email,
          phone: s.phoneNumber ? `0${s.phoneNumber}` : "",
          designation: mappedDesignation,
          employmentType:
            s.positions && s.positions.length > 0
              ? s.positions[0]
              : "Permanent",
          qualifications: s.qualifications || [],
          research: s.researchInterests || [],
          photo: s.picture ? `${import.meta.env.VITE_API_BASE_URL}${s.picture}` : null,
        };
      });

      setStaffList(mappedData);
      setError(null);
    } catch (err) {
      console.error("Error fetching academic staff:", err);
      setError("Failed to load academic staff from server.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredStaff = staffList.filter((s) => {
    const matchesSearch =
      s.displayName.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.designation.toLowerCase().includes(search.toLowerCase());

    const matchesDesignation =
      designation === "All Designations" ||
      s.designation.toUpperCase() === designation.toUpperCase();

    const matchesEmployment =
      employment === "All Employment Types" || s.employmentType === employment;

    return matchesSearch && matchesDesignation && matchesEmployment;
  });

  const totalPages = Math.max(1, Math.ceil(filteredStaff.length / PAGE_SIZE));
  const paginatedStaff = filteredStaff.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const openAddForm = () => {
    setFormData(emptyStaff);
    setFormErrors({});
    setEditingEmail(null);
    setShowForm(true);
  };

  const openEditForm = (member) => {
    setFormData({ ...member, photoFile: null, photoPreview: member.photo });
    setFormErrors({});
    setEditingEmail(member.email);
    setShowForm(true);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.designation.trim())
      newErrors.designation = "Designation is required";
    if (!formData.employmentType.trim())
      newErrors.employmentType = "Employment type is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.qualifications.length === 0)
      newErrors.qualifications = "At least one qualification is required";

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;

    setSaving(true);

    try {
      const phoneInt = parseInt(
        formData.phone.replace(/\D/g, "").slice(-9) || "0",
        10,
      );

      // Accurately map dropdown value to Backend ENUM
      const formattedTitle =
        TITLE_MAP_TO_BACKEND[formData.designation] ||
        formData.designation.toUpperCase().replace(/ /g, "_");

      const payload = {
        name: formData.name.trim(),
        honorific: formData.honorific, // Use dedicated dropdown directly
        email: formData.email,
        phoneNumber: phoneInt,
        positions: [formData.employmentType],
        title: formattedTitle,
        qualifications: formData.qualifications,
        researchInterests: formData.research,
      };

      if (editingEmail) {
        await updateAcademicStaff(editingEmail, payload);
      } else {
        await addAcademicStaff(payload);
      }

      if (formData.photoFile) {
        await uploadStaffPicture(formData.email, formData.photoFile);
      }

      await fetchStaff();
      setSaving(false);
      setShowForm(false);
    } catch (err) {
      console.error("Error saving staff:", err);
      setFormErrors({ name: "Failed to save staff member to server." });
      setSaving(false);
    }
  };

  const handleDeleteConfirm = async (email) => {
    try {
      await deleteAcademicStaff(email);
      setStaffList((prev) => prev.filter((s) => s.email !== email));
      setDeletingStaff(null);
    } catch (err) {
      console.error("Error deleting staff:", err);
      alert("Failed to delete staff member.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Academic Staff
          </h1>
          <p className="mt-1 text-gray-500 text-sm">
            Manage lecturers and demonstrators.
          </p>
        </div>

        <Button onClick={openAddForm}>+ Add Staff Member</Button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <StaffSearch
          value={search}
          onChange={(v) => {
            setSearch(v);
            setPage(1);
          }}
        />
        <StaffFilters
          designation={designation}
          setDesignation={(v) => {
            setDesignation(v);
            setPage(1);
          }}
          employment={employment}
          setEmployment={(v) => {
            setEmployment(v);
            setPage(1);
          }}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <StaffTable
          staff={paginatedStaff}
          onView={setViewingStaff}
          onEdit={openEditForm}
          onDelete={setDeletingStaff}
        />
      )}

      <StudentPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-xl max-h-[90vh] overflow-y-auto">
            <StaffForm
              staff={formData}
              errors={formErrors}
              onChange={setFormData}
              isEditing={!!editingEmail}
            />

            <div className="mt-8 flex gap-3">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save Staff"}
              </Button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <StaffDetailsModal
        staff={viewingStaff}
        onClose={() => setViewingStaff(null)}
      />

      <DeleteStaffModal
        staff={deletingStaff}
        onCancel={() => setDeletingStaff(null)}
        onConfirm={() => handleDeleteConfirm(deletingStaff.email)}
      />
    </div>
  );
}

export default AcademicStaff;
