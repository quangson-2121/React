import React, { createContext, useState, useContext, useEffect } from "react";
import * as UserService from "../services/UserService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  // Lưu currentUser vào localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // Đăng ký
  const register = async (fullname, email, password) => {
    const users = await UserService.getUsers();
    if (users.find(u => u.email === email)) {
      return { success: false, message: "Email đã tồn tại" };
    }
    const newUser = await UserService.addUser({ fullname, email, password });
    setCurrentUser(newUser);
    return { success: true, message: "Đăng ký thành công" };
  };

  // Đăng nhập
  const login = async (email, password) => {
    const users = await UserService.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true, message: "Đăng nhập thành công" };
    }
    return { success: false, message: "Sai email hoặc mật khẩu" };
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
