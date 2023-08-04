import React from 'react'
import "./style.css";
import Title from '../../../../Components/Title';
import LastPlayed from '../../../../Components/LastPlayed';
import { LAST_PLAYED_DATA } from '../../../../mock/LastPlayed';
import friendsImage from "../../../../assets/friendsImage.png"

const ContentsSection = () => {
  return (
    <div className="content">
    <div className="last__played">
      <Title textTitle="last played" />

      {LAST_PLAYED_DATA.map(({ backGround, description }) => (
        <LastPlayed  srcImage={backGround} description={description} />
      ))}
    </div>
    <div className="most__recent__trophy">
      <Title textTitle="most recent trophy" />
      
      <div className="image">
        <div className="text">
          <h3>assassin's creed odyssey</h3>
          <p>last played: 34 hours ago</p>
        </div>
      </div>
    </div>
    <div className="friends">
      <Title textTitle="friends" />
      <img src={friendsImage} alt="cycles" />
    </div>
  </div>
  )
}

export default ContentsSection;