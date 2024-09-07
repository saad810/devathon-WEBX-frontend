import React from "react";
import { courses } from "../data/course";
import CourseCard from "../Components/CourseCard";
const GlobalHome = () => {

  return (
    <section>
      <h3 className="text-semibold text-lg my-4">Courses</h3>
      <div className="grid grid-cols-4 gap-3">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default GlobalHome;
