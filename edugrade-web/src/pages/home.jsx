import React, { useEffect, useState } from "react";
import DropZone from "../components/ui/dropZone";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Home = () => {
  const [video, setVideo] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const [objectURL, setOBjectURL] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  // console.log(URL.createObjectURL(video));

  const uploadVideo = () => {
    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "EduGrade");

    fetch("https://api.cloudinary.com/v1_1/ddeh0t6uq/video/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setVideoURL(data.secure_url);
      });
  };

  useEffect(() => {
    if (video) setOBjectURL(URL.createObjectURL(video));
  }, [video]);

  const onChange = (file) => {
    setVideo(file);
  };

  const removeSelected = () => {
    setVideo(null);
  };
  return (
    <div className="flex w-1/2 gap-4 p-4 rounded-lg shadow-lg ">
      <div className="w-full">
        <DropZone onChange={onChange} clear={removeSelected} />
      </div>

      <div className="flex flex-col justify-between">
        <Button onClick={handleOpen} variant="gradient">
          Preview
        </Button>
        <Button onClick={uploadVideo}>Upload Video</Button>
        <Button onClick={removeSelected}>Clear</Button>
      </div>

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
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Home;
