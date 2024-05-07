import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';
import Content from '../components/Content';
import { AuthContext } from '../context/authContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ViewCourse = () => {

  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [course, setCourse] = useState([])

  const navigate = useNavigate()

  const { user } = useContext(AuthContext);

  const [enroll, setEnroll] = useState({
    userId: user._id,
    userEmail: user.email,
    userMobile: user.mobile
  })

  const getCourse = async () => {
    try {
      await axios.get(`http://localhost:8000/api/course/v1/${id}`)
        .then((res) => {
          setCourse(res.data)
        })
    } catch (err) {
      console.log('error fetching the course', err)
    }
  }

  const showAlert = (icon, title, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }

  const back = () => {
    navigate('/view-course')
  }

  useEffect(() => {
    getCourse()
  }, [])

  const enrollToCourse = async () => {
    try {
      setLoading(true)
      await axios.post(`http://localhost:8000/api/learner-service/enrollment/enroll/${id}`, enroll)
        .then((res) => {
          if (res.status === 201) {
            showAlert("success", "Enrollment Success")
          } else if (res.status === 200) {
            showAlert("success", "Successfully enrolled")
          }
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
          showAlert("error", "Oops...", "You have already enrolled to this course")
          setLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Button onClick={back} className='relative top-4 ml-7'>Back</Button>

      <div className='flex justify-center items-center'>
        <Card className="w-full max-w-[50rem] flex-row mt-16">
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
              <Button loading={loading} onClick={enrollToCourse}>Enroll</Button>
            </a>
          </CardBody>
        </Card>
      </div>
      <Typography variant="h4" className='mt-5 ml-64 text-gray-600' color="blue-gray">Course Content</Typography>
      <div className='grid place-items-center'>
        {
          course.contents && course.contents.map((element, index) => (
            <Content
              index={element._id}
              topic={element.topic}
              contentDescription={element.contentDescription}
              sourceVideo={element.source}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ViewCourse
