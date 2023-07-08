import React, { Component } from 'react'
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from '../../Components/Paragraph';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';

class SignPage extends Component {
  render() {
    return (
      <div className='signIn-page'>
        <div className="signIn-info-box">
          <Logo logoImage="/assets/logo.svg" />
          <Paragraph cornerImage="/assets/joystick.png" />
        </div>
        <div className="signIn-box">
          <div>
            <div className="title">
              <h1>Join the game!</h1>
              <p>Go inside the best gamers social network!</p>
              <ul>
                <li><img src="/assets/google.svg" alt="google" /></li>
                <li><img src="/assets/twitter.svg" alt="twitter" /></li>
                <li><img src="/assets/linkedin.svg" alt="linkedin" /></li>
                <li><img src="/assets/github.svg" alt="github" /></li>
              </ul>
              <span></span>
            </div>
            <form action="">
              <Inputs label="Your email" type="email" placeholder="Write your email" imageHidden/>
              <Inputs label="Enter your Password*" type="password" placeholder="Write your password" imageSrc="/assets/eye.svg"/>
              <div className="sign-btn">
                <Button btnText="Login"/>
                <p>Don't have an account? <span>Register</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignPage;