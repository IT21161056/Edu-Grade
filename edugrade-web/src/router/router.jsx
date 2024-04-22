import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import Login from "../pages/auth/login";
import ResetPassword from "../pages/auth/resetPassword";
import Register from "../pages/auth/register";
import Profile from "../pages/profile";
import Home from "../pages/home";
import CreateCourse from "../pages/createCourse";

const Router = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/create-course" element={<CreateCourse />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
