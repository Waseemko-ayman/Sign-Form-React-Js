import React, { Component } from 'react'
import "./style.css";

class Inputs extends Component {
  render() {
    const { label, type, placeholder, imageSrc, imageHidden } = this.props;
    return (
      <div className='input-box'>
        <label>{ label }</label>
        <div className='input-div'>
          <input type={ type } placeholder={ placeholder } />
          <img src={imageSrc} alt="eye" className={`${imageHidden ? "image__hidden" : ""}`}/>
        </div>
      </div>
    )
  }
}

export default Inputs;