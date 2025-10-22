import React from "react";
import bgImg from "../assets/game bg.jpg";
import Slider from "../Components/Slider";
import Popular from "../Components/Popular";
import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData()
    
    
  return (
    <div>
      <div
        className=" max-h-[500px] bg-cover bg-center mx-auto py-5 "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Slider></Slider>
      </div>
     
      <div className="grid items-center justify-center">
        <h3>Populer Game</h3>
       {data.map(game=>
        <Popular key={game.id} game={game}></Popular>) }
      </div>
    </div>
  );
};

export default Home;
