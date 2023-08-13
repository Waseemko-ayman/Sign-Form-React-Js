import React from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { ROLES, THEMES } from "../../Constants";
import { useThemeContext } from "../../Context/ThemeContext";
import { PATHS } from "../../router/paths";
import GamersLogo from "../../assets/GamersLogo.png";

const Sidebar = () => {
  const { role, logout } = useAuthContext();
  const { theme, toggleTheme } = useThemeContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <sidebar className="sidebar__games">
      <img
        src={GamersLogo}
        alt="Gamers Logo"
        onClick={() => navigate(PATHS.HOME)}
      />
      <ul>
        <NavLink>
          <li>
            <button onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </li>
        </NavLink>
        {role === ROLES.ADMIN && (
          <NavLink to={PATHS.USER.USERSLIST}>
            <li>
              <button>
                <i className="fa-solid fa-gear"></i>
              </button>
            </li>
          </NavLink>
        )}
      </ul>
      <div className="theme">
        <button onClick={() => theme === THEMES.LIGHT && toggleTheme()}>
          <i
            style={
              theme === THEMES.DARK
                ? {
                    color: "white",
                  }
                : {
                    color: "#222",
                  }
            }
            className="fa-regular fa-moon"
          ></i>
        </button>
        <button onClick={() => theme === THEMES.DARK && toggleTheme()}>
          <i
            style={
              theme === THEMES.LIGHT
                ? {
                    color: "white",
                  }
                : {
                    color: "#222",
                  }
            }
            className="fa-regular fa-sun"
          ></i>
        </button>
      </div>
    </sidebar>
  );
};

export default Sidebar;
