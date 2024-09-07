import React from "react";
import CourseCard from "../Components/CourseCard";
import { courses } from "../data/course";

const UserDashBoard = () => {
  // Selecting 2 courses for "My Courses" and 4 for "Recommended Courses"
  const myCourses = courses.slice(0, 2);
  const recommendedCourses = courses.slice(2, 6); // Assuming you want to show the next four courses

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {myCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Recommended Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
