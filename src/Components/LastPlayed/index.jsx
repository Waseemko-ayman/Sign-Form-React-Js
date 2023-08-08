import React from "react";
import "./style.css";
// import Crashe from "../../assets/CrashBandicoot.jpg"

const LastPlayed = ({ srcImage, description }) => {
  return (
    <div className="box">
      <img src={srcImage} alt="game" />
      {/* <img src={Crashe} alt="game" /> */}
      <p>{description}</p>
    </div>
  );
};

export default LastPlayed;
