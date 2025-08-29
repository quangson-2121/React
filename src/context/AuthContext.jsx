import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // lưu tạm danh sách user
  const [currentUser, setCurrentUser] = useState(null);

  const register = (username, password) => {
    // kiểm tra đã tồn tại chưa
    const exists = users.find((u) => u.username === username);
    if (exists) {
      return { success: false, message: "Tên tài khoản đã tồn tại" };
    }
    // thêm user mới vào danh sách
    setUsers([...users, { username, password }]);
    return { success: true, message: "Đăng ký thành công" };
  };

  const login = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return { success: true, message: "Đăng nhập thành công" };
    }
    return { success: false, message: "Sai tài khoản hoặc mật khẩu" };
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ users, currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
