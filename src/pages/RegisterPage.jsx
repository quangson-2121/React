import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import "../components/AuthPage.css";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth(); 
  const handleRegister = async (values) => {
  const { fullname ,email , password } = values ;
  const result = register(fullname, email, password); // dùng context
    if (result.success) {
      alert("Đăng ký thành công!");
      console.log(result);
      navigate("/login");
    } else {
      alert(result.message);
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-tabs">
          <Link to="/login">LOG IN</Link>
          <span className="active">SIGN UP</span>
        </div>

        <AuthForm type="register" onSubmit={handleRegister} />

        <div className="auth-footer">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
