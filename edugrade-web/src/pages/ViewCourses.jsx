import React from 'react'
import axios from "axios";
import Course from '../components/Course';
import { Button, Input } from '@material-tailwind/react';

const contentsData = [
    {
        id: '123',
        topic: "Introduction to JavaScript",
        description: "Overview of JavaScript language basics",
        type: "reading",
        body: "JavaScript is a widely-used programming language widely-used programming language...",
        source: "https://example.com/js-intro",
    },
    {
        id: '124',
        topic: "Arrays in JavaScript",
        description: "Learn about arrays and their usage in JavaScript",
        type: "video",
        source: "https://example.com/js-arrays",
    },
    {
        id: '125',
        topic: "Node.js Fundamentals",
        description: "Introduction to Node.js and its core concepts",
        type: "video",
        source: "https://example.com/nodejs-fundamentals",
    },
    {
        id: '126',
        topic: "Node.js Fundamentals",
        description: "Introduction to Node.js and its core concepts",
        type: "video",
        source: "https://example.com/nodejs-fundamentals",
    },
    {
        id: '127',
        topic: "Node.js Fundamentals",
        description: "Introduction to Node.js and its core concepts",
        type: "video",
        source: "https://example.com/nodejs-fundamentals",
    },
    {
        id: '128',
        topic: "Node.js Fundamentals",
        description: "Introduction to Node.js and its core concepts",
        type: "video",
        source: "https://example.com/nodejs-fundamentals",
    },
    {
        id: '129',
        topic: "Asynchronous JavaScript",
        description: "Understanding asynchronous programming in JavaScript",
        type: "reading",
        body: "Asynchronous programming allows tasks to...",
    },
    {
        id: '130',
        topic: "Asynchronous JavaScript",
        description: "Understanding asynchronous programming in JavaScript",
        type: "reading",
        body: "Asynchronous programming allows tasks to...",
    },
    {
        id: '131',
        topic: "Introduction to JavaScript",
        description: "Overview of JavaScript language basics",
        type: "reading",
        body: "JavaScript is a widely-used programming language widely-used programming language...",
        source: "https://example.com/js-intro",
    },
];

const ViewCourses = () => {

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
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
                {contentsData && contentsData.map((element, index) => (
                        <Course key={index} topic={element.topic} description={element.description} id={element.id}/>
               ))}
            </div>
        </div>
    );
}

export default ViewCourses
