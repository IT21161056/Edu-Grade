import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CourseDashboard = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchCourseData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/course/v1");
        setCourseDetails(res.data);
      } catch (err) {
        setError(err.message);
        console.log("Error fetching course data", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourseData();
  }, []);

  const filterCourses = courseDetails.filter((course) => {
    return course.author.toLowerCase().includes(filterQuery.toLowerCase());
  });

  const TABLE_HEAD = ["User Name", "Course Name", "Payment Status"];

  if (error) {
    return (
      <Typography variant="h5" color="red">
        Error Occured : {error}
      </Typography>
    );
  }

  return (
    <Card className="h-full w-full overflow-scroll p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h5">Manage Payments</Typography>
      </div>
      {
        <Input
          type="text"
          label="Search courses here"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      }
      <table className="w-full min-w-max table-auto text-left mt-4">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                <Typography>Loading Table Data...</Typography>
              </td>
            </tr>
          ) : (
            filterCourses.map((course) => (
              <tr key={course.author}>
                <td className="border-b border-blue-gray-100 bg-white p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none"
                  >
                    {course.author}
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-100 bg-white p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none"
                  >
                    {course.courseDescription.substring(0, 20)}...
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-100 bg-white p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none"
                  >
                    {course.courseName}
                  </Typography>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default CourseDashboard;
