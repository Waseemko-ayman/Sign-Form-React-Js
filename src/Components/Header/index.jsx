import React from "react";
import "./style.css";
import AccontImage from "../../assets/profileImage.jpg";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import useAuth from "../../Hook/useAuth";

const Header = () => {
  const { user } = useAuth();
  
  return (
    <header className="header__games">
      <Link to={PATHS.USER.PROFILE}>
        <div className="title">
          <div className="text">
            <span>Welcome back,</span>
            <span>{user?.name}!</span>
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
