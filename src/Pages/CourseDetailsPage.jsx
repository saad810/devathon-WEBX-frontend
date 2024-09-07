import React from "react";
import CourseCard from "../Components/CourseCard";

const CourseDetailsPage = ({ course }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-10 flex flex-col lg:flex-row w-full justify-between">
        <div className="flex flex-col w-full lg:w-2/3">
          <div className="flex flex-col gap-3 px-6 py-4">
            <p className="text-black text-sm">{course.category}</p>
            <p className="text-secondary-600 text-4xl font-bold">{course.title}</p>
            <p className="text-black text-lg">{course.description}</p>
          </div>
          <div className="flex flex-col px-6 py-4 ">
            <h1 className="text-2xl font-bold mb-2">About</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {course.about}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <CourseCard course={course} />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="space-y-4">
          {course.features.map((feature, index) => (
            <li
              key={index}
              className="flex flex-col p-4 rounded-lg shadow-md bg-white"
            >
              <h3 className="text-lg font-bold">{feature.heading}</h3>
              <p>{feature.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
