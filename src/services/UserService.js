import axiosClient from "../api/mockfast";

export const getUsers = async () => {
  const res = await axiosClient.get("/users"); // sẽ gọi đến http://localhost:3001/api/users
  return res.data;
};
