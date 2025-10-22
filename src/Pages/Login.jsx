import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="hero bg-[#0F172A] md:min-h-screen">
        <div className="hero-content flex-col sm:w-[600px] md:w-[800px]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-[#1E293B] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset">
                <label className="label text-white">Email</label>
                <input
                  type="email"
                  className="input bg-[#0F172A] placeholder-gray-400"
                  placeholder="Email"
                />
                <label className="label text-white">Password</label>
                <input
                  type="password"
                  className="input bg-[#0F172A] placeholder-gray-400"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover text-[#7C3AED] hover:text-[#9333EA]">Forgot password?</a>

                 
                </div>

                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white mt-4">
                  Login
                </button>
              </form>
              <p className="text-center">OR</p>
              <button className="btn bg-[#1E293B] text-white border border-gray-500 rounded-md hover:bg-[#2C3A59] transition ">
                <FaGoogle /> Login With Google
              </button>
               <p className="text-gray-400 text-center mt-3 ">
                    Don't have an account?{" "}
                    <span className="text-[#7C3AED] hover:text-[#9333EA] cursor-pointer">
                      <Link to="/register">Register</Link>
                    </span>
                  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
