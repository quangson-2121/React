// src/services/UserService.js

const USERS_KEY = "users_local";

// Lấy danh sách users từ localStorage
export const getUsers = async () => {
  const saved = localStorage.getItem(USERS_KEY);
  return saved ? JSON.parse(saved) : [];
};

// Thêm user mới
export const addUser = async (user) => {
  const users = await getUsers();
  const newUser = { ...user, id: Date.now() };
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return newUser;
};

// Cập nhật user theo id
export const updateUser = async (id, updated) => {
  const users = await getUsers();
  const newUsers = users.map((u) => (u.id === id ? { ...u, ...updated } : u));
  localStorage.setItem(USERS_KEY, JSON.stringify(newUsers));
  return newUsers.find((u) => u.id === id);
};

// Xóa user theo id
export const deleteUser = async (id) => {
  const users = await getUsers();
  const newUsers = users.filter((u) => u.id !== id);
  localStorage.setItem(USERS_KEY, JSON.stringify(newUsers));
  return id;
};
