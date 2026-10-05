import axiosInstance from "./axios";

export const addResult = async (resultData) => {
  const response = await axiosInstance.post("/api/results", resultData);
  return response.data;
};

export const getStudentResults = async (enrollmentNumber) => {
  const response = await axiosInstance.post("/api/results/student", {
    enrollmentNumber: enrollmentNumber,
  });
  return response.data;
};

export const getStudentResultsBySemester = async (
  enrollmentNumber,
  semesterEnum,
) => {
  const response = await axiosInstance.post(
    `/api/results/student/${semesterEnum}`,
    {
      enrollmentNumber: enrollmentNumber,
    },
  );
  return response.data;
};
export const getMyResults = async () => {
  const response = await axiosInstance.get("/api/results/my-results");
  return response.data;
};

export const deleteResult = async (subjectCode, enrollmentNumber) => {
  const response = await axiosInstance.post(`/api/results/delete`, {
    subjectCode: subjectCode,
    enrollmentNumber: enrollmentNumber,
  });
  return response.data;
};
