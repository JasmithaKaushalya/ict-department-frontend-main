import Card from "../../../common/ui/Card";

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900 text-right">
        {value || "—"}
      </span>
    </div>
  );
}

function PersonalInfo({ student }) {
  return (
    <Card>
      <h3 className="text-lg font-bold text-gray-900">Personal Information</h3>

      <div className="mt-4">
        <InfoRow label="Registration No" value={student.enrollmentNumber} />
        <InfoRow label="Full Name" value={student.fullName} />
        <InfoRow label="Name with Initials" value={student.nameWithInitials} />
        <InfoRow label="Email" value={student.email} />
        <InfoRow label="Phone" value="—" />
        <InfoRow label="NIC" value="—" />
      </div>
    </Card>
  );
}

export default PersonalInfo;
