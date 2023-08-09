import React from "react";
import "./style.css";

const GameCard = ({ GamePerson, GameLogo, GameDescription, imageHidden }) => {
  return (
    <div className="card">
      <img src={GamePerson} alt="GamePerson" />
      <div className="text">
        <img src={GameLogo} alt="logo" />
        <p>{GameDescription}</p>
      </div>
    </div>
  );
};

export default GameCard;
