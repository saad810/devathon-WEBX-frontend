import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="w-full max-w-md flex flex-col gap-4 rounded-md p-4 shadow-md border-2 border-primary-50 bg-white">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-auto object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold text-secondary-600">{course.title}</h2>
      <p className="text-sm text-black">{course.category}</p>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-black">{course.instructor}</h3>
        <h4 className="text-lg font-bold text-black">{course.price}</h4>
      </div>
      <hr />
      <button className="bg-primary-700 text-white px-4 py-2 rounded-md mt-2 w-full">
        Buy Now {course.price}
      </button>
    </div>
  );
};

export default CourseCard;
