import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/lotus-img.jpg";
import img from "../assets/anonymouss-.webp";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { users, LogOut } = use(AuthContext);
  
  
  const handleLogOut=()=>{
  LogOut().then(()=>{
            toast.success('Log out succesfull')
        })
            .catch((err=>toast.error(err.message)
            ))
  }

  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/games"}>Our Games</NavLink> 
    <NavLink to={"/about"}>About us</NavLink>
    <NavLink to={"/contact"}>Contact</NavLink> 
    <NavLink to={"/support"}>Support</NavLink>
    </>
  );
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] shadow-lg">
      <div className="w-11/12 mx-auto py-3 flex items-center justify-center bg-[#0F172A]  shadow-sm">
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
              className="menu menu-sm dropdown-content bg-[#0F172A] rounded-box z-1 mt-1 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={'/'}>
          <img src={logo} alt="" className="h-10 w-10 rounded-full" />
          </Link>
          <Link to={'/'}>
          <h4 className="font-bold text-[#7C3AED]">Play Store</h4>
          </Link>
        </div>
        
        <div className="navbar-end">
          <div className="mr-2 hidden lg:flex">
          <ul className="menu flex justify-center items-center gap-5 menu-horizontal px-1">
            {links}
          </ul>
        </div> 
          
          
          {users? <> <Link to={'/profile'}><img  src={users?.photoURL?users?.photoURL: img} alt="" className="rounded-full w-10 h-10" /></Link> <button
              onClick={handleLogOut} className="btn ml-2 hover:bg-[#6D28D9] text-[#F8FAFC] bg-[#7C3AED] border-[#14B8A6]
"
            >
              Logout
            </button></>:
         
          <><Link to={"/login"}>
            {" "}
            <button
              className="btn hover:bg-[#6D28D9] mr-2 text-[#F8FAFC] bg-[#7C3AED] border-[#14B8A6]
"
            >
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            {" "}
            <button
              className="btn hover:bg-[#6D28D9] text-[#F8FAFC] bg-[#7C3AED] border-[#14B8A6]
"
            >
              Register
            </button>
          </Link></>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
