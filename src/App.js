import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./Layout/GlobalLayout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />} />
      <Route path="/auth" element={<h1>Login/signup</h1>} />
      <Route path="/user" element={<h1>UserHome</h1>} />
      <Route path="/instructor" element={<h1>Teacher Home</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default App;
