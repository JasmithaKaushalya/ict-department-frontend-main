import Card from "../../../common/ui/Card";
import overview from "../../../../data/admin/dashboard/academicOverview";

function Row({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b last:border-0">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function AcademicOverview() {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-5">Academic Overview</h2>

      <div className="space-y-1">
        <Row label="Department" value={overview.department} />
        <Row label="Degree Programme" value={overview.degree} />
        <Row label="Academic Years" value={overview.academicYears} />
        <Row label="Semesters" value={overview.semesters} />
        <Row label="Current Intake" value={overview.currentIntake} />
      </div>
    </Card>
  );
}

export default AcademicOverview;
