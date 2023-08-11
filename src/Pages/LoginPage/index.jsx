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
import joystick from "../../assets/joystick.png";
import logo from "../../assets/logo.svg";
import EyeImg from "../../assets/eye.svg";
import { useAuthContext } from "../../Context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex =
//   /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

const formSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email is required"),
  // password: Yup.string().matches(
  //   passwordRegex,
  //   "password should be more that 8 and contains small and capital and number and special character"
  // ),
  password: Yup.string().required(
    "password should be more that 8 and contains small and capital and number and special character"
  ),
});

const LogInPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { login, isLoading } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    login(data);
    // console.log(data);
  };

  // const hadnleShow = () => {
  //   setShow(!show);
  // }

  return (
    <div className="logIn-page">
      <div className="logIn-info-box">
        <Logo logoImage={logo} />
        <Paragraph cornerImage={joystick} />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Inputs
              label="Your email"
              type="email"
              placeholder="Write your email"
              register={register}
              name="email"
              imageHidden
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <Inputs
              label="Enter your Password*"
              type={show ? "text" : "password"}
              placeholder="•••••••••"
              register={register}
              name="password"
              imageSrc={show ? EyeImg : EyeImg}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}

            <div className="login-btn">
              <Button btnText={isLoading ? "Loading..." : "Login"} />
              <p>
                Don't have an account?{" "}
                <span onClick={() => navigate(PATHS.SIGNUP)}>Register</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
