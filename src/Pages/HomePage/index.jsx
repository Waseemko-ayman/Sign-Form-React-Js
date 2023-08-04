import React from "react";
import "./style.css";
// import HogwartsLegacy from "../../assets/HogwartsLegacy.jpg"
// import GodOfWar from "../../assets/GodOfWar.jpg"
// import CrashBandicoot from "../../assets/CrashBandicoot.jpg"
// import DyingLight2 from "../../assets/DyingLight2.jpeg"
import Title from "../../Components/Title";
import CardsSection from "./Sections/Cards";
import ContentsSection from "./Sections/Contents";

const HomePage = () => {
  return (
    <div className="home__page">
      <Title textTitle="New Games" upperCase />
      <CardsSection />
      <ContentsSection />
    </div>
  );
};

export default HomePage;