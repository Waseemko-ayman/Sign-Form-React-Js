import "./style.css";
import Title from "../../Components/Title";
import profileImg from "../../assets/profileImage.jpg";
import useAuth from "../../Hook/useAuth";

const ProfilePage = () => {
  const { user, isLoading } = useAuth();
  console.log(user);

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
