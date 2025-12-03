import React from 'react';
import { Link } from 'react-router';

const PromotionBanner = () => {
    return (
        <div className="w-11/12 mx-auto ">
            <div className="bg-[#7C3AED] p-8 md:p-16 rounded-2xl shadow-xl text-center space-y-4 text-white">
                <h3 className="text-3xl md:text-5xl font-extrabold">
                    Join the Lotus Community Today!
                </h3>
                <p className="text-gray-200 max-w-2xl mx-auto">
                    Sign up now for exclusive discounts, beta access, and the latest news on upcoming releases. Don't miss out on the next big title!
                </p>
                <Link to="/register">
                    <button className="btn btn-lg bg-[#0F172A] hover:bg-gray-900 text-white border-0 mt-4 font-semibold">
                        Create Free Account
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PromotionBanner;