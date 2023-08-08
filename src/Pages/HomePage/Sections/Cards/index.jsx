import React from "react";
import GameCard from "../../../../Components/GameCard";
import { GAME_CARD_DATA } from "../../../../mock/GameCard";
import "./style.css";

const CardsSection = () => {
  return (
    <div className="game__cards">
      {GAME_CARD_DATA.map(({ id, Logo, person, description }) => (
        <GameCard
          key={id}
          GamePerson={person}
          GameLogo={Logo}
          GameDescription={description}
        />
      ))}
    </div>
  );
};

export default CardsSection;
