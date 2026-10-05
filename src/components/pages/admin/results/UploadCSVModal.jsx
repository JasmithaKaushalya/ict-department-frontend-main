import { useState } from "react";
import { X, Upload, Download, AlertCircle } from "lucide-react";
import Button from "../../../common/ui/Button";
import { getGradeFromMarks } from "../../../../data/admin/results/gradeScale";

function parseCSV(text) {
  const lines = text.trim().split("\n").slice(1); // skip header row
  return lines.map((line, index) => {
    const [enrollmentNumber, marks] = line.split(",").map((v) => v.trim());
    return { row: index + 2, enrollmentNumber, marks };
  });
}

function UploadCSVModal({ students, onClose, onApply }) {
  const [errors, setErrors] = useState([]);
  const [preview, setPreview] = useState(null);

  const downloadTemplate = () => {
    const csv =
      "Enrollment Number,Marks\n" +
      students.map((s) => `${s.enrollmentNumber},`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "marks_template.csv";
    link.click();
  };

  const handleFile = (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const rows = parseCSV(e.target.result);
      const foundErrors = [];
      const validRows = [];

      rows.forEach((row) => {
        const student = students.find(
          (s) => s.enrollmentNumber === row.enrollmentNumber,
        );

        if (!student) {
          foundErrors.push(`Row ${row.row}: Enrollment number not found`);
          return;
        }
        if (row.marks === "" || row.marks === undefined) {
          foundErrors.push(`Row ${row.row}: Marks missing`);
          return;
        }
        const numeric = Number(row.marks);
        if (isNaN(numeric) || numeric < 0) {
          foundErrors.push(`Row ${row.row}: Marks cannot be negative`);
          return;
        }
        if (numeric > 100) {
          foundErrors.push(`Row ${row.row}: Marks exceed 100`);
          return;
        }

        validRows.push({
          enrollmentNumber: row.enrollmentNumber,
          marks: row.marks,
        });
      });

      setErrors(foundErrors);
      setPreview(validRows);
    };

    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Bulk Upload Marks</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <button
          onClick={downloadTemplate}
          className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
        >
          <Download className="h-4 w-4" /> Download CSV Template
        </button>

        <label className="mt-4 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 p-8 text-center cursor-pointer hover:border-blue-300">
          <Upload className="h-8 w-8 text-gray-300" />
          <span className="text-sm text-gray-500">Click to upload CSV</span>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </label>

        {errors.length > 0 && (
          <div className="mt-5 rounded-lg bg-red-50 p-4">
            <div className="flex items-center gap-2 text-red-700 font-medium text-sm mb-2">
              <AlertCircle className="h-4 w-4" /> {errors.length} error(s) found
            </div>
            <ul className="space-y-1">
              {errors.map((err, i) => (
                <li key={i} className="text-xs text-red-600">
                  {err}
                </li>
              ))}
            </ul>
          </div>
        )}

        {preview && preview.length > 0 && (
          <div className="mt-5">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Preview ({preview.length} valid rows)
            </p>
            <div className="max-h-48 overflow-y-auto rounded-lg border border-gray-100">
              {preview.map((row) => {
                const gradeInfo = getGradeFromMarks(row.marks);
                return (
                  <div
                    key={row.enrollmentNumber}
                    className="flex justify-between px-4 py-2 text-sm border-b last:border-0"
                  >
                    <span>{row.enrollmentNumber}</span>
                    <span>
                      {row.marks} ({gradeInfo?.grade})
                    </span>
                  </div>
                );
              })}
            </div>

            <Button onClick={() => onApply(preview)} className="w-full mt-4">
              Save Results
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadCSVModal;
