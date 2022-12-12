import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import TrashtagLabel from '../assets/trashtga_lab.png'

const Hero = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/create");
  };

  return (
    <div id="hero">
      {/* <img id='hero-background' src={list[0].src}/> */}

      <Header />

        <img id="logo-image" src={TrashtagLabel}/>

        <h1 id="header-text-second"> The first NFT Marketplace dedicated for FMCG companies</h1>
      <h5 id="header-subtext">FMCG companies can purchase waste tokens to offset their environmental impact and demonstrate their commitment to sustainability. Each waste token represents a certain amount of waste that has been collected and properly disposed of, providing a transparent and verifiable way for companies to offset their carbon footprint.</h5>

      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          Explore
        </button>
      </div>
    </div>
  );
};

export default Hero;
