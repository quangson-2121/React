// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const register = (fullname, email, password) => {
    const exists = users.find((u) => u.email === email);
    if (exists) {
      return { success: false, message: "Tên tài khoản đã tồn tại" };
    }
    const newUser = { id: Date.now(), fullname, email, password };
    setUsers([...users, newUser]);
    return { success: true, message: "Đăng ký thành công" };
  };

  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true, message: "Đăng nhập thành công" };
    }
    return { success: false, message: "Sai tài khoản hoặc mật khẩu" };
  };

  const logout = () => setCurrentUser(null);

  // 🆕 CRUD
  const addUser = (user) => setUsers([...users, { ...user, id: Date.now() }]);
  const updateUser = (id, updated) =>
    setUsers(users.map((u) => (u.id === id ? { ...u, ...updated } : u)));
  const deleteUser = (id) => setUsers(users.filter((u) => u.id !== id));

  return (
    <AuthContext.Provider
      value={{ users, currentUser, register, login, logout, addUser, updateUser, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
