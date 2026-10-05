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

function AcademicInfo({ student, stats }) {
  return (
    <Card>
      <h3 className="text-lg font-bold text-gray-900">Academic Information</h3>

      <div className="mt-4">
        <InfoRow
          label="Department"
          value="Information and Communication Technology"
        />
        <InfoRow label="Batch" value={student.batchName} />
        <InfoRow label="Account Type" value={student.role} />
        <InfoRow label="Current Semester" value={stats?.currentSemester} />
        <InfoRow label="Current CGPA" value={stats?.cgpa} />
        <InfoRow label="Credits Earned" value={stats?.creditsEarned} />
      </div>
    </Card>
  );
}

export default AcademicInfo;
