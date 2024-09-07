import React from "react";

const StudentDetails = ({ student, family }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="w-[100%] flex flex-col rounded-lg shadow-lg shadow-primary-200">
          <h1 className="text-xl bg-primary-700 p-4 rounded-t-lg text-white font-semibold">
            Student Details
          </h1>
          <div className="flex flex-col p-4 gap-2">
            <h2>
              <strong>Student ID:</strong> {student.id}
            </h2>
            <h2>
              <strong>Student Gender:</strong> {student.gender}
            </h2>
            <h2>
              <strong>Student CNIC:</strong> {student.cnic}
            </h2>
            <h2>
              <strong>Student Phone:</strong> {student.phone}
            </h2>
            <h2>
              <strong>Student Address:</strong> {student.address}
            </h2>
            <h2>
              <strong>Student Date of Birth:</strong> {student.dob}
            </h2>
            <h2>
              <strong>Qualification:</strong> {student.qualification}
            </h2>
            <h2>
              <strong>Permanent Address:</strong> {student.permanentAddress}
            </h2>
          </div>
        </div>
        <div className="w-[100%] flex flex-col  rounded-lg shadow-lg shadow-primary-200">
          <h1 className="text-xl bg-primary-700 p-4 rounded-t-lg text-white font-semibold">
            Family Info
          </h1>
          <div className="flex flex-col p-4 gap-2">
            <h2>
              <strong>Father Name:</strong> {family.fatherName}
            </h2>
            <h2>
              <strong>Father CNIC:</strong> {family.fatherCnic}
            </h2>
            <h2>
              <strong>Father Phone:</strong> {family.fatherPhone}
            </h2>
            <h2>
              <strong>Father Job Title:</strong> {family.fatherJobTitle}
            </h2>
            <h2>
              <strong>Father Job Type:</strong> {family.fatherJobType}
            </h2>
            <h2>
              <strong>Mother Name:</strong> {family.motherName}
            </h2>
            <h2>
              <strong>Mother CNIC:</strong> {family.motherCnic}
            </h2>
            <h2>
              <strong>Mother Phone:</strong> {family.motherPhone}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
