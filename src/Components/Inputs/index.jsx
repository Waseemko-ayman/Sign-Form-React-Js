import React from 'react'
import "./style.css";

const Inputs = ({ label, type, placeholder, imageSrc, imageHidden, name, register }) => {
  return (
    <div className='input-box'>
      <label htmlFor={name}>{label}</label>
      <div className='input-div'>
        <input type={type} id={name} placeholder={placeholder} {...register(name)} />
        <img src={imageSrc} alt="eye" className={`${imageHidden ? "image__hidden" : ""}`}/>
      </div>
    </div>
  )
}

export default Inputs;