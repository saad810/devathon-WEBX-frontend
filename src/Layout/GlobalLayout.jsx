import React from "react";

import Navbar from "../Components/navbar/NavBar";
import UserProfile from "../Components/profile/userProfile";
const GlobalLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <UserProfile/>
      </div>
    </div>
  );
};

export default GlobalLayout;
