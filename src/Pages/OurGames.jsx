import React from "react";
import { useLoaderData } from "react-router";

import Games from "../Components/Games";
import useTitle from "../Hooks/useTitle";


const OurGames = () => {
  useTitle('Our Games')
  const games = useLoaderData();
  return (
    <div className="bg-[#0F172A]">
      <div className="grid items-center justify-center w-11/12 px-2 mx-auto">
        <h3 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-center my-3 md:my-5 lg:my-7 ">
          Our All Games
        </h3>
        <div className="grid bg-[#0F172A] items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games
            .sort((a, b) => b.ratings - a.ratings)
            .map((game) => (
              <Games key={game.id} game={game}></Games>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurGames;
