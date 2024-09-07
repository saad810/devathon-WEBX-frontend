import React from "react";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>universal Home</h1>} />
      <Route path="/auth" element={<h1>Login/signup</h1>} />
      <Route path="/user" element={<h1>UserHome</h1>} />
      <Route path="/instructor" element={<h1>Teacher Home</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default App;
