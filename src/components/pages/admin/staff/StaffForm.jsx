import { Trash2 } from "lucide-react";
import { useState } from "react";
import StaffPhotoUpload from "./StaffPhotoUpload";
import ResearchTagInput from "./ResearchTagInput";
import {
  designations,
  employmentTypes,
} from "../../../../data/admin/staff/staffCategories";

function StaffForm({ staff, errors, onChange, isEditing }) {
  const [qualificationInput, setQualificationInput] = useState("");

  const handleChange = (e) => {
    onChange({ ...staff, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (photoData) => {
    onChange({
      ...staff,
      photoFile: photoData?.file ?? null,
      photoPreview: photoData?.previewUrl ?? "",
    });
  };

  const addQualification = () => {
    const value = qualificationInput.trim();
    if (!value) return;

    onChange({ ...staff, qualifications: [...staff.qualifications, value] });
    setQualificationInput("");
  };

  const removeQualification = (index) => {
    onChange({
      ...staff,
      qualifications: staff.qualifications.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold text-gray-900">
        Academic Staff Information
      </h2>

      <StaffPhotoUpload
        preview={staff.photoPreview}
        onChange={handlePhotoChange}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="sm:col-span-2 flex flex-col sm:flex-row gap-5">
          <div className="sm:w-1/4">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <select
              name="honorific"
              value={staff.honorific}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="MR">Mr.</option>
              <option value="MRS">Mrs.</option>
              <option value="MS">Ms.</option>
              <option value="DR">Dr.</option>
              <option value="PROFESSOR">Prof.</option>
              <option value="SENIOR_PROFESSOR">Snr. Prof.</option>
            </select>
          </div>
          <div className="sm:w-3/4">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={staff.name}
              onChange={handleChange}
              placeholder="e.g. N. Perera"
              className={`mt-1 w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-200 focus:ring-blue-500"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Designation
          </label>
          <select
            name="designation"
            value={staff.designation}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 bg-white ${
              errors.designation
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-200 focus:ring-blue-500"
            }`}
          >
            <option value="">Select Designation</option>
            {designations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors.designation && (
            <p className="mt-1 text-xs text-red-500">{errors.designation}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Employment Type
          </label>
          <select
            name="employmentType"
            value={staff.employmentType}
            onChange={handleChange}
            className={`mt-1 w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 bg-white ${
              errors.employmentType
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-200 focus:ring-blue-500"
            }`}
          >
            <option value="">Select Employment Type</option>
            {employmentTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.employmentType && (
            <p className="mt-1 text-xs text-red-500">{errors.employmentType}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={staff.phone}
            onChange={handleChange}
            placeholder="0552226676"
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            University Email
          </label>
          <input
            type="email"
            name="email"
            value={staff.email}
            onChange={handleChange}
            disabled={isEditing}
            placeholder="perera@uwu.ac.lk"
            className={`mt-1 w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-400 focus:ring-red-300"
                : "border-gray-200 focus:ring-blue-500"
            } ${isEditing ? "bg-gray-100 cursor-not-allowed text-gray-500" : "bg-white"}`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Qualifications
        </label>

        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={qualificationInput}
            onChange={(e) => setQualificationInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addQualification();
              }
            }}
            placeholder="e.g. M.Sc. (University of Peradeniya)"
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={addQualification}
            className="px-4 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-medium text-sm hover:bg-blue-100"
          >
            + Add
          </button>
        </div>

        {errors.qualifications && (
          <p className="mt-1 text-xs text-red-500">{errors.qualifications}</p>
        )}

        <div className="mt-3 space-y-2">
          {staff.qualifications.map((q, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5"
            >
              <span className="text-sm text-gray-700">✓ {q}</span>
              <button type="button" onClick={() => removeQualification(index)}>
                <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ResearchTagInput
        tags={staff.research}
        onChange={(research) => onChange({ ...staff, research })}
      />
    </div>
  );
}

export default StaffForm;