import React from "react";

import Navbar from "../Components/navbar/NavBar";
import CourseCard from "../Components/CourseCard";
import { Outlet } from "react-router-dom";
const GlobalLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default GlobalLayout;
