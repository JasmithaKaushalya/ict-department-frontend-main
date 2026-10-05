import { useState } from "react";
import { BookOpen, Plus } from "lucide-react";
import Card from "../../../common/ui/Card";
import Button from "../../../common/ui/Button";
import semesters from "../../../../data/courses/semesters";
import { addSubject } from "../../../../api/subjectApi";

function AddSubjectForm({ onSubjectAdded }) {
  const [formData, setFormData] = useState({
    subjectCode: "",
    subjectName: "",
    creditHours: "",
    semester: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.subjectCode.trim() || !formData.subjectName.trim() || !formData.creditHours || !formData.semester) {
      setError("Please fill in all required fields.");
      return;
    }

    // Safety check: Ensure semester matches backend Enum (e.g., "SEMESTER_1")
    const formattedSemester = formData.semester.startsWith("SEMESTER_") 
      ? formData.semester 
      : `SEMESTER_${formData.semester}`;

    const subjectData = {
      subjectCode: formData.subjectCode.trim(),
      subjectName: formData.subjectName.trim(),
      creditHours: Number(formData.creditHours),
      semester: formattedSemester,
    };

    try {
      setLoading(true);

      const newSubject = await addSubject(subjectData);

      setSuccess("Course module added successfully.");
      setFormData({
        subjectCode: "",
        subjectName: "",
        creditHours: "",
        semester: "",
      });

      if (onSubjectAdded) {
        onSubjectAdded(newSubject);
      }
    } catch (error) {
      console.error("Failed to add subject:", error);

      if (error.response?.status === 400) {
        setError(error.response?.data?.message || "Invalid course module information.");
      } else if (error.response?.status === 401) {
        setError("Your session has expired. Please log in again.");
      } else if (error.response?.status === 403) {
        setError("You do not have administrator permission to add course modules.");
      } else {
        setError("Failed to add course module. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
          <BookOpen className="h-5 w-5 text-blue-700" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Add New Course Module
          </h2>
          <p className="text-sm text-gray-500">
            Add a new subject to the department curriculum.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
            {success}
          </div>
        )}

        <div>
          <label className="text-sm font-medium text-gray-700">Subject Code</label>
          <input
            type="text"
            name="subjectCode"
            value={formData.subjectCode}
            onChange={handleChange}
            placeholder="e.g. ICT301"
            disabled={loading}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Subject Name</label>
          <input
            type="text"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleChange}
            placeholder="e.g. Software Engineering"
            disabled={loading}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Credit Hours</label>
          <input
            type="number"
            name="creditHours"
            value={formData.creditHours}
            onChange={handleChange}
            placeholder="e.g. 3"
            min="1"
            disabled={loading}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Semester</label>
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            disabled={loading}
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Semester</option>
            {semesters.map((semester) => (
              <option key={semester.value} value={semester.value}>
                {semester.label}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          <span className="flex items-center justify-center gap-2">
            <Plus className="h-4 w-4" />
            {loading ? "Adding Course Module..." : "Add Course Module"}
          </span>
        </Button>
      </form>
    </Card>
  );
}

export default AddSubjectForm;