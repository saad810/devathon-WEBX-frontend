import React from "react";
import UserProfile from "../Components/profile/userProfile";
import StudentDetails from "../Components/StudentDetails";
const ProfileScreen = () => {
  return (
    <div>
      <UserProfile />
      <div className="mt-5">
        <StudentDetails />
      </div>
    </div>
  );
};

export default ProfileScreen;
