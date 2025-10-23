import React, { use, useRef } from 'react';
import useTitle from '../Hooks/useTitle';
import { useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';


const ResetPass = () => {
    const {setLoading, PasswordReset}=use(AuthContext)
    useTitle('Reset Password')
    const emailRef=useRef()
    const location = useLocation()
    const email= location.state?.email || '';
    const handleReset=(e)=>{
        e.preventDefault()
        
        const email=emailRef.current.value
        PasswordReset(email).then(() => {
        setLoading(false);
        window.open(`https://mail.google.com/mail/u/0/#inbox`, "_blank");
        emailRef.current.value=''
      })
      .catch((e) => {
        toast.error(e.message);
      });
    }
    return (
        <div>
      <div className="hero bg-[#0F172A] min-h-screen">
        <div className="hero-content flex-col sm:w-[600px] md:w-[800px]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Reset Your Password!</h1>
          </div>
          <div className="card bg-[#1E293B] w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleReset} className="fieldset">
                <label className="label text-white">Email</label>
                <input
                ref={emailRef}
                name="email"
                  type="email"
                  defaultValue={email}
                  className="input bg-[#0F172A] placeholder-gray-400"
                  placeholder="Email"
                />
                <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white mt-4">
                 Reset Password
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ResetPass;