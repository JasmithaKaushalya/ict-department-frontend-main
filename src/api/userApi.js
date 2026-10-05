import axiosInstance from "./axios";

export async function getCurrentUser() {
  const response = await axiosInstance.get("/api/user/me");
  return response.data;
}

export const getMyProfile = async () => {
  const response = await axiosInstance.get("/api/user/me");
  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await axiosInstance.put("/api/user/update-profile", profileData);
  return response.data;
};

export const uploadProfilePicture = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axiosInstance.post("/api/profile-picture/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};