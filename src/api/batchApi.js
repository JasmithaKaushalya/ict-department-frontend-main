import axiosInstance from "./axios";

export const getAllBatches = async () => {
  const response = await axiosInstance.get("/api/batches");
  return response.data;
};

export const getBatch = async (batchName) => {
  const response = await axiosInstance.get(`/api/batches/${batchName}`);
  return response.data;
};

export const createBatch = async (batchData) => {
  const response = await axiosInstance.post("/api/batches", batchData);
  return response.data;
};

export const updateBatch = async (batchName, batchData) => {
  const response = await axiosInstance.put(`/api/batches/${batchName}`, batchData);
  return response.data;
};

export const deleteBatch = async (batchName) => {
  const response = await axiosInstance.delete(`/api/batches/${batchName}`);
  return response.data;
};