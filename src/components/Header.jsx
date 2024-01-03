import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { Link, NavLink } from "react-router-dom";
import Model from "./Model";
const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <header className=" flex justify-between px-5   py-4  shadow  sm:px-4  md:px-5">
      <img src={viteLogo} alt="Logo" />
      <ul className="flex gap-7  ">
        <li>
          <NavLink
            className={({ isActive }) => isActive && "text-blue-400 underline"}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && "text-blue-400 underline"}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && "text-blue-400 underline"}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <li
            className={({ isActive }) => isActive && "text-blue-400 underline"}
            to="/signin"
          >
            <button onClick={() => setisOpen(true)}>Sign In</button>
            <Model isOpen={isOpen} setisOpen={setisOpen} />
          </li>
        </li>
      </ul>
    </header>
  );
};

export default Header;
