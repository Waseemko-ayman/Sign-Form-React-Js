import React, { Component } from 'react'
import "./style.css";

class Button extends Component {
  render() {
    const { btnText } = this.props;
    return (
      <button className='register-btn'>{ btnText }</button>
    )
  }
}

export default Button;