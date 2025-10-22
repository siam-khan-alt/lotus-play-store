import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/lotus-play-store.jpg";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/games"}>Our Games</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#0F172A] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logo} alt="" className="h-10 w-10 rounded-full" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex justify-center items-center gap-5 menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
         <Link to={'/login'}> <button
            className="btn hover:bg-[#6D28D9] mr-2 text-[#F8FAFC] bg-[#7C3AED] border-[#14B8A6]
"
          >
            Login
          </button></Link>
         <Link to={'/register'}> <button
            className="btn hover:bg-[#6D28D9] text-[#F8FAFC] bg-[#7C3AED] border-[#14B8A6]
"
          >
           Register
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
