import React, { use, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import useTitle from "../Hooks/useTitle";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  useTitle("Register");
  const { SignUp, profileUpdate, SignInGoogle, setUser,setLoading } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true)
    const email = e.target.email?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const password = e.target.password?.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
     toast.error("Password at least one uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password at least one lowercase letter!");
      return;
    }

    SignUp(email, password)
      .then(() => {
        profileUpdate(displayName, photoURL)
          .then(() => {})
          .catch((err) => toast.error(err.message));
        toast.success("create succesfull");
      })
      .catch((err) => {toast.error(err.message)
        setLoading(false)
      });
  };

  const handleGoogleSignin = () => {
    SignInGoogle()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        
        toast.success("Signin successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
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
                <div className="relative">
                  <label className="label text-white mb-1">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input bg-[#0F172A] placeholder-gray-400 text-white"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white mt-4">
                  Register
                </button>
              </form>
              <p className="text-center">OR</p>
              <button
              onClick={handleGoogleSignin}
               className="btn bg-[#1E293B] text-white border border-gray-500 rounded-md hover:bg-[#2C3A59] transition ">
                <FaGoogle /> Login With Google
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
