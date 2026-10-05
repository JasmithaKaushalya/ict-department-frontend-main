import StudentFormInput from "./StudentFormInput";
import StudentFormSelect from "./StudentFormSelect";

function StudentForm({ student, errors, onChange, batches = [], isEditing }) {
  const handleChange = (e) => {
    onChange({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <StudentFormInput
        label="Full Name"
        name="fullName"
        placeholder="John David Smith"
        value={student.fullName || ""}
        onChange={handleChange}
        error={errors.fullName}
      />

      <StudentFormInput
        label="Name with Initials"
        name="nameWithInitials"
        placeholder="J.D. Smith"
        value={student.nameWithInitials || ""}
        onChange={handleChange}
        error={errors.nameWithInitials}
      />

      <StudentFormInput
        label="University Registration Number"
        name="enrollmentNumber"
        placeholder="UWU/ICT/23/019"
        value={student.enrollmentNumber || ""}
        onChange={handleChange}
        error={errors.enrollmentNumber}
        disabled={isEditing}
      />

      <StudentFormInput
        label="Student Email"
        name="email"
        type="email"
        placeholder="john@std.uwu.ac.lk"
        value={student.email || ""}
        onChange={handleChange}
        error={errors.email}
      />

      <StudentFormSelect
        label="Batch"
        name="batchName"
        value={student.batchName || ""}
        onChange={handleChange}
        options={batches}
        placeholder="Select Batch"
        error={errors.batchName}
        disabled={isEditing}
      />
    </div>
  );
}

export default StudentForm;