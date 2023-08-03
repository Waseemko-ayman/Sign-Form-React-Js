import React from 'react'
import "./style.css";

const Paragraph = ({ cornerImage }) => {
  return (
    <div className="paragraph">
      <span>“</span>
      <p>
        I always observe the people who pass by when I ride an escalator. I'll never see most 
        of them again, so I imagine a lot of things about their lives... about the day ahead of them.
      </p>
      <h3>Hideo Kojima</h3>
      <img src={cornerImage} alt="corner-img" />
    </div>
  )
}

export default Paragraph;