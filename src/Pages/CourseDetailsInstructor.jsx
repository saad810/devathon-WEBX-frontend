import React from "react";
import { CiEdit } from "react-icons/ci";

const CourseDetailsInstructor = ({ course }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-10 flex flex-col w-full justify-between">
        <div className="flex flex-col gap-3 py-4">
          <p className="text-black text-sm">{course.category}</p>
          <div className="flex gap-3 items-center">
            <p className="text-secondary-600 text-4xl font-bold">
              {course.title}
            </p>
            <button>
              <CiEdit className="text-secondary-600 text-4xl border-2 rounded-full border-secondary-600 p-1" />
            </button>
          </div>
          <p className="text-black text-lg">{course.description}</p>
        </div>
        <div className="flex flex-col py-4 ">
          <h1 className="text-2xl font-bold mb-2">About</h1>
          <div className="flex justify-between items-start">
            <p className="text-black text-lg leading-relaxed">
              {course.about}
            </p>
            <button>
              <CiEdit className="text-black text-4xl border-2 rounded-full border-black p-1" />
            </button>
          </div>
        </div>
        <div className="flex gap-2">
            <h2 className="text-2xl font-bold mb-2">Price: {course.price}</h2>
            <button>
              <CiEdit className="text-black text-4xl border-2 rounded-full border-black p-1" />
            </button>
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
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{feature.heading}</h3>
                  <p>{feature.details}</p>
                </div>
                <div>
                  <button>
                    <CiEdit className="text-black text-4xl border-2 rounded-full border-black p-1" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailsInstructor;
