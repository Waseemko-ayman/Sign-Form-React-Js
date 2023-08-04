import React from 'react'
import "./style.css";
import Title from '../../../../Components/Title';
import LastPlayed from '../../../../Components/LastPlayed';
import { LAST_PLAYED_DATA } from '../../../../mock/LastPlayed';

const ContentsSection = () => {
  return (
    <div className="content">
    <div className="last__played">
      <Title textTitle="last played" />

      {LAST_PLAYED_DATA.map(({ backGround, description }) => (
        <LastPlayed  srcImage={backGround} description={description} />
      ))}

      {/* <div className="box">
        <img src={HogwartsLegacy} alt="" />
        <p>Hogwarts Legacy 50%</p>
      </div>
      <div className="box">
        <img src={GodOfWar} alt="" />
        <p>God Of War: Ragnarök 72.5%</p>
      </div>
      <div className="box">
        <img src={CrashBandicoot} alt="" />
        <p>Crash Bandicoot N. Sane Trilogy 34%</p>
      </div>
      <div className="box">
        <img src={DyingLight2} alt="" />
        <p>Dying Light 2 Stay Human 100%</p>
      </div> */}
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
    </div>
  </div>
  )
}

export default ContentsSection