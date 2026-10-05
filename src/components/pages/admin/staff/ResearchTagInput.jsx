import { useState } from "react";
import { X, Plus } from "lucide-react";

function ResearchTagInput({ tags, onChange }) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const value = input.trim();
    if (!value || tags.includes(value)) return;

    onChange([...tags, value]);
    setInput("");
  };

  const removeTag = (tag) => {
    onChange(tags.filter((t) => t !== tag));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        Research Interests
      </label>

      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Artificial Intelligence"
          className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={addTag}
          className="flex items-center gap-1 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-medium text-sm hover:bg-blue-100"
        >
          <Plus className="h-4 w-4" /> Add
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm"
          >
            {tag}
            <button type="button" onClick={() => removeTag(tag)}>
              <X className="h-3.5 w-3.5" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ResearchTagInput;
