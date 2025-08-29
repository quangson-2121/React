import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import "../components/AuthPage.css";

function LoginPage() {
 const navigate = useNavigate();

  const handleLogin = (values) => {
    console.log("Login values:", values);

    // Lấy user đã đăng ký trong localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Chưa có tài khoản nào được đăng ký!");
      return;
    }

    // Kiểm tra email + password
    if (
      values.email === savedUser.email &&
      values.password === savedUser.password
    ) {
      alert("Đăng nhập thành công!");
      navigate("/dashboard");
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-tabs">
          <span className="active">LOG IN</span>
          <Link to="/register">SIGN UP</Link>
        </div>

        <AuthForm type="login" onSubmit={handleLogin} />

        <div className="auth-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <div className="auth-footer">
          <a href="/forgot">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
