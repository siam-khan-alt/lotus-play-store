import React from "react";

const Newslater = () => {
  return (
    <div>
      <div className="bg-[#1E293B] text-white py-10 mt-5">
        <div className="w-11/12 mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300">
            Get updates about new games,indie developer news, and exclusive
            offers!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-2 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md w-72 text-white"
            />
            <button className="px-5 py-2 bg-[#7C3AED] rounded-md hover:bg-[#6D28D9] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
