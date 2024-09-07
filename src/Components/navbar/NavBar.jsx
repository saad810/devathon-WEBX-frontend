import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { RiListSettingsFill } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  const auth = true;
  const handleLoginNavigate = () => {
    navigate("/auth");
  };

  return (
    <>
      <nav className="flex items-center justify-between px-12 bg-primary-800 py-3">
        <div className="flex items-center gap-4">
          <button onClick={toggleMobileNav} className="block lg:hidden">
            <RxHamburgerMenu className="text-3xl text-white" />
          </button>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              <li className="text-white text-base">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white text-base">
                <Link to="/">Online Chat</Link>
              </li>
            </ul>
          </div>
        </div>
        {!auth && (
          <button
            onClick={handleLoginNavigate}
            className="px-5 py-3 text-white bg-secondary-700 rounded-md text-sm font-medium"
          >
            Login
          </button>
        )}

        <button onClick={toggleMobileNav} className="block lg:hidden">
          <RiListSettingsFill className="text-2xl text-primaryblue-100" />
        </button>
      </nav>

      {showMobileNav && <MobileNav />}
    </>
  );
};

const MobileNav = () => (
  <nav className="bg-primary-800 p-3 flex items-center flex-col px-16 md:hidden">
    <ul className="py-2 flex flex-col gap-2">
      <li className="text-white text-base">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white text-base">
        <Link to="/">Online Chat</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
