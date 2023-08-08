import React, { useState } from "react";
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from "../../Components/Paragraph";
import Inputs from "../../Components/Inputs";
import Button from "../../Components/Button";
import { PATHS } from "../../router/paths";
import { useNavigate } from "react-router-dom";
import GoogleImg from "../../assets/google.svg";
import TwitterImg from "../../assets/twitter.svg";
import LinkedInImg from "../../assets/linkedin.svg";
import GithubImg from "../../assets/github.svg";
import EyeImg from "../../assets/eye.svg";
import { useAuthContext } from "../../Context/AuthContext";

const LogInPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false); 

  const { login, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = ({ target: { value, name } }) =>
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  setFormData((prev) => ({ ...prev, [name]: value }));

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login(formData);

    const validationErrors = {};

    // Validate Email
    if (formData.email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    // Validate password
    if (formData.password.trim() === '') {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length > 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    // Set the validation errors
    setErrors(validationErrors);

    // Submit the form if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted successfully');
    }
  };

  // const hadnleShow = () => {
  //   setShow(!show);
  // }

  return (
    <div className="logIn-page">
      <div className="logIn-info-box">
        <Logo logoImage="/assets/logo.svg" />
        <Paragraph cornerImage="/assets/joystick.png" />
      </div>
      <div className="logIn-box">
        <div>
          <div className="title">
            <h1>Join the game!</h1>
            <p>Go inside the best gamers social network!</p>
            <ul>
              <li>
                <img src={GoogleImg} alt="google" />
              </li>
              <li>
                <img src={TwitterImg} alt="twitter" />
              </li>
              <li>
                <img src={LinkedInImg} alt="linkedin" />
              </li>
              <li>
                <img src={GithubImg} alt="github" />
              </li>
            </ul>
            <span></span>
          </div>
          <form onSubmit={handleSubmit}>
            <Inputs
              label="Your email"
              type="email"
              placeholder="Write your email"
              onChange={handleInputChange}
              value={formData.email}
              imageHidden
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <Inputs
              label="Enter your Password*"
              type={show ? "text" : "password"}
              placeholder="•••••••••"
              onChange={handleInputChange}
              value={formData.password}
              imageSrc={show ? EyeImg : EyeImg}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <div className="sign-btn">
              <Button btnText={isLoading ? "Loading..." : "Login"} />
              <p>
                Don't have an account? <span onClick={() => navigate(PATHS.SIGNUP)}>Register</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
