import React from 'react'
import "./style.css";

const Logo = ({ logoImage }) => {
  return (
    <div className='logo'>
      <img src={logoImage} alt="logo" />
      <span>Gamers</span>
    </div>
  )
}

export default Logo;