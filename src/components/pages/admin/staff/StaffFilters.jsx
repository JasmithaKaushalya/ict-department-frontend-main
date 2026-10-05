import { designations, employmentTypes } from "../../../../data/admin/staff/staffCategories";

function StaffFilters({
  designation,
  setDesignation,
  employment,
  setEmployment,
}) {
  return (
    <div className="flex gap-3">
      <select
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        className="rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All Designations">All Designations</option>
        {designations.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        value={employment}
        onChange={(e) => setEmployment(e.target.value)}
        className="rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All Employment Types">All Employment Types</option>
        {employmentTypes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StaffFilters;
