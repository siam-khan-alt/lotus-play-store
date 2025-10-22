import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
    const {SignUp, profileUpdate}=use(AuthContext)
    const handleSignUp=(e)=>{
        e.preventDefault()
        const email = e.target.email?.value
        const password = e.target.password?.value
        const  displayName = e.target.name?.value
        const photoURL= e.target.photo?.value
        
        SignUp(email, password).then(()=>{
            profileUpdate(displayName, photoURL).then(()=>{}).catch((err)=> console.log(err.message)
            )
            alert ('create succesfull')})
            .catch((err=>console.log(err.message)
            ))
        
    }
  return (
    <div>
      <div className="hero bg-[#0F172A] md:min-h-screen">
        <div className="hero-content flex-col sm:w-[600px] md:w-[800px]">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card bg-[#1E293B] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignUp} className="fieldset">
                 <label className="label text-white">Name</label>
                <input
                name="name"
                  type="text"
                  className="input bg-[#0F172A] placeholder-gray-400"
                  placeholder="Your Full Name"
                />
                <label className="label text-white">Photo URL</label>
                <input
                name="photo"
                  type="text"
                  className="input bg-[#0F172A] placeholder-gray-400"
                  placeholder="Your Photo URL"
                />
                <label className="label text-white">Email</label>
                <input
                name="email"
                  type="email"
                  className="input bg-[#0F172A] placeholder-gray-400"
                  placeholder="Email"
                />
                <label className="label text-white">Password</label>
                <input
                name="password"
                  type="password"
                  className="input bg-[#0F172A] placeholder-gray-400"
                  placeholder="Password"
                />
                

                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white mt-4">
                  Register
                </button>
              </form>
              <p className="text-center">OR</p>
              <button className="btn bg-[#1E293B] text-white border border-gray-500 rounded-md hover:bg-[#2C3A59] transition ">
                <FaGoogle /> Register With Google
              </button>
              <p className="text-gray-400 text-center mt-3 ">
                 Have an account?{" "}
                <span className="text-[#7C3AED] hover:text-[#9333EA] cursor-pointer">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
