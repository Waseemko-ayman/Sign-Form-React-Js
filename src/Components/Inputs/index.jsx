import React from 'react'
import "./style.css";

const Inputs = ({ label, type, placeholder, iconClassName, iconHidden, name, register, hadnleShow }) => {
  return (
    <div className='input-box'>
      <label htmlFor={name}>{label}</label>
      <div className='input-div'>
        <input type={type} id={name} placeholder={placeholder} {...register(name)} />
        <i className={`${iconClassName} ${iconHidden ? "icon__hidden" : ""}`} onClick={hadnleShow}></i>
      </div>
    </div>
  )
}

export default Inputs;