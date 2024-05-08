import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "../components/common/container";

const WatchCourse = () => {
  const [course, setCourse] = useState();
  const [contents, setContents] = useState([]);
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

  return (
    <div className="">
      <Container>
        <video className="h-full w-full rounded-lg" controls>
          <source src={contents[0]?.source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
    </div>
  );
};

export default WatchCourse;
