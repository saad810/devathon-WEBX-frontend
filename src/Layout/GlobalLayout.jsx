import React from "react";

import Navbar from "../Components/navbar/NavBar";
import CourseCard from "../Components/CourseCard";
const GlobalLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <CourseCard />
      </div>
    </div>
  );
};

export default GlobalLayout;
