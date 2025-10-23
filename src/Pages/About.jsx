import React from "react";
import useTitle from "../Hooks/useTitle";
import logo from '../assets/lotus-img.jpg'
const About = () => {
  useTitle("About");

  return (
    <div className="bg-[#0F172A] text-white min-h-screen px-6 py-12 ">
        <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="" className="rounded-full mb-4 w-60 h-60 md:w-80 md:h-80" />
      <h1 className="text-4xl font-bold text-center mb-6">About Lotus Play Store</h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Lotus Play Store is a digital game hub designed to connect gamers and indie developers. 
        Our mission is to help players discover unique games and support the creators behind them.
      </p>
        </div>

      <div className="grid md:grid-cols-2 gap-8 w-11/12 mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-3">🎮 Key Features</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Discover and install indie games</li>
            <li>View detailed game ratings and developer info</li>
            <li>Secure login and Google authentication</li>
            <li>Modern and responsive UI</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">🛠️ Create With</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>Firebase Authentication</li>
            <li>Framer Motion</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 ">Developed by <span className="text-[#7C3AED]">Md Siam Khan</span></p>
        
      </div>
    </div>
  );
};

export default About;
