import React from "react";
import bgImg from "../assets/game bg.jpg";
import Slider from "../Components/Slider";

import { Link, useLoaderData } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import Newslater from "../Components/Newslater";
import Games from "../Components/Games";
import useTitle from "../Hooks/useTitle";


const Home = () => {
  const games = useLoaderData();
  useTitle('Home')

  return (
    <div className="bg-[#0F172A] ">
      <div
        className=" mt-12 md:mt-0 max-h-[500px] bg-cover bg-center w-11/12 mx-auto rounded-sm md:rounded-2xl py-5 "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Slider></Slider>
      </div>

      <div className="grid items-center justify-center w-11/12 mx-auto">
        <h3 className="text-2xl font-semibold text-center my-3">
          Populer Game
        </h3>
        <div className="grid  items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games
            .sort((a, b) => b.ratings - a.ratings)
            .slice(0, 6)
            .map((game) => (
              <Games key={game.id} game={game}></Games>
            ))}
        </div>
      </div>
      <div className="flex mt-3 justify-end w-11/12 mx-auto">
        <Link to={'/games'}>
          <button
            className=" btn hover:bg-[#6D28D9] border-[#14B8A6] bg-[#7C3AED]"
          >
            More Game <FaArrowRight />
          </button>
        </Link>
      </div>
      <Newslater></Newslater>
    </div>
  );
};

export default Home;
