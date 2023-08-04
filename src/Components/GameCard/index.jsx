import React from "react";
import "./style.css";

const GameCard = ({ Gamebackground, GamePerson, GameLogo, GameDescription }) => {
  const myStyle = {
    backgroundImage: `url(${Gamebackground})`
  }
  return (
    <div className="card" style={myStyle}>
      <img src={GamePerson} alt="GamePerson" />
      <div className="text">
        <img src={GameLogo} alt="logo" />
        <p>{GameDescription}</p>
      </div>
    </div>
  );
};

export default GameCard;
