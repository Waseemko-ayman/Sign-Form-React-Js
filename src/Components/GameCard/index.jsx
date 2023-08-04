import React from "react";
import "./style.css";

const GameCard = ({ Gamebackground, GamePerson, GameLogo, GameDescription }) => {
  return (
    <div className="card" style={{ backgroundImage: { Gamebackground } }}>
      <img src={GamePerson} alt="GamePerson" />
      <div className="text">
        <img src={GameLogo} alt="logo" />
        <p>{GameDescription}</p>
      </div>
    </div>
  );
};

export default GameCard;
