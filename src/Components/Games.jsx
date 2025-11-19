import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Games = ({ game }) => {
  return (
    <Link to={`/details/${game.id}`}><div>
      <div className="  card  bg-[#1E293B] max-w-full shadow-sm">
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
         
        </div>
      </div>
    </div></Link>
  );
};

export default Games;
