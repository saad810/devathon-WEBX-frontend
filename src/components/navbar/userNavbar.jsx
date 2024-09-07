import React, { useState } from 'react';

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Profile Section */}
        <div className="flex items-center">
          <img
            src="/path/to/profile.jpg" // replace with your profile image path
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="font-bold text-lg">Profile</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block md:inline-block text-white hover:text-gray-300">Discussion</a>
          <a href="#" className="block md:inline-block text-white hover:text-gray-300">My Courses</a>
          <a href="#" className="block md:inline-block text-white hover:text-gray-300">Score</a>
        </div>
      </div>

      {/* Links for Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 space-y-2">
          <a href="#" className="text-white hover:text-gray-300">Discussion</a>
          <a href="#" className="text-white hover:text-gray-300">My Courses</a>
          <a href="#" className="text-white hover:text-gray-300">Score</a>
        </div>
      )}
    </nav>
  );
};

export default UserNavbar;
