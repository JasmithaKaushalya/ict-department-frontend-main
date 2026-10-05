function SendCredentialsCheckbox({ checked, onChange }) {
  return (
    <label className="flex items-center gap-3 text-sm text-gray-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300"
      />
      Send login credentials to student's email
    </label>
  );
}

export default SendCredentialsCheckbox;
