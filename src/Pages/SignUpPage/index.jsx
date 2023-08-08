import React, { Component, useState } from 'react'
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from '../../Components/Paragraph';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';
import WhiteLogo from "../../assets/white-logo.svg"
import cornerImage from "../../assets/corner-image.svg"
import EyeImg from "../../assets/eye.svg";
import { PATHS } from '../../router/paths';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    checked: false,
    myData: "initialData",
    errors: {},
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox input separately
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Validate username
    if (formData.username.trim() === '') {
      validationErrors.username = 'Username is required';
    } else {
      validationErrors.username = '';
    }

    // Validate Email
    if (formData.email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    // Validate password
    if (formData.phone.trim() === '') {
      validationErrors.phone = 'Phone is required';
    }

    // Validate password
    if (formData.password.trim() === '') {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length > 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }
  
    // Validate repeat password
    if (formData.repeatPassword === '') {
      validationErrors.repeatPassword = 'Repeat password is required';
    } else if (formData.password !== formData.repeatPassword) {
      validationErrors.repeatPassword = 'Passwords do not match';
    }

    // Validate checkbox
    if (!formData.checked) {
      validationErrors.checked = 'You must agree to the terms and conditions';
    }

    // Set the validation errors
    setErrors(validationErrors);

    // Submit the form if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className='signUp-page'>
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
              <p>For the purpose of gamers regulation, your details are required.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <Inputs 
                type="text" 
                label="Username*" 
                placeholder="Enter username" 
                value={formData.username} 
                onChange={handleInputChange} 
                imageHidden 
              />
              {errors.username && <p className="error">{errors.username}</p>}
              <Inputs 
                type="email" 
                label="Email address*" 
                placeholder="Enter email address" 
                value={formData.email} 
                onChange={handleInputChange} 
                imageHidden 
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <Inputs 
                type="number" 
                label="Phone*" 
                placeholder="Enter phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                imageHidden 
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
              <Inputs 
                type="password" 
                label="Create Password*" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleInputChange} 
                imageSrc={EyeImg} 
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <Inputs 
                type="password" 
                label="Repeat password*" 
                placeholder="Repeat password" 
                value={formData.repeatPassword} 
                onChange={handleInputChange} 
                imageSrc={EyeImg} 
              />
              {errors.repeatPassword && <p className="error">{errors.repeatPassword}</p>}
              <div className='checkbox'>
                <div>
                  <input 
                    type="checkbox" 
                    id="checkbox" 
                    checked={formData.checked} 
                    onChange={handleInputChange} 
                    defaultChecked 
                  />
                  <label htmlFor="checkbox">I agree to terms & conditions</label>
                </div>
                {errors.checked && <p className="error">{errors.checked}</p>}
              </div>
              <div className="register">
                <Button btnText="Register Account" />
                <span></span>
              </div>
              <button className='register-btn' onClick={() => navigate(PATHS.LOGIN)}>login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;

// class SignUpPage extends Component {
//   state = {
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//     repeatPassword: '',
//     myData: "initialData",
//     agreeTerms: false,
//     errors: {},
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = this.validateForm();
//     if (Object.keys(errors).length !== 0) {
//       this.setState({ errors });
//     }
//   }

//   validateForm = () => {
//     const { username, email, phone, password, repeatPassword, agreeTerms } = this.state;
//     const errors = {};
  
//     // Validate username
//     if (username.trim() === '') {
//       errors.username = 'Username is required';
//     }
  
//     // Validate email
//     if (email.trim() === '') {
//       errors.email = 'Email is required';
//     } else if (!this.isValidEmail(email)) {
//       errors.email = 'Invalid email format';
//     }
  
//     // Validate phone
//     if (phone.trim() === '') {
//       errors.phone = 'Phone is required';
//     }
  
    // // Validate password
    // if (password.trim() === '') {
    //   errors.password = 'Password is required';
    // } else if (password.length > 6) {
    //   errors.password = 'Password must be at least 6 characters long';
    // }
  
    // // Validate repeat password
    // if (repeatPassword.trim() === '') {
    //   errors.repeatPassword = 'Repeat password is required';
    // } else if (password !== repeatPassword) {
    //   errors.repeatPassword = 'Passwords do not match';
    // }
  
//     // Validate agree terms
//     if (!agreeTerms) {
//       errors.agreeTerms = 'You must agree to the terms and conditions';
//     }
//     return errors;
//   };

//   isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleCheckboxChange = (e) => {
//     this.setState((prevState) => ({
//       agreeTerms: !prevState.agreeTerms,
//     }));
//   };

//   render() {
//     return (
//       <div className='signUp-page'>
//         <div className="signUp-info-box">
//           <Logo logoImage={WhiteLogo} white />
//           <Paragraph cornerImage={cornerImage} white />
//         </div>
//         <div className="signUp-box">
//           <button className="back-btn">
//             <i className="fa-solid fa-angle-left"></i>
//             <span onClick={this.props.togglePage}>Back</span>
//           </button>
//           <div className="signUp">
//             <div>
//               <div className="title">
//                 <h1>Register Individual Account!</h1>
//                 <p>For the purpose of gamers regulation, your details are required.</p>
//               </div>
//               <form onSubmit={this.handleSubmit}>
//                 <Inputs 
//                   type="text" 
//                   label="Username*" 
//                   placeholder="Enter username" 
//                   value={this.state.username} 
//                   onChange={handleInputChange} 
//                   imageHidden 
//                 />
//                 {this.state.errors.username && <p className="error">{this.state.errors.username}</p>}
//                 <Inputs 
//                   type="email" 
//                   label="Email address*" 
//                   placeholder="Enter email address" 
//                   value={this.state.email} 
//                   onChange={handleInputChange} 
//                   imageHidden 
//                 />
//                 {this.state.errors.email && <p className="error">{this.state.errors.email}</p>}
//                 <Inputs 
//                   type="text" 
//                   label="Phone*" 
//                   placeholder="Enter phone" 
//                   value={this.state.phone} 
//                   onChange={handleInputChange} 
//                   imageHidden 
//                 />
//                 {this.state.errors.phone && <p className="error">{this.state.errors.phone}</p>}
//                 <Inputs 
//                   type="password" 
//                   label="Create Password*" 
//                   placeholder="Password" 
//                   value={this.state.password} 
//                   onChange={handleInputChange} 
//                   imageSrc={EyeImg} 
//                 />
//                 {this.state.errors.password && <p className="error">{this.state.errors.password}</p>}
//                 <Inputs 
//                   type="password" 
//                   label="Repeat password*" 
//                   placeholder="Repeat password" 
//                   value={this.state.repeatPassword} 
//                   onChange={handleInputChange} 
//                   imageSrc={EyeImg} 
//                 />
//                 {this.state.errors.repeatPassword && <p className="error">{this.state.errors.repeatPassword}</p>}
//                 <div className='checkbox'>
//                   <div>
//                     <input 
//                       type="checkbox" 
//                       id="checkbox" 
//                       checked={this.state.agreeTerms} 
//                       onChange={this.handleCheckboxChange} 
//                       defaultChecked 
//                     />
//                     <label htmlFor="checkbox">I agree to terms & conditions</label>
//                   </div>
//                   {this.state.errors.repeatPassword && <p className="error">{this.state.errors.agreeTerms}</p>}
//                 </div>
//                 <div className="register">
//                   <Button btnText="Register Account" />
//                   <span></span>
//                 </div>
//                 <button className='register-btn' onClick={this.props.togglePage}>login</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default SignUpPage;