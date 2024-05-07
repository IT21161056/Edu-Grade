import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";

const CourseCard = ({ image, title, author, progress }) => {
  return (
    <Card className="w-full overflow-hidden rounded-none">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody className="w-full">
        <Typography variant="h5" color="blue-gray" className="">
          UI/UX Review Check
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-2 font-normal text-sm"
        >
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="flex flex-col justify-between w-full">
        <Progress value={25} size="sm" />
        <div className="flex items-start -space-x-3 mt-1">
          <Typography variant="small" className="font-normal ">
            30%
          </Typography>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
