import axiosInstance from "./axios";

export const getAllSubjects = async () => {
  const response = await axiosInstance.get("/api/subjects");
  return response.data;
};

export const getSubjectsBySemester = async (semester) => {
  const response = await axiosInstance.get(
    `/api/subjects/semester/${semester}`,
  );
  return response.data;
};

export const addSubject = async (subjectData) => {
  const response = await axiosInstance.post("/api/subjects", subjectData);
  return response.data;
};
