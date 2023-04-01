import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/flying-eagle2.svg";
import { categories } from "../utills/data";

const isNotActiveStyle = `flex items-center px-5 gap-3 text-black hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-orange-200 p-2`;
const isActiveStyle = `flex items-center px-5 gap-3 font-extrabold border-b-2 border-black transition-all duration-200 ease-in-out capitalize p-2 hover:bg-orange-200`;

function Sidebar({ user, closeToggle }) {
  const handleCloseSidebar = () => {
    if (closeToggle !== undefined) {
      closeToggle(false);
    }
  };

  const renderedCategories = categories.map((category) => (
    <NavLink
      to={`/category/${category.name}`}
      className={({ isActive }) =>
        isActive ? isActiveStyle : isNotActiveStyle
      }
      onClick={handleCloseSidebar}
      key={category.name}
    >
      <img
        src={category.image}
        className="w-8 h-8 rounded-full shadom-sm"
        alt="category"
      />
      {category.name}
    </NavLink>
  ));
  return (
    <div className="flex flex-col justify-between bg-orange-400 h-full overflow-y-scrikk min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="mt-2 px-5 2xl:text-xl text-2xl">Categories</h3>
          {renderedCategories}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
}

export default Sidebar;
