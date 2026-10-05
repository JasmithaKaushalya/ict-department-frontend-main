import axiosInstance from "./axios";

export const loginUser = async (loginData) => {
  const response = await axiosInstance.post("/api/auth/login", loginData);
  return response.data;
};