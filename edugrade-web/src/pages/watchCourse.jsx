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
      <Container className="grid grid-cols-4 p-4  h-full px-0">
        <div className="col-span-3 max-h-[560px] pr-2 border-r">
          {course && (
            <video className="h-full w-full rounded-lg" controls>
              <source src={contents[0].source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="col-span-1 h-full overflow-auto max-h-[560px] pl-2">
          {course &&
            contents.map((content, index) => {
              const { source, topic } = content;
              const url = source.replace(".mp4", ".png");
              return (
                <div className="w-full h-[180px] mb-2 rounded-md border relative overflow-hidden">
                  <img
                    src={url}
                    alt="ui/ux review check"
                    className="object-cover w-full h-full rounded-md"
                  />
                  <div className="absolute flex items-end bottom-0 bg-gradient-to-t from-slate-900 left-0 w-full h-2/5">
                    <h6 className="font-medium capitalize mb-2 ml-2 text-white">
                      {topic}
                    </h6>
                  </div>
                </div>
              );
            })}
        </div>
        <button onClick={() => setContentIndex((prv) => prv + 1)}>next</button>
      </Container>
    </div>
  );
};

export default WatchCourse;
