import React from "react";
import "./style.css";
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