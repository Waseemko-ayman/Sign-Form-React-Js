import React, { useEffect, useState } from "react";
import "./style.css";
import Title from "../../Components/Title";
import profileImg from "../../assets/profileImage.jpg";
import { useAuthContext } from "../../Context/AuthContext";

const ProfilePage = () => {
  const { getProfileData, isLoading } = useAuthContext();
  const [info, setInfo] = useState();

  useEffect(() => {
    (async () => {
      const item = await getProfileData();
      setInfo(item);
    })();
  }, []);

  return (
    <div className="prfoile__page">
      <Title textTitle="Your Profile" />
      {isLoading && (
        <div className="profile__info">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{info?.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{info?.email}</td>
              </tr>
            </tbody>
          </table>
          <img src={profileImg} alt="profile_image" />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
