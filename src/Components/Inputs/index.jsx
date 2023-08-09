import React from 'react'
import "./style.css";

const Inputs = ({ label, type, placeholder, imageSrc, imageHidden,  }) => {
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

export default Inputs;