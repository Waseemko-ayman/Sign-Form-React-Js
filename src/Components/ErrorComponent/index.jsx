import React from "react";
import "./style.css";
import Logo from "../../assets/logo.svg";

const ErrorComponent = () => {
  return (
    <div className="error__comp">
      <img src={Logo} alt="logo" />
      <div className="error__text">
        <h1>404</h1>
        <p>
          We are sorry! Something went wrong and it will be fixed soon, thank
          you for your understanding!
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
