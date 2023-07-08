import React, { Component } from 'react'
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from '../../Components/Paragraph';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';

class LoginPage extends Component {
  state = {

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className='login-page'>
        <div className="login-info-box">
          <Logo logoImage="/assets/white-logo.svg"/>
          <Paragraph cornerImage="/assets/corner-image.svg"/>
        </div>
        <div className="login-box">
          <button className="back-btn">
            <i class="fa-solid fa-angle-left"></i>
            <span onClick={this.props.togglePage}>Back</span>
          </button>
          <div className="login">
            <div>
              <div className="title">
                <h1>Register Individual Account!</h1>
                <p>For the purpose of gamers regulation, your details are required.</p>
              </div>
              <form action="" onSubmit={this.handleSubmit}>
                <Inputs label="Username*" type="text" placeholder="Enter username" imageHidden />
                <Inputs label="Email address*" type="email" placeholder="Enter email address" imageHidden />
                <Inputs label="Phone*" type="text" placeholder="Enter phone" imageHidden />
                <Inputs label="Create Password*" type="password" placeholder="Password" imageSrc="/assets/eye.svg" />
                <Inputs label="Repeat password*" type="password" placeholder="Repeat password" imageSrc="/assets/eye.svg" />
                <div className='checkbox'>
                  <input type="checkbox" id="checkbox" checked />
                  <label htmlFor="checkbox">I agree to terms & conditions</label>
                </div>
                <div className="register">
                  <Button btnText="Register Account" />
                  <span></span>
                </div>
                <button className='register-btn' onClick={this.props.togglePage}>login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage;