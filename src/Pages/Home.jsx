import React from "react";
import bgImg from "../assets/game bg.jpg";
import Slider from "../Components/Slider";
import Popular from "../Components/Popular";
import { useLoaderData } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    const data = useLoaderData()
    
    
  return (
    <div className="bg-[#0F172A] ">
      <div
        className=" max-h-[500px] bg-cover bg-center w-11/12 mx-auto rounded-sm md:rounded-2xl py-5 "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Slider></Slider>
      </div>
     
      <div className="grid items-center justify-center w-11/12 mx-auto">
        <h3 className="text-2xl font-semibold text-center my-3">Populer Game</h3>
       <div className="grid  items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{data.sort((a,b)=>b.ratings-a.ratings).slice(0,6).map(game=>
        <Popular key={game.id} game={game}></Popular>) }
       
        </div>
         
      </div>
      <div className="flex mt-3 justify-end w-11/12 mx-auto">
        <button className=" btn hover:bg-[#6D28D9] border-[#14B8A6]
  bg-[#7C3AED]">More Game <FaArrowRight/></button>
      </div>
    </div>
  );
};

export default Home;
