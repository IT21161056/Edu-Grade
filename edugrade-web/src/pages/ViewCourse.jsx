import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';

const ViewCourse = () => {

  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [course,setCourse] = useState([])
 
  const navigate = useNavigate()
  
  const getCourse = async() => {
    try{
      await axios.get(`http://localhost:8000/api/course/v1/${id}`)
      .then((res) => {
        setCourse(res.data)
      })
    }catch(err){
      console.log('error fetching the course',err)
    }
  }

  useEffect(() => {
    getCourse()
  },[])

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
            <Typography variant="h4" color="blue-gray" className="mb-2">
            {course.courseName}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
             {course.courseDescription}
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
