import React from "react";

import Container from "../components/common/container";
import CourseCard from "../components/ui/card";
import { Input } from "@material-tailwind/react";

const myCourses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MyCourses = () => {
  const [activeTab, setActiveTab] = React.useState("html");

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
              labelProps={{
                className: "before:!mr-0 after:!ml-0",
              }}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-4">
          {myCourses.map((data, index) => (
            <CourseCard />
          ))}
        </div>
      </Container>
    </>
  );
};

export default MyCourses;
