import React, { Component } from 'react'
import "./style.css";

class Inputs extends Component {
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <div className='input-box'>
        <label>{ label }</label>
        <input type={ type } placeholder={ placeholder } />
      </div>
    )
  }
}

export default Inputs;