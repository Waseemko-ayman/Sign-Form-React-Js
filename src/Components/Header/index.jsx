import React from "react";
import "./style.css";
import AccontImage from "../../assets/profileImage.jpg";
import { useAuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { ROLES } from "../../Constants";

const Header = () => {
  const { role, user } = useAuthContext();
  // const data = useAuthContext();

  return (
    <header className="header__games">
      {/* <Link to={role === ROLES.USER ? PATHS.USER.PROFILE : PATHS.USER.PROFILE}> */}
      <Link to={role === ROLES.USER && PATHS.USER.PROFILE}>
        <div className="title">
          <div className="text">
            <span>Welcome back,</span>
            {/* <span>{data.role}!</span> */}
            <span>{user.name}!</span>
          </div>
          <div className="image">
            <img src={AccontImage} alt="user" />
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
