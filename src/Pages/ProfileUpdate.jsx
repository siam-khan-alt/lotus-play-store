import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import {  useNavigate } from 'react-router';
import useTitle from '../Hooks/useTitle';
import { toast } from 'react-toastify';


const ProfileUpdate = () => {
  useTitle('Update Profile')
    const navigate = useNavigate()

    const {profileUpdate}=use(AuthContext)
    const handleUpdate=(e)=>{
    e.preventDefault()
  const  displayName = e.target.name?.value
        const photoURL= e.target.photo?.value
         profileUpdate(displayName, photoURL).then(()=>{
            toast.success('update succesfull')
            navigate(-1)
         }).catch((err)=> toast.error(err.message)
            )
    }
    return (
         <div>
      <div className="hero bg-[#0F172A] py-12">
        <div className="hero-content flex-col sm:w-[600px] md:w-[800px]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#7C3AED]">Profile update!</h1>
          </div>
          <div className="card bg-[#1E293B] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleUpdate} className="fieldset">
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
                
                

                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white mt-4">
                  Update
                </button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProfileUpdate;