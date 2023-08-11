import React from "react";
import "./style.css";

const GameCard = ({ gamePerson, gameLogo, gameDescription, imageHidden }) => {
  return (
    <div className="card">
      <img src={gamePerson} alt="GamePerson" />
      <div className="text">
        <img src={gameLogo} alt="logo" />
        <p>{gameDescription}</p>
      </div>
    </div>
  );
};

export default GameCard;
