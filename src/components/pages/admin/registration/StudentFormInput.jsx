function StudentFormInput({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  disabled = false,
}) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-400 focus:ring-red-300"
            : "border-gray-200 focus:ring-blue-500"
        } ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-500" : "bg-white"}`}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default StudentFormInput;
