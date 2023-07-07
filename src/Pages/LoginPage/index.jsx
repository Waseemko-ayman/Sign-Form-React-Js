import React, { Component } from 'react'
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from '../../Components/Paragraph';

class LoginPage extends Component {
  render() {
    return (
      <div className='login-page'>
        <div className="info-box">
          <Logo logoImage="/assets/white-logo.svg"/>
          <Paragraph cornerImage="/assets/corner-image.svg"/>
        </div>
        <div className="login">

        </div>
      </div>
    )
  }
}

export default LoginPage;