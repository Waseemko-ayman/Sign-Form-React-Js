import React from "react";
import "./style.css";

const LastPlayed = ({ srcImage, description }) => {
  return (
    <div className="box">
      <img src={srcImage} alt="game" />
      <p>{description}</p>
    </div>
  );
};

export default LastPlayed;
