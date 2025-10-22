import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Games = ({ game }) => {
  return (
    <div>
      <div className="  card  bg-[#1E293B] max-w-96 shadow-sm">
        <figure>
          <img
            src={game.coverPhoto}
            alt=""
            className="h-[300px] object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title min-h-[60px] ">{game.title}</h2>

          <div className="card-actions justify-between">
            <div>Develop By: {game.developer}</div>
            <div className="badge badge-outline">
              <CiStar />
              {game.ratings}
            </div>
          </div>
          <Link to={`/details/${game.id}`}><button className="px-4 py-2 bg-[#7C3AED] text-white rounded-md hover:bg-[#6D28D9] transition">
            Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
