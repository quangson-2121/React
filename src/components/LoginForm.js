import React from "react";

function LoginForm({ loginData, setLoginData, onLogin }) {
  return (
    <form onSubmit={onLogin}>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={loginData.username}
        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
      />
      <br />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <br />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}

export default LoginForm;
