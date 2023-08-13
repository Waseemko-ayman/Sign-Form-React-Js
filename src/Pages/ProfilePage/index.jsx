import "./style.css";
import Title from "../../Components/Title";
import profileImg from "../../assets/profileImage.jpg";
import useAuth from "../../Hook/useAuth";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { getProfileData, user } = useAuth();
  // console.log(user);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getProfileData();
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="prfoile__page">
      <Title textTitle="Your Profile" />
      {!isLoading && (
        <div className="profile__info">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{user?.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user?.email}</td>
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
