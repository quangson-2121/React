import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import "../components/AuthPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    console.log("Register values:", values);
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/login");
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
