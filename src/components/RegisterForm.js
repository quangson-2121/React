import React from "react";

function RegisterForm({ userData, setUserData, onRegister }) {
  return (
    <form onSubmit={onRegister}>
      <h2>Đăng ký</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <br />
      <button type="submit">Đăng ký</button>
    </form>
  );
}

export default RegisterForm;
