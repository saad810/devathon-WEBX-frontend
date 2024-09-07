import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useInput from '../../Hooks/useInput'; // Adjust the import path

const UserProfile = () => {
  // Personal Information State
  const [studentId, studentIdInput, resetStudentId] = useInput("");
  const [studentCNIC, studentCNICInput, resetStudentCNIC] = useInput("");
  const [studentPhone, studentPhoneInput, resetStudentPhone] = useInput("");
  const [dob, dobInput, resetDob] = useInput("");
  const [address, addressInput, resetAddress] = useInput("");
  const [permanentAddress, permanentAddressInput, resetPermanentAddress] = useInput("");
  const [qualification, qualificationInput, resetQualification] = useInput("");
  const [gender, genderInput, resetGender] = useInput("");

  // Family Information State
  const [fatherName, fatherNameInput, resetFatherName] = useInput("");
  const [fatherCNIC, fatherCNICInput, resetFatherCNIC] = useInput("");
  const [fatherPhone, fatherPhoneInput, resetFatherPhone] = useInput("");
  const [motherName, motherNameInput, resetMotherName] = useInput("");
  const [motherCNIC, motherCNICInput, resetMotherCNIC] = useInput("");
  const [motherPhone, motherPhoneInput, resetMotherPhone] = useInput("");
  const [fatherJobTitle, fatherJobTitleInput, resetFatherJobTitle] = useInput("");
  const [fatherJobType, fatherJobTypeInput, resetFatherJobType] = useInput("");

  // Qualification Form State
  const [qualifications, setQualifications] = useState([
    {
      degree: "",
      institute: "",
      board: "",
      obtainedMarks: "",
      totalMarks: "",
      passingYear: "",
      percentage: ""
    }
  ]);

  // Handle the change in the input fields for qualifications
  const handleQualificationChange = (e, index, field) => {
    const newQualifications = [...qualifications];
    newQualifications[index][field] = e.target.value;
    setQualifications(newQualifications);
  };

  // Add a new qualification block
  const addQualification = () => {
    setQualifications([
      ...qualifications,
      {
        degree: "",
        institute: "",
        board: "",
        obtainedMarks: "",
        totalMarks: "",
        passingYear: "",
        percentage: ""
      }
    ]);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log({
      studentId,
      studentCNIC,
      studentPhone,
      dob,
      address,
      permanentAddress,
      gender,
      fatherName,
      fatherCNIC,
      fatherPhone,
      motherName,
      motherCNIC,
      motherPhone,
      fatherJobTitle,
      fatherJobType
    });

    // Reset all fields after submission
    resetStudentId();
    resetStudentCNIC();
    resetStudentPhone();
    resetDob();
    resetAddress();
    resetPermanentAddress();
    resetGender();
    resetFatherName();
    resetFatherCNIC();
    resetFatherPhone();
    resetMotherName();
    resetMotherCNIC();
    resetMotherPhone();
    resetFatherJobTitle();
    resetFatherJobType();
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md w-full mt-8 sm:justify-between justify-center items-center flex sm:flex-row flex-col">
        <div className='flex flex-row'>
          <div className="flex items-center">
            <img
              src="https://placehold.co/120"
              alt="User"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <div className='ml-4'>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600 text-lg font-semibold">The Educators</p>
            <p>Last login</p>
          </div>
        </div>
        <div className='sm:mt-0 mt-3 flex flex-row h-[40px]'>
          <button className="bg-primary-500 text-white items-center text-center justify-center flex px-4 py-2 mr-2 rounded-lg hover:bg-primary-700">
            <FaEdit className="mr-2" /> Update
          </button>
          <button className="bg-red-500 text-white items-center text-center justify-center flex px-4 py-2 rounded-lg hover:bg-red-700">
            <FaTrash className="mr-2" /> Delete
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full mt-8">
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="studentCNIC" className="block text-sm font-medium text-gray-700">Student CNIC</label>
                <input
                  type="text"
                  id="studentCNIC"
                  {...studentCNICInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Student CNIC"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="studentPhone" className="block text-sm font-medium text-gray-700">Student Phone</label>
                <input
                  type="text"
                  id="studentPhone"
                  {...studentPhoneInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Student Phone"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  {...dobInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  {...addressInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-700">Permanent Address</label>
                <input
                  type="text"
                  id="permanentAddress"
                  {...permanentAddressInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Permanent Address"
                />
              </div>
              <div className="mb-4 col-span-3">
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <fieldset className="mt-1 flex flex-row space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="male"
                      value="male"
                      checked={gender === "male"}
                      onChange={genderInput.onChange}
                      className="mr-2"
                    />
                    <label htmlFor="male" className="text-md font-semibold text-gray-700">Male</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="female"
                      value="female"
                      checked={gender === "female"}
                      onChange={genderInput.onChange}
                      className="mr-2"
                    />
                    <label htmlFor="female" className="text-md font-semibold text-gray-700">Female</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="other"
                      value="other"
                      checked={gender === "other"}
                      onChange={genderInput.onChange}
                      className="mr-2"
                    />
                    <label htmlFor="other" className="text-md font-semibold text-gray-700">Other</label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          {/* Family Information */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Family Information</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">Father's Name</label>
                <input
                  type="text"
                  id="fatherName"
                  {...fatherNameInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Father's Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="fatherCNIC" className="block text-sm font-medium text-gray-700">Father's CNIC</label>
                <input
                  type="text"
                  id="fatherCNIC"
                  {...fatherCNICInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Father's CNIC"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="fatherPhone" className="block text-sm font-medium text-gray-700">Father's Phone</label>
                <input
                  type="text"
                  id="fatherPhone"
                  {...fatherPhoneInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Father's Phone"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">Mother's Name</label>
                <input
                  type="text"
                  id="motherName"
                  {...motherNameInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Mother's Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="motherCNIC" className="block text-sm font-medium text-gray-700">Mother's CNIC</label>
                <input
                  type="text"
                  id="motherCNIC"
                  {...motherCNICInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Mother's CNIC"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="motherPhone" className="block text-sm font-medium text-gray-700">Mother's Phone</label>
                <input
                  type="text"
                  id="motherPhone"
                  {...motherPhoneInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Mother's Phone"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="fatherJobTitle" className="block text-sm font-medium text-gray-700">Father's Job Title</label>
                <input
                  type="text"
                  id="fatherJobTitle"
                  {...fatherJobTitleInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Father's Job Title"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="fatherJobType" className="block text-sm font-medium text-gray-700">Father's Job Type</label>
                <input
                  type="text"
                  id="fatherJobType"
                  {...fatherJobTypeInput}
                  className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                  placeholder="Father's Job Type"
                />
              </div>
            </div>
          </div>

          {/* Qualification Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Qualifications</h2>
            {qualifications.map((qualification, index) => (
              <div key={index} className="grid sm:grid-cols-3 grid-cols-2 gap-6 mb-4">
                <div className="mb-4">
                  <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700">Degree</label>
                  <input
                    type="text"
                    id={`degree-${index}`}
                    value={qualification.degree}
                    onChange={(e) => handleQualificationChange(e, index, "degree")}
                    className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                    placeholder="Degree"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`institute-${index}`} className="block text-sm font-medium text-gray-700">Institute</label>
                  <input
                    type="text"
                    id={`institute-${index}`}
                    value={qualification.institute}
                    onChange={(e) => handleQualificationChange(e, index, "institute")}
                    className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                    placeholder="Institute"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`board-${index}`} className="block text-sm font-medium text-gray-700">Board</label>
                  <input
                    type="text"
                    id={`board-${index}`}
                    value={qualification.board}
                    onChange={(e) => handleQualificationChange(e, index, "board")}
                    className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                    placeholder="Board"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`obtainedMarks-${index}`} className="block text-sm font-medium text-gray-700">Obtained Marks</label>
                  <input
                    type="number"
                    id={`obtainedMarks-${index}`}
                    value={qualification.obtainedMarks}
                    onChange={(e) => handleQualificationChange(e, index, "obtainedMarks")}
                    className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                    placeholder="Obtained Marks"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`totalMarks-${index}`} className="block text-sm font-medium text-gray-700">Total Marks</label>
                  <input
                    type="number"
                    id={`totalMarks-${index}`}
                    value={qualification.totalMarks}
                    onChange={(e) => handleQualificationChange(e, index, "totalMarks")}
                    className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                    placeholder="Total Marks"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`passingYear-${index}`} className="block text-sm font-medium text-gray-700">Passing Year</label>
                  <input
                    type="number"
                    id={`passingYear-${index}`}
                    value={qualification.passingYear}
                    onChange={(e) => handleQualificationChange(e, index, "passingYear")}
                    className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                    placeholder="Passing Year"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor={`percentage-${index}`} className="block text-sm font-medium text-gray-700">Percentage</label>
                  <input
                    type="number"
                    id={`percentage-${index}`}
                    value={qualification.percentage}
                    onChange={(e) => handleQualificationChange(e, index, "percentage")}
                    className="mt-1 block w-full border-gray-300 border-2 py-2 pl-2 rounded-md shadow-sm"
                    placeholder="Percentage"
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addQualification}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700"
            >
              Add Qualification
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
