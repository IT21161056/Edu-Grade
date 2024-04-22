import React from "react";
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

const CreateCourse = () => {
  const [contentObject, setContentObject] = useState({
    topic: "",
    description: "",
    type: "",
    body: "",
    source: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [open, handleOpen] = useState(false);
  const [video, setVideo] = useState(null);
  const [objectURL, setOBjectURL] = useState("");

  const handleOnChange = (video) => {
    setVideo(video);
    setOBjectURL(URL.createObjectURL(video));
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

  console.log(contentObject);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
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
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Course Description
              </Typography>
              <Textarea label="Message" />
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
        <div className="flex gap-4">
          <Card color="transparent" shadow={false} className="mt-4 flex-3">
            <Typography variant="h4" color="blue-gray">
              Add Content
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
                  onChange={(e) => handleContentData(e)}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Description
                </Typography>
                <Textarea
                  name="description"
                  onChange={(e) => handleContentData(e)}
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
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Video material
                </Typography>
                <div className="relative">
                  <DropZone onChange={handleOnChange} />
                  {video && (
                    <View
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => handleOpen(true)}
                    />
                  )}
                </div>
              </div>

              <Button onClick={handleNext} className="mt-4">
                Submit
              </Button>
            </form>
          </Card>
          <div className="border rounded-lg flex-1 p-4">dawdadaw</div>
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
