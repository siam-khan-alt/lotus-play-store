import React from "react";
import { useLoaderData, useParams } from "react-router";
import useTitle from "../Hooks/useTitle";
import { FaCalendarAlt, FaCogs, FaDesktop, FaDownload, FaGlobe, FaInfoCircle, FaStar } from "react-icons/fa";

const Details = () => {
  const { Id } = useParams();
  const games = useLoaderData();
  const game = games.find((game) => game.id == Id);
  
  useTitle(game ? game.title : "Game Details")
  if (!game) {
      return <div className="bg-[#0F172A] text-white min-h-screen pt-20 text-center">Game Not Found</div>;
  }
  const platformString = game.platform ? game.platform.join(", ") : "N/A";
  const renderSpecs = (specs) => (
    <ul className="space-y-3">
        {Object.entries(specs).map(([key, value]) => (
            <li key={key} className="text-gray-300 border-b border-[#7C3AED]/20 pb-2 last:border-b-0 flex justify-between">
                <span className='font-semibold text-white'>{key}:</span> 
                <span className="text-gray-300">{value}</span>
            </li>
        ))}
    </ul>
  );
  return (
    <div className="bg-[#0F172A] pb-12">
      <div className="w-11/12 mx-auto ">
      <div className="flex flex-col lg:flex-row gap-8 mb-8 bg-[#1E293B] p-6 rounded-lg shadow-xl">
            
            <div className="lg:w-1/3 flex-shrink-0">
                <img 
                    src={game.coverPhoto} 
                    alt={game.title} 
                    className="w-full h-80 object-cover rounded-lg shadow-lg" 
                />
            </div>
            
            <div className="lg:w-2/3 flex flex-col justify-between">
                <div>
                    <span className="badge bg-[#7C3AED] text-white border-0 text-sm mb-2">
                        {game.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#F8FAFC] mt-2 mb-4">
                        {game.title}
                    </h1>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-lg mb-6 text-gray-400">
                        <p className="flex items-center">
                            <FaStar className="text-yellow-400 mr-2" /> 
                            Ratings: **{game.ratings}**
                        </p>
                        <p className="flex items-center">
                            <FaGlobe className="text-[#7C3AED] mr-2" /> 
                            Dev: **{game.developer}**
                        </p>
                        <p className="flex items-center">
                            <FaCalendarAlt className="text-[#14B8A6] mr-2" /> 
                            Release: **{game.releaseDate}**
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <a 
                        href={game.downloadLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold w-full md:w-80 transition-transform transform hover:scale-[1.02] flex items-center justify-center"
                    >
                        <FaDownload className='mr-3' /> Download Now
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-8 p-6 bg-[#1E293B] rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold text-[#7C3AED] mb-4 flex items-center">
                <FaInfoCircle className="mr-3 text-2xl" /> About {game.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">{game.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#1E293B] p-6 rounded-xl shadow-xl lg:col-span-1">
                <h3 className="text-2xl font-semibold mb-5 text-white border-b border-[#7C3AED]/50 pb-2">
                    Additional Info
                </h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <span className="font-semibold text-[#7C3AED]">Publisher:</span> 
                        <p className="mt-1">{game.publisher}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-[#7C3AED]">Platforms:</span> 
                        <p className="mt-1">{platformString}</p>
                    </div>
                    <div>
                        <span className="font-semibold text-[#7C3AED]">Ratings Score:</span> 
                        <p className="mt-1 flex items-center">
                            <FaStar className="text-yellow-400 mr-1" /> {game.ratings} / 5.0
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-[#1E293B] p-6 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-semibold mb-5 text-[#7C3AED] flex items-center">
                        <FaDesktop className="mr-3" /> Minimum Specs
                    </h3>
                    {game.minimumSpecs ? renderSpecs(game.minimumSpecs) : <p className="text-gray-400">N/A</p>}
                </div>

                <div className="bg-[#1E293B] p-6 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-semibold mb-5 text-[#7C3AED] flex items-center">
                        <FaCogs className="mr-3" /> Recommended Specs
                    </h3>
                    {game.recommendedSpecs ? renderSpecs(game.recommendedSpecs) : <p className="text-gray-400">N/A</p>}
                </div>
            </div>

        </div>
        </div>
    </div>
  );
};

export default Details;
