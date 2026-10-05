import { CheckCircle2, Mail } from "lucide-react";
import Button from "../../../common/ui/Card";

function Row({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
}

function StudentSuccessModal({ result, onRegisterAnother, onViewStudents }) {
  if (!result) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
        <CheckCircle2 className="h-14 w-14 text-green-600 mx-auto" />

        <h2 className="mt-4 text-lg font-bold text-gray-900">
          Student Registered Successfully
        </h2>

        <div className="mt-6 text-left">
          <Row label="Full Name" value={result.fullName} />
          <Row label="Enrollment Number" value={result.enrollmentNumber} />
          <Row label="Batch" value={result.batch} />
        </div>

        {result.sendEmail && (
          <div className="mt-5 flex items-start gap-3 rounded-lg bg-blue-50 p-4 text-left">
            <Mail className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
              Login credentials have been generated. An email containing the
              username and temporary password has been sent to{" "}
              <span className="font-semibold">{result.email}</span>.
            </p>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2">
          <Button onClick={onRegisterAnother} className="w-full">
            Register Another
          </Button>

          <button
            onClick={onViewStudents}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            View Students
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentSuccessModal;
