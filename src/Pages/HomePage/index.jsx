import React from "react";
import "./style.css";
import GamePersonOne from "../../assets/GamePerson-1.png";
import GameLogoOne from "../../assets/GameLogo-1.png";
import HogwartsLegacy from "../../assets/HogwartsLegacy.jpg"
import GodOfWar from "../../assets/GodOfWar.jpg"
import CrashBandicoot from "../../assets/CrashBandicoot.jpg"
import DyingLight2 from "../../assets/DyingLight2.jpeg"
import GameCard from "../../Components/GameCard";
import { GAME_CARD_DATA } from "../../mock/GameCard";

const HomePage = ({ dsgsdg }) => {
  return (
    <div className="home__page">
      <h2>NEW GAMES</h2>
      <div className="game__cards">
        {/* <div className="card" style={{ backgroundImage: {dsgsdg} }}>
          <img src={GamePersonOne} alt="GamePerson" />
          <div className="text">
            <img src={GameLogoOne} alt="logo" />
            <p>
              Join in the new DLC with Kratos to learn more about him and his
              future.
            </p>
          </div>
        </div> */}
        {GAME_CARD_DATA.map(({ id, backGround, Logo, person, description }) => (
          <GameCard key={id} Gamebackground={backGround} GamePerson={person} GameLogo={Logo} GameDescription={description} />
        ))}
      </div>
      <div className="content">
        <div className="last__played">
          <h3>last played</h3>
          <div className="box">
            <img src={HogwartsLegacy} alt="" />
            <p>Hogwarts Legacy 50%</p>
          </div>
          <div className="box">
            <img src={GodOfWar} alt="" />
            <p>God Of War: Ragnarök 72.5%</p>
          </div>
          <div className="box">
            <img src={CrashBandicoot} alt="" />
            <p>Crash Bandicoot N. Sane Trilogy 34%</p>
          </div>
          <div className="box">
            <img src={DyingLight2} alt="" />
            <p>Dying Light 2 Stay Human 100%</p>
          </div>
        </div>
        <div className="most__recent__trophy">
          <h3>most recent trophy</h3>
          <div className="image">
            <div className="text">
              <h3>assassin's creed odyssey</h3>
              <p>last played: 34 hours ago</p>
            </div>
          </div>
        </div>
        <div className="friends">
          <h3>friends</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;