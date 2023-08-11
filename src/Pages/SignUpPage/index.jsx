import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from "../../Components/Paragraph";
import Inputs from "../../Components/Inputs";
import Button from "../../Components/Button";
import WhiteLogo from "../../assets/white-logo.svg";
import cornerImage from "../../assets/corner-image.svg";
import EyeImg from "../../assets/eye.svg";
import { PATHS } from "../../router/paths";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../Context/AuthContext";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

export const formSchema = Yup.object({
  name: Yup.string().required("Username is required"),

  email: Yup.string()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email is required"),

  // password: Yup.string()
  //   .min(8, "Password must be at least 8 characters long")
  //   .matches(
  //     passwordRegex,
  //     "password should be more that 8 and contains small and capital and number and special character"
  //   )
  //   .required("Password is required"),

  // repeatPassword: Yup.string()
  //   .matches(
  //     passwordRegex,
  //     "password should be more that 8 and contains small and capital and number and special character"
  //   )
  //   .required("RePassword is required")
  //   .oneOf([Yup.ref('password'), null], 'Passwords must match'),

  password: Yup.string()
  .required("password should be more that 8 and contains small and capital and number and special character"),
  repeatPassword: Yup.string()
  .required("password should be more that 8 and contains small and capital and number and special character")
  .oneOf([Yup.ref('password'), null], 'Passwords must match'),

  checked: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const SignUpPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);

  const { signup, isLoading } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    signup(data);
    console.log(data);
    reset();
  };

  const hadnleShowPass = () => {
    setShowPass(!showPass);
  };

  const hadnleShowRePass = () => {
    setShowRePass(!showRePass);
  };

  return (
    <div className="signUp-page">
      <div className="signUp-info-box">
        <Logo logoImage={WhiteLogo} white />
        <Paragraph cornerImage={cornerImage} white />
      </div>
      <div className="signUp-box">
        <button className="back-btn">
          <i className="fa-solid fa-angle-left"></i>
          <span onClick={() => navigate(PATHS.LOGIN)}>Back</span>
        </button>
        <div className="signUp">
          <div>
            <div className="title">
              <h1>Register Individual Account!</h1>
              <p>
                For the purpose of gamers regulation, your details are required.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Inputs
                type="text"
                label="Username*"
                placeholder="Enter username"
                register={register}
                name="name"
                iconHidden
              />
              {errors.name && <p className="error">{errors.name.message}</p>}

              <Inputs
                type="email"
                label="Email address*"
                placeholder="Enter email address"
                register={register}
                name="email"
                iconHidden
              />
              {errors.email && <p className="error">{errors.email.message}</p>}

              <Inputs
                type={showPass ? "text" : "password"}
                label="Create Password*"
                placeholder="Password"
                register={register}
                name="password"
                iconClassName={
                  showPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                }
                hadnleShow={hadnleShowPass}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}

              <Inputs
                type={showRePass ? "text" : "password"}
                label="Repeat password*"
                placeholder="Repeat password"
                register={register}
                name="repeatPassword"
                iconClassName={
                  showRePass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                }
                hadnleShow={hadnleShowRePass}
              />
              {errors.repeatPassword && (
                <p className="error">{errors.repeatPassword.message}</p>
              )}

              <div className="checkbox">
                <div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    register={register}
                    name="checked"
                    defaultChecked
                  />
                  <label htmlFor="checkbox">
                    I agree to terms & conditions
                  </label>
                </div>
                {errors.checked && (
                  <p className="error">{errors.checked.message}</p>
                )}
              </div>
              <div className="register">
                <Button
                  btnText={isLoading ? "Loading..." : "Register Account"}
                />
                <span></span>
              </div>
            </form>
            <button
              className="register-btn"
              onClick={() => navigate(PATHS.LOGIN)}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
