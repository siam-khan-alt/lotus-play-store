import React, { use, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import useTitle from "../Hooks/useTitle";
import { IoEyeOff } from "react-icons/io5";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Login = () => {
  useTitle("Login");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const { LogIn, setUser, setLoading, SignInGoogle } = use(AuthContext);
  const location = useLocation();
  const goBack = location.state || "/";
  const navigate = useNavigate();


  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    LogIn(email, password)
      .then((result) => {
        toast.success("Login succesfull");
        setUser(result.user);
        navigate(goBack);
      })
    .catch((err) => {toast.error(err.message)})
    ;
  };

  const handleGoogleSignin = () => {
    SignInGoogle()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        navigate(goBack);
        toast.success("Login successful");
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
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-[#1E293B] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogIn} className="fieldset">
                <label className="label text-white">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  className="input bg-[#0F172A] placeholder-gray-400"
                  placeholder="Your email"
                  required
                />
                <div className="relative">
                  <label className="label text-white mb-1">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input bg-[#0F172A] placeholder-gray-400 text-white"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[10px] sm:right-[24px] md:right-[30px] top-[36px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <div>
                  <Link to={"/reset"} state={{ email }}>
                    <p className="link link-hover text-[#7C3AED] hover:text-[#9333EA]">
                      Forgot password?
                    </p>
                  </Link>
                </div>

                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white mt-4">
                  Login
                </button>
              </form>
              <p className="text-center">OR</p>
              <button
                onClick={handleGoogleSignin}
                className="btn bg-[#1E293B] text-white border border-gray-500 rounded-md hover:bg-[#2C3A59] transition "
              >
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
