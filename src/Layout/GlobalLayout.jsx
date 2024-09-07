import React from "react";

import Navbar from "../Components/navbar/NavBar";
import UserProfile from "../Components/profile/userProfile";
import { Outlet } from "react-router-dom";
const GlobalLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* <UserProfile/> */}
        <Outlet/>
      </div>
    </div>
  );
};

export default GlobalLayout;
