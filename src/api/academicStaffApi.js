import axiosInstance from "./axios";

export const getAllAcademicStaff = async () => {
  const response = await axiosInstance.get("/api/academicStaff");
  return response.data;
};

export const addAcademicStaff = async (staffData) => {
  const response = await axiosInstance.post("/api/academicStaff/addAcademicStaff", staffData);
  return response.data;
};

export const updateAcademicStaff = async (email, staffData) => {
  const response = await axiosInstance.put(`/api/academicStaff/updateAcademicStaff/${email}`, staffData);
  return response.data;
};

export const deleteAcademicStaff = async (email) => {
  const response = await axiosInstance.delete(`/api/academicStaff/${email}`);
  return response.data;
};

export const uploadStaffPicture = async (email, file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axiosInstance.post(`/api/academicStaff/addPicture/${email}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};