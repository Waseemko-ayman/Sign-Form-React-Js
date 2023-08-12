import React from 'react'
import "./style.css"
import Logo from "../../assets/logo.svg";

const SiteLoading = () => {
  return (
    <div className="main__loading">
      <img src={Logo} alt="logo" />
      <span>Gamers</span>
    </div>
  )
}

export default SiteLoading