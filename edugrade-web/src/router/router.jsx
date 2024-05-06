import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import Login from "../pages/auth/login";
import ResetPassword from "../pages/auth/resetPassword";
import Register from "../pages/auth/register";
import Profile from "../pages/profile";
import Home from "../pages/home";
import CreateCourse from "../pages/createCourse";
import MakePayment from "../pages/MakePayment";
import ViewCourses from "../pages/ViewCourses";
import ViewCourse from "../pages/ViewCourse";
import CourseProgress from "../pages/courseProgress";

import LandingPage from "../pages/LandingPage";
import Order from "../pages/Order";

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
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/view-course" element={<ViewCourses />} />
      <Route path="/view/:id" element={<ViewCourse />} />

      <Route
        path="/create-course"
        element={
          <ProtectedRoute>
            <CreateCourse />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/order" element={<Order />} />
      <Route path="/pay" element={<MakePayment />} />
    </Routes>
  );
};

export default Router;
