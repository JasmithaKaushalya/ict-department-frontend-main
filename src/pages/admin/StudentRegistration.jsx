import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/common/ui/Card";
import StudentForm from "../../components/pages/admin/registration/StudentForm";
import StudentFormActions from "../../components/pages/admin/registration/StudentFormActions";
import StudentPreviewCard from "../../components/pages/admin/registration/StudentPreviewCard";
import SendCredentialsCheckbox from "../../components/pages/admin/registration/SendCredentialsCheckbox";
import StudentSuccessModal from "../../components/pages/admin/registration/StudentSuccessModal";
import { registerStudent } from "../../api/studentApi";
import { getAllBatches } from "../../api/batchApi";

const emptyStudent = {
  fullName: "",
  nameWithInitials: "",
  enrollmentNumber: "",
  email: "",
  batchName: "",
};

function StudentRegistration() {
  const navigate = useNavigate();

  const [student, setStudent] = useState(emptyStudent);
  const [errors, setErrors] = useState({});
  const [sendEmail, setSendEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [batches, setBatches] = useState([]);
  const [registeredStudent, setRegisteredStudent] = useState(null);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const data = await getAllBatches();
        const formattedBatches = data.map((b) => ({
          id: b.batchName,
          name: b.batchName,
        }));
        setBatches(formattedBatches);
      } catch (err) {
        console.error("Failed to fetch batches:", err);
      }
    };
    fetchBatches();
  }, []);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const enrollmentRegex = /^UWU\/ICT\/\d{2}\/\d{3}$/;

    if (!student.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!student.nameWithInitials.trim())
      newErrors.nameWithInitials = "Name with initials is required";

    if (!student.enrollmentNumber.trim()) {
      newErrors.enrollmentNumber = "Enrollment number is required";
    } else if (!enrollmentRegex.test(student.enrollmentNumber)) {
      newErrors.enrollmentNumber =
        "Format must be UWU/ICT/YY/NNN (e.g. UWU/ICT/23/019)";
    }

    if (!student.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(student.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!student.batchName.trim()) newErrors.batchName = "Batch is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    setStudent(emptyStudent);
    setErrors({});
    setSendEmail(true);
    setErrorMessage("");
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        fullName: student.fullName,
        nameWithInitials: student.nameWithInitials,
        enrollmentNumber: student.enrollmentNumber,
        email: student.email,
        batchName: student.batchName, 
      };

      await registerStudent(payload);

      setRegisteredStudent({
        fullName: payload.fullName,
        enrollmentNumber: payload.enrollmentNumber,
        batch: payload.batchName,
        email: payload.email,
        sendEmail: sendEmail,
      });
    } catch (error) {
      console.error("Student registration failed:", error);

      if (error.response?.status === 400) {
        setErrorMessage(
          error.response?.data?.message ||
            "Invalid student information. Please check your details.",
        );
      } else if (error.response?.status === 401) {
        setErrorMessage("Your session has expired. Please log in again.");
      } else if (error.response?.status === 403) {
        setErrorMessage("You do not have permission to register students.");
      } else {
        setErrorMessage("Unable to register student. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterAnother = () => {
    setRegisteredStudent(null);
    handleReset();
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Student Registration
        </h1>
        <p className="mt-1 text-gray-500 text-sm">
          Register ICT students into the department system.
        </p>
      </div>

      {errorMessage && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <StudentForm
              student={student}
              errors={errors}
              onChange={setStudent}
              batches={batches}
            />

            <div className="mt-6 pt-6 border-t border-gray-100">
              <SendCredentialsCheckbox
                checked={sendEmail}
                onChange={setSendEmail}
              />
            </div>
          </Card>

          <StudentFormActions
            onSubmit={handleSubmit}
            onReset={handleReset}
            isEditing={false}
            loading={loading}
          />
        </div>

        <StudentPreviewCard student={student} />
      </div>

      {/* Success Modal */}
      {registeredStudent && (
        <StudentSuccessModal
          result={registeredStudent}
          onRegisterAnother={handleRegisterAnother}
          onViewStudents={() => navigate("/admin/students")}
        />
      )}
    </div>
  );
}

export default StudentRegistration;