import React, { useEffect, useState } from 'react'
import axios from "axios";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Course from '../components/Course';
import { Button, Input } from '@material-tailwind/react';

const ViewCourses = () => {

    const [courseData,setCourseData] = useState([])

    const getCourses = async() =>{
        await axios.get('http://localhost:8000/api/course/v1')
        .then((response) => {
            setCourseData(response.data)
        })
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
        getCourses()
    }, [])

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-20 mt-8">
            <div className="flex flex-col md:flex-row items-baseline justify-center gap-4 md:gap-2">
                <div className="flex-1 md:w-full md:max-w-md"> {/* Adjusted width here */}
                    <Input color="blue"  label="Search courses" />
                </div>
                <div>
                    <Button >Search</Button>
                </div>
            </div>
            <p className="text-2xl mt-6 md:mt-1 md:px-20">All Courses</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6" data-aos="fade-up">
                {courseData && courseData.map((element, index) => (
                        <Course key={index} topic={element.courseName} description={element.courseDescription} id={element._id}/>
               ))}
            </div>
        </div>
    );
}

export default ViewCourses
