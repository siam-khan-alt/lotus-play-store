import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import img from "../assets/anonymouss-.webp";
import { Link } from "react-router";
import useTitle from "../Hooks/useTitle";


const Profile = () => {
    useTitle('Profile')
  const { users } = useContext(AuthContext);

  return (
    <div className="bg-[#0F172A] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#1E293B] p-8 rounded-2xl shadow-lg w-full max-w-[400px] text-center text-white">
        <img
          src={users?.photoURL ? users.photoURL : img}
          alt=""
          className="w-[120px] h-[120px] mx-auto rounded-full object-cover border-5 border-[#7C3AED]"
        />
        <h2 className="text-2xl font-semibold mt-4">
          {users?.displayName || "Anonymous User"}
        </h2>
        <p className="text-gray-400 mt-1">
          {users?.email || "No email available"}
        </p>
        <Link to={'/updateProfile'}>
        <button className="mt-6 btn w-full hover:bg-[#6D28D9] text-[#F8FAFC] bg-[#7C3AED] border-[#14B8A6]  font-medium">
          Update Info
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Profile;
