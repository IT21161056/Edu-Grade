import React, { useEffect, useRef, useState } from "react";
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
  const [objectURL, setOBjectURL] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const uploadVideo = () => {
    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "EduGrade");

    fetch("https://api.cloudinary.com/v1_1/ddeh0t6uq/video/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {});
  };

  useEffect(() => {
    if (video) setOBjectURL(URL.createObjectURL(video));
  }, [video]);

  const onChange = (file) => {
    setVideo(file);
  };

  const removeSelected = () => {
    console.log("clicked");
    setOBjectURL("");
    setVideo(null);
  };

  return (
    <div className="flex w-1/2 gap-4 p-4 rounded-lg shadow-lg ">
      <div className="w-full">
        <DropZone onChange={onChange} />
      </div>

      <div className="flex flex-col justify-between">
        <Button
          onClick={handleOpen}
          variant="gradient"
          disabled={!Boolean(objectURL)}
        >
          Preview
        </Button>
        <Button onClick={uploadVideo} disabled={!Boolean(objectURL)}>
          Upload Video
        </Button>
        <Button onClick={removeSelected} disabled={!Boolean(objectURL)}>
          Clear
        </Button>
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
