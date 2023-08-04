import React from 'react'
import "./style.css"
import AccontImage from "../../assets/accountImage.png"

const Header = () => {
  return (
    <header className='header__games'>
      <div className='title'>
        <div className='text'>
          <span>Welcome back,</span>
          <span>Waseem!</span>
        </div>
        <div className="image">
          <img src={AccontImage} alt="user" />
        </div>
      </div>
    </header>
  )
}

export default Header