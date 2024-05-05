import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const CourseProgress = () => {
  const { user } = useContext(AuthContext);

  const fetchCourse = async () => {
    await axios.post("");
  };

  return <div>CourseProgress</div>;
};

export default CourseProgress;
