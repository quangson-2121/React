import React, { useState, useEffect } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import DataTable from "./components/DataTable";
import { fetchApiData } from "./services/api";

function App() {
  const [step, setStep] = useState("register");
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  // useEffect để tự động gọi API khi đăng nhập thành công
  useEffect(() => {
    if (!isLoggedIn) return;

    fetchApiData()
      .then((data) => {
        setApiData(data);
        setStep("table");
      })
      .catch((err) => {
        setError(err.message);
        console.error("Lỗi khi gọi API:", err);
      });
  }, [isLoggedIn]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!userData.username || !userData.password) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }
    alert("Đăng ký thành công!");
    setStep("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginData.username === userData.username &&
      loginData.password === userData.password
    ) {
      alert("Đăng nhập thành công!");
      setIsLoggedIn(true);
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {step === "register" && (
        <RegisterForm
          userData={userData}
          setUserData={setUserData}
          onRegister={handleRegister}
        />
      )}

      {step === "login" && (
        <LoginForm
          loginData={loginData}
          setLoginData={setLoginData}
          onLogin={handleLogin}
        />
      )}

      {step === "table" && (
        <>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <DataTable apiData={apiData} />
        </>
      )}
    </div>
  );
}

export default App;
