import React from "react";

import Navbar from "../Components/navbar/NavBar";
import Card from "../Components/Card";
const GlobalLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Card />
      </div>
    </div>
  );
};

export default GlobalLayout;
