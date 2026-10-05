function StudentFormSelect({
  label,
  name,
  value,
  onChange,
  options,
  error,
  placeholder = "Select an option",
  disabled = false,
}) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`mt-1 w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-400 focus:ring-red-300"
            : "border-gray-200 focus:ring-blue-500"
        } ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-500" : "bg-white"}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default StudentFormSelect;
