import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from "../../Components/Paragraph";
// import Inputs from "../../Components/Inputs";
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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex =
//   /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

export const formSchema = Yup.object({
  name: Yup.string().required("Username is required"),
  email: Yup.string()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email is required"),
  phone: Yup.number()
    .positive()
    .integer()
    .min(10)
    .max(13)
    .required("Phone is required"),
  // password: Yup.string().matches(
  //   passwordRegex,
  //   "password should be more that 8 and contains small and capital and number and special character"
  // ),
  // repeatPassword: Yup.string().matches(
  //   passwordRegex,
  //   "password should be more that 8 and contains small and capital and number and special character"
  // ),
  password: Yup.string().required("password should be more that 8 and contains small and capital and number and special character"),
  repeatPassword: Yup.string().required("password should be more that 8 and contains small and capital and number and special character"),
  checked: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const SignUpPage = () => {
  const { signup, isLoading } = useAuthContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    signup(data);
    // console.log(data);
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
              <input
                type="text"
                label="Username*"
                placeholder="Enter username"
                {...register("name")}
                imageHidden
              />
              {errors.name && (
                <p className="error">{errors.name.message}</p>
              )}
              <input
                type="email"
                label="Email address*"
                placeholder="Enter email address"
                {...register("email")}
                imageHidden
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
              <input
                type="number"
                label="Phone*"
                placeholder="Enter phone"
                {...register("phone")}
                imageHidden
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
              <input
                type="password"
                label="Create Password*"
                placeholder="Password"
                {...register("password")}
                imageSrc={EyeImg}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
              <input
                type="password"
                label="Repeat password*"
                placeholder="Repeat password"
                {...register("repeatPassword")}
                imageSrc={EyeImg}
              />
              {errors.repeatPassword && (
                <p className="error">{errors.repeatPassword.message}</p>
              )}
              <div className="checkbox">
                <div>
                  <input
                    type="checkbox"
                    id="checkbox"
                    {...register("checked")}
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
