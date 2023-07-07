import React, { Component } from 'react'
import "./style.css";

class Title extends Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div className='title'>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    )
  }
}

export default Title;