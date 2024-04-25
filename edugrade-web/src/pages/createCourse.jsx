import React from "react";
import axios from "axios";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Stepper,
  Step,
  Radio,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import Container from "../components/common/container";
import { useState } from "react";
import DropZone from "../components/ui/dropZone";
import { View } from "lucide-react";
import Loading from "../components/common/loading";

const Content = ({ image }) => {
  return (
    <div className="rounded-md min-w-[200px] p-2 border h-[100px] relative flex">
      <div className="overflow-hidden rounded-sm flex bg-yellow-300">
        <img
          src={image}
          className="object-cover w-[120px] h-full bg-blue-500"
        />
      </div>
      <div className="w-full flex-1 flex justify-center">
        <span>1</span>
      </div>
    </div>
  );
};

const CreateCourse = () => {
  const [courseObject, setCourseObject] = useState({
    courseName: "",
    description: "",
  });
  const [contentObject, setContentObject] = useState({
    topic: "",
    description: "",
    type: "video",
    body: "",
    source: "",
    courseID: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [open, handleOpen] = useState(false);
  const [video, setVideo] = useState(null);
  const [objectURL, setOBjectURL] = useState("");
  const [contentList, setContentList] = useState([]);
  const [progressBar, setProgressBar] = useState(0);

  const handleOnChange = (video) => {
    setVideo(video);
    setOBjectURL(URL.createObjectURL(video));
  };

  const removeSelected = () => {
    setVideo(null);
  };

  const handleCourseData = (e) => {
    const { name, value } = e.target;
    setCourseObject((object) => {
      return {
        ...object,
        [name]: value,
      };
    });
  };

  const handleContentData = (e) => {
    const { name, value } = e.target;
    setContentObject((object) => {
      return {
        ...object,
        [name]: value,
      };
    });
  };

  const handleNext = async () => {
    await axios
      .post("http://localhost:8000/api/course", courseObject)
      .then((res) => {
        !isLastStep && setActiveStep((cur) => cur + 1);

        localStorage.setItem("course", JSON.stringify(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createContent = async () => {
    const course1 = JSON.parse(localStorage.getItem("course"));
    const url = localStorage.getItem("url");

    const content = {
      ...contentObject,
      courseID: course1._id,
      source: url,
    };

    await axios
      .post("http://localhost:8000/api/course/content", content)
      .then((res) => {
        setVideo(null);
        setContentObject({
          topic: "",
          description: "",
          type: "video",
          body: "",
          source: "",
        });
        const newUrl = url.replace(".mp4", ".png");
        setContentList([...contentList, { image: newUrl }]);
        setIsLoading(false);
      });
  };

  const uploadVideo = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "EduGrade");

    await fetch("https://api.cloudinary.com/v1_1/ddeh0t6uq/video/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("url", data.url);
        createContent();
      });
  };

  const addContent = () => {
    if (video) {
      uploadVideo();
    }
  };
  return (
    <Container>
      <div className="w-full py-4 mt-10">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
        </Stepper>
      </div>
      {activeStep == 0 && (
        <Card color="transparent" shadow={false} className="mt-4 ">
          <Typography variant="h4" color="blue-gray">
            Add New Course
          </Typography>
          <form className="mt-8 mb-2 w-full">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Course Name
              </Typography>
              <Input
                name="courseName"
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => handleCourseData(e)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Course Description
              </Typography>
              <Textarea
                name="description"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => handleCourseData(e)}
              />
            </div>
            <div>
              <Button onClick={handleNext} disabled={isLastStep}>
                Save
              </Button>
            </div>
          </form>
        </Card>
      )}
      {activeStep == 1 && (
        <div className="mt-10">
          <div className="w-full border flex flex-nowrap gap-2 p-2 relative overflow-auto">
            {contentList.map((element, index) => (
              <Content image={element.image} key={index} />
            ))}
          </div>
          <Card color="transparent" shadow={false} className="mt-10 flex-3">
            <Typography variant="h4" color="blue-gray">
              Add New Content
            </Typography>

            <form className="mt-8 mb-2">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Topic
                </Typography>
                <Input
                  size="lg"
                  name="topic"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={contentObject.topic}
                  onChange={(e) => handleContentData(e)}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Description
                </Typography>
                <Textarea
                  name="description"
                  onChange={(e) => handleContentData(e)}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={contentObject.description}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Select Content Type
                </Typography>
                <div className="flex gap-10">
                  <Radio
                    name="type"
                    onChange={(e) => handleContentData(e)}
                    label="Video"
                    value="video"
                    defaultChecked
                  />
                  <Radio
                    name="type"
                    onChange={(e) => handleContentData(e)}
                    label="Reading"
                    value="reading"
                  />
                </div>
                {contentObject.type == "video" ? (
                  <div>
                    <Typography variant="h6" className="text-gray-900">
                      Video material
                    </Typography>
                    <div className="relative mt-3">
                      <DropZone
                        onChange={handleOnChange}
                        clear={removeSelected}
                        value={video}
                      />
                      {video && (
                        <View
                          className="absolute right-[34px] top-[10px] cursor-pointer text-blue-500"
                          onClick={() => handleOpen(true)}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <Typography variant="h6" className="text-gray-900">
                      Reading material
                    </Typography>
                    <div className="mt-3">
                      <Textarea
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        name="body"
                        onChange={(e) => handleContentData(e)}
                      />
                    </div>
                  </div>
                )}
              </div>

              <Button onClick={addContent} className="mt-4">
                {isLoading ? <Loading /> : "Add"}
              </Button>
            </form>
          </Card>
        </div>
      )}

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <video
            controls
            className="w-full aspect-video"
            controlsList="fullscreen"
            // poster=""//A URL for an image to be shown while the video is downloading
            // ended
            // onTimeUpdate={(e) => console.log(Math.floor(e.target.currentTime))}
          >
            <source src={objectURL} type="video/mp4" />
          </video>
        </DialogBody>
      </Dialog>
    </Container>
  );
};

export default CreateCourse;
