import axiosInstance from "./axios";

export const registerStudent = async (studentData) => {
  const response = await axiosInstance.post(
    "/api/admin/register-student",
    studentData,
  );
  return response.data;
};

export const getAllStudents = async () => {
  const response = await axiosInstance.get("/api/admin");
  return response.data;
};

export const deleteStudent = async (enrollmentNumber) => {
  const response = await axiosInstance.delete("/api/admin/delete-student", {
    data: { enrollmentNumber: enrollmentNumber }
  });
  return response.data;
};

export const updateStudent = async (enrollmentNumber, studentData) => {
  const response = await axiosInstance.put(`/api/admin/update-profile`, studentData);
  return response.data;
}