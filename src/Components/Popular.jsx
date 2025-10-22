import React from "react";

const Popular = ({ game }) => {
  

  return (
    <div>
      <div className="  card  bg-[#1E293B] max-w-96 shadow-sm">
        <figure>
          <img
            src={game.coverPhoto}
            alt="" className="h-[300px] object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title min-h-[60px] ">
            {game.title}</h2>
          
          <div className="card-actions justify-between">
            <div >Develop By: {game.developer}</div>
            <div className="badge badge-outline">{game.ratings}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
