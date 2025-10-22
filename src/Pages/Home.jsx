import React from "react";
import bgImg from "../assets/game bg.jpg";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <div
        className=" h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Slider></Slider>
      </div>
     
      <div></div>
    </div>
  );
};

export default Home;
