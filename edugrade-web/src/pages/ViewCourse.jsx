import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const ViewCourse = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { id } = useParams()


  const back = () => {
    navigate('/view-course')
  }

  return (
    <div>
      <Button onClick={back} className='relative top-4 ml-7'>Back</Button>
      <div className='flex justify-center items-center'>
        <Card className="w-full max-w-[50rem] flex-row mt-20">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              startups
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Lyft launching cross-platform service this week
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software company
              selling licenses. Yet its own business model disruption is only part
              of the story
            </Typography>
            <a href="#" className="inline-block">
              <Button loading={loading}>Enroll</Button>
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default ViewCourse
