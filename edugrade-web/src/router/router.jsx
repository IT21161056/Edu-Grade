import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import Login from "../pages/auth/login";
import ResetPassword from "../pages/auth/resetPassword";
import Register from "../pages/auth/register";
import Profile from "../pages/profile";
import Home from "../pages/home";
import CreateCourse from "../pages/createCourse";
import ViewCourses from "../pages/ViewCourses";
import MakePayment from "../pages/makePayment";
import CourseProgress from "../pages/courseProgress";
import ViewCourse from "../pages/ViewCourse";
import MyCourses from "../pages/my-courses";
import WatchCourse from "../pages/watchCourse";
import Success from "../pages/paymentSuccess";
import CourseDashboard from "../pages/CourseDashboard";
import { ManageUser } from "../pages/ManageUser";

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

      <Route path="/view-course" element={<ViewCourses />} />
      <Route path="/view/:id" element={<ViewCourse />} />

      <Route path="/my-courses" element={<MyCourses />} />
      <Route path="/my-courses/:id" element={<WatchCourse />} />

      <Route path="/success" element={<Success />} />

      <Route path="/manage-user" element={<ManageUser />} />

      {/* <Route
        path="/create-course"
        element={
          <ProtectedRoute> */}
      <Route path="/create-course" element={<CreateCourse />} />

      {/* </ProtectedRoute>
        }
      /> */}

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/pay" element={<MakePayment />} />
      <Route path="/progress" element={<CourseProgress />} />

      <Route path="/manage-course" element={<CourseDashboard />} />
    </Routes>
  );
};

export default Router;
