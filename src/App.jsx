import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import UserManagementPage from "./pages/UserManagementPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path ="/users" element= {<UserManagementPage/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
