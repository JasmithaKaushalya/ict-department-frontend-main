import { useRef, useState } from "react";
import { Camera, Loader2 } from "lucide-react";
import Card from "../../../common/ui/Card";
import { uploadProfilePicture } from "../../../../api/userApi";

function ProfileAvatar({ student, onPictureUpdate }) {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const imageUrl = student.profilePicture 
    ? `${import.meta.env.VITE_API_BASE_URL}${student.profilePicture}` 
    : "/images/staff/default.jpg";

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      await uploadProfilePicture(file);
      if (onPictureUpdate) onPictureUpdate();
    } catch (error) {
      console.error("Upload failed", error);
      alert(error.response?.data?.message || "Failed to upload profile picture.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
      <div className="relative group">
        <img
          src={imageUrl}
          alt={student.fullName}
          className={`w-28 h-28 rounded-full object-cover border-4 border-blue-100 transition-opacity ${uploading ? 'opacity-50' : 'opacity-100'}`}
        />
        
        <button 
          onClick={() => !uploading && fileInputRef.current?.click()}
          className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          disabled={uploading}
        >
          {uploading ? (
            <Loader2 className="h-8 w-8 text-white animate-spin" />
          ) : (
            <Camera className="h-8 w-8 text-white" />
          )}
        </button>

        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/png, image/jpeg, image/jpg" 
          className="hidden" 
        />
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900">{student.fullName}</h2>
        <p className="mt-1 text-blue-700 font-medium">
          {student.enrollmentNumber}
        </p>
        <p className="mt-1 text-sm text-gray-500">{student.batchName}</p>
      </div>
    </Card>
  );
}

export default ProfileAvatar;