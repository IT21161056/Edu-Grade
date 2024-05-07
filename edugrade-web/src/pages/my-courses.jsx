import React, { useContext, useEffect, useState } from "react";

import Container from "../components/common/container";
import CourseCard from "../components/ui/card";
import { Input, useSelect } from "@material-tailwind/react";
import { Search } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const myCourses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  const [activeTab, setActiveTab] = React.useState("html");

  const getMyCourses = async () => {
    const courses = await axios.post(
      "http://localhost:8000/api/learner-service/enrollment/get-all",
      { userId: user._id }
    );

    setCourses(courses.data);
  };

  console.log(courses);

  useEffect(() => {
    getMyCourses();
  }, []);

  return (
    <>
      <div className="bg-black text-white">
        <Container className="pt-4 pb-2">
          <h1 className="text-3xl">My Learning</h1>
          <h2 className="mt-5">All Courses</h2>
        </Container>
      </div>
      <Container>
        <div className=" flex justify-end mt-10 mb-8">
          <div>
            <Input
              name="courseName"
              className="w-[300px]"
              label="Search..."
              placeholder="Search..."
              icon={<Search />}
              labelProps={{
                className: "before:!mr-0 after:!ml-0",
              }}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-4">
          {courses.map((data, index) => (
            <CourseCard data={data} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default MyCourses;
