import { UserCircle } from "lucide-react";
import Card from "../../../common/ui/Card";
import batches from "../../../../data/admin/intake/batches";

function StudentPreviewCard({ student }) {
  const hasContent =
    student.fullName || student.enrollmentNumber || student.email;
  const batchLabel =
    batches.find((b) => b.id === student.batch)?.name || student.batch;

  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Preview</h2>

      {!hasContent ? (
        <p className="text-sm text-gray-400">
          Start filling in the form to see a live preview.
        </p>
      ) : (
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
            <UserCircle className="h-7 w-7 text-blue-700" />
          </div>

          <div className="space-y-2 text-sm">
            <p className="font-semibold text-gray-900">
              {student.fullName || "—"}
            </p>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Enrollment No
              </p>
              <p className="text-gray-700">{student.enrollmentNumber || "—"}</p>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Batch
              </p>
              <p className="text-gray-700">{batchLabel || "—"}</p>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Email
              </p>
              <p className="text-blue-700">{student.email || "—"}</p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

export default StudentPreviewCard;
