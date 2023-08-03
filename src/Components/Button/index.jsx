import React from 'react'
import "./style.css";

const Button = ({ btnText }) => {
  return (
    <button className='register-btn'>{ btnText }</button>
  )
}

export default Button;