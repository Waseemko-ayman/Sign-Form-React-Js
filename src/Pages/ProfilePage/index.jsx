import React from 'react'
import "./style.css"
import Title from '../../Components/Title';
import profileImg from "../../assets/profileImage.jpg"

const ProfilePage = () => {
  return (
    <div className='prfoile__page'>
      <Title textTitle="Your Profile" />
      <div className="profile__info">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>Waseem Abd Elhadi</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>waseem.abedalhady@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <img src={profileImg} alt="profile_image" />
      </div>
    </div>
  )
}

export default ProfilePage;