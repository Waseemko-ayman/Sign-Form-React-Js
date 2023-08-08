import React from 'react'
import "./style.css";

const Logo = ({ logoImage, white }) => {
  return (
    <div className='logo'>
      <img src={logoImage} alt="logo" />
      <span className={white ? "white__color" : ""}>Gamers</span>
    </div>
  )
}

export default Logo;