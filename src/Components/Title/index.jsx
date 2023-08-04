import React from 'react'
import "./style.css";

const Title = ({ textTitle, upperCase }) => {
  return (
    <h2 className={upperCase ? "upper_case" : ""}>{textTitle}</h2>
  )
}

export default Title;