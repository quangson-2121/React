import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import "../components/AuthPage.css";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (values) => {
    const { email, password } = values;
    const result = await login(email, password); // ✅ await
    if (result.success) {
      alert("Đăng nhập thành công!");
      navigate("/dashboard");
    } else {
      alert(result.message);
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
