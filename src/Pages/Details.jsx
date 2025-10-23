import React from "react";
import { useLoaderData, useParams } from "react-router";
import useTitle from "../Hooks/useTitle";

const Details = () => {
  const { Id } = useParams();
  const games = useLoaderData();
  const game = games.find((game) => game.id == Id);
  useTitle(game ? game.title : "Game Details")
  return (
    <div className="bg-[#0F172A]">
      <div className="w-11/12 mx-auto ">
        <div>
          <img src={game.coverPhoto} alt="" className="   rounded-lg " />
          
            <h1 className="text-4xl my-4 font-bold text-white">{game.title}</h1>
           
        </div>

        <div className="mt-6 p-5 bg-[#1E293B] rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-2">
            About the Game
          </h2>
          <p className="text-gray-300 ">{game.description}</p>
        </div>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-200">
          <div>
            <span className="font-semibold text-[#7C3AED]">Developer:</span>{" "}
            {game.developer}
          </div>
          <div>
            <span className="font-semibold text-[#7C3AED]">Category:</span>{" "}
            {game.category}
          </div>
          <div>
            <span className="font-semibold text-[#7C3AED]">Ratings:</span> ⭐{" "}
            {game.ratings}
          </div>
        </div>

        <a
          href={game.downloadLink}
          target="_blank"
          rel="noreferrer"
          className="btn bg-[#7C3AED]  text-white font-semibold rounded-md hover:scale-105 transition-transform mt-4"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Details;
