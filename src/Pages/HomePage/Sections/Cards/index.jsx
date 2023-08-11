import React from "react";
import GameCard from "../../../../Components/GameCard";
import { GAME_CARD_DATA } from "../../../../mock/GameCard";
import "./style.css";

const CardsSection = () => {
  return (
    <div className="game__cards">
      {GAME_CARD_DATA.map(({ id, Logo, person, description, imgClassName }) => (
        <GameCard
          key={id}
          gamePerson={person}
          gameLogo={Logo}
          gameDescription={description}
        />
      ))}
    </div>
  );
};

export default CardsSection;
