import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import useTitle from '../Hooks/useTitle';
import { Link, useRouteError } from 'react-router';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';


const Error404 = () => {
    useTitle('Error 404')
    const error = useRouteError();
    return (
        <div>
            <Navbar></Navbar>
        <div className="bg-[#0F172A] text-white min-h-screen flex flex-col justify-center items-center text-center pt-28 pb-12 p-6">
            <div className="max-w-lg bg-[#1E293B] p-10 md:p-16 rounded-2xl shadow-2xl border border-[#7C3AED]/50">
                
                <h1 className="text-8xl md:text-9xl font-extrabold text-[#7C3AED] mb-4">
                    404
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-400 mb-6 text-lg">
                    We can't seem to find the page you're looking for. It might have been moved or deleted.
                </p>

                {error && (
                    <p className="text-red-400 text-sm mb-6">
                        Error Detail: {error.statusText || error.message}
                    </p>
                )}

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link to="/" className="inline-block">
                        <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-lg transition-colors border-0">
                            <FaHome className='mr-2' /> Go to Home
                        </button>
                    </Link>

                    <Link to="/support" className="inline-block">
                        <button className="btn bg-[#0F172A] hover:bg-[#1E293B] border border-[#7C3AED] text-[#7C3AED] font-semibold rounded-lg transition-colors">
                            <FaQuestionCircle className='mr-2' /> Visit Support
                        </button>
                    </Link>
                </div>

            </div>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Error404;