import React, { Component } from 'react'
import "./style.css";

class Logo extends Component {
  render() {
    const { logoImage } = this.props;
    return (
      <div className='logo'>
        <img src={logoImage} alt="logo" />
        <span>Gamers</span>
      </div>
    )
  }
}

export default Logo;