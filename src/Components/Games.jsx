import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Games = ({ game }) => {
  return (<div className=" card  bg-[#1E293B] max-w-full shadow-sm">
        <figure>
          <img
            src={game.coverPhoto}
            alt=""
            className="h-[200px] object-cover"
          />
        </figure>
        <div className="card-body flex flex-col justify-between flex-1">
          <h2 className="card-title min-h-[50px] ">{game.title}</h2>
          <p className="text-gray-400 text-sm flex-1 line-clamp-2">
             {game.description}... 
        </p>

         </div>
         <Link to={`/details/${game.id}`} className="mt-1">
          <button className="btn w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold">
            See More
          </button>
        </Link>
      </div>
  );
};

export default Games;
