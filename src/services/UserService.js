import axiosClient from "../api/mockfast";

export const getUsers = async () => {
  const res = await axiosClient.get("/users");
  return res.data;
};
