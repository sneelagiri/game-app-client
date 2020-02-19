import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="header-container">
      <h1 className="home-title">GAME</h1>
      <img
        className="game-image"
        src="https://pngimage.net/wp-content/uploads/2018/06/game-png-5.png"
        alt="game-image"
      />
    </div>
  );
}
