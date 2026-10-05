import { useRef } from "react";
import { Camera, X } from "lucide-react";

function StaffPhotoUpload({ preview, onChange }) {
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    onChange({ file, previewUrl: url });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">Profile Photo</label>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="mt-2 relative rounded-xl border-2 border-dashed border-gray-200 h-40 w-40 flex flex-col items-center justify-center text-center hover:border-blue-300 transition-colors overflow-hidden"
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={() => onChange(null)}
              className="absolute top-2 right-2 bg-white/90 rounded-full p-1 shadow hover:bg-white transition-colors"
            >
              <X className="h-4 w-4 text-gray-700" />
            </button>
          </>
        ) : (
          <>
            <Camera className="h-8 w-8 text-gray-300" />
            <p className="mt-2 text-xs text-gray-500 hidden sm:block">
              Drag image
            </p>
            <button
              type="button"
              onClick={() => inputRef.current.click()}
              className="mt-1 text-sm font-medium text-blue-700 hover:text-blue-800"
            >
              Browse
            </button>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
}

export default StaffPhotoUpload;
