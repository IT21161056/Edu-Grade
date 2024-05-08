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
      <Container>
        {course && (
          <video className="h-full w-full rounded-lg" controls>
            <source src={contents[contentIndex].source} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <button onClick={() => setContentIndex((prv) => prv + 1)}>next</button>
      </Container>
    </div>
  );
};

export default WatchCourse;
