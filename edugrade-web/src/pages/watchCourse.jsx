import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "../components/common/container";

const WatchCourse = () => {
  const [course, setCourse] = useState();
  const [contents, setContents] = useState([]);
  const [contentIndex, setContentIndex] = useState(0);
  const { id } = useParams();

  const getCourse = async () => {
    try {
      await axios
        .get(`http://localhost:8000/api/course/v1/${id}`)
        .then((res) => {
          setCourse(res.data);
          setContents(res.data.contents);
        });
    } catch (err) {
      console.log("error fetching the course", err);
    }
  };

  console.log(course);
  useEffect(() => {
    getCourse();
  }, []);

  console.log("contents[0]?.source >", contents[0]?.source);

  return (
    <div className="">
      <Container className="grid grid-cols-4 bg-yellow-500 h-full px-0">
        <div className="col-span-3 bg-red-600 max-h-[560px]">
          {course && (
            <video className="h-full w-full rounded-lg" controls>
              <source src={contents[contentIndex].source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="col-span-1 bg-green-500 h-full overflow-auto max-h-[560px]">
          {course &&
            [1, 2, 3, 4, 5, 6].map((content, index) => (
              <div className="w-full h-[160px] mb-4 bg-purple-500">{index}</div>
            ))}
        </div>
        <button onClick={() => setContentIndex((prv) => prv + 1)}>next</button>
      </Container>
    </div>
  );
};

export default WatchCourse;
