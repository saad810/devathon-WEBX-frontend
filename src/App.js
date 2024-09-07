import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./Layout/GlobalLayout";
import Auth from "./Forms/Auth";
import AuthLayout from "./Layout/AuthLayout";
import UserHome from "./Pages/UserHome";
const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<UserHome />} />
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
        <Route path="/user" element={<h1>UserHome</h1>} />
        <Route path="/instructor" element={<h1>Teacher Home</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
