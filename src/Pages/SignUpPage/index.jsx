import React, { Component, useState } from 'react'
import "./style.css";
import Logo from "../../Components/Logo";
import Paragraph from '../../Components/Paragraph';
import Inputs from '../../Components/Inputs';
import Button from '../../Components/Button';

// const SignUpPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [repassword, setRePassword] = useState('');
//   const [initialData, setInitialData] = useState('initialData');
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   const validateForm = () => {

//   }

//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleInputChange = (e) => {

//   };

//   const handleCheckboxChange = (e) => {

//   };

//   return (
//     <div className='login-page'>
//       <div className="login-info-box">
//         <Logo logoImage="/assets/white-logo.svg"/>
//         <Paragraph cornerImage="/assets/corner-image.svg"/>
//       </div>
//       <div className="login-box">
//         <button className="back-btn">
//           <i class="fa-solid fa-angle-left"></i>
//           <span onClick={this.props.togglePage}>Back</span>
//         </button>
//         <div className="login">
//           <div>
//             <div className="title">
//               <h1>Register Individual Account!</h1>
//               <p>For the purpose of gamers regulation, your details are required.</p>
//             </div>
//             <form action="" onSubmit={this.handleSubmit}>
//               <Inputs 
//                 type="text" 
//                 label="Username*" 
//                 placeholder="Enter username" 
//                 value={this.state.username} 
//                 onChange={this.handleInputChange} 
//                 imageHidden 
//               />
//               {this.state.errors.username && <p className="error">{this.state.errors.username}</p>}
//               <Inputs 
//                 type="email" 
//                 label="Email address*" 
//                 placeholder="Enter email address" 
//                 value={this.state.email} 
//                 onChange={this.handleInputChange} 
//                 imageHidden 
//               />
//               {this.state.errors.email && <p className="error">{this.state.errors.email}</p>}
//               <Inputs 
//                 type="text" 
//                 label="Phone*" 
//                 placeholder="Enter phone" 
//                 value={this.state.phone} 
//                 onChange={this.handleInputChange} 
//                 imageHidden 
//               />
//               {this.state.errors.phone && <p className="error">{this.state.errors.phone}</p>}
//               <Inputs 
//                 type="password" 
//                 label="Create Password*" 
//                 placeholder="Password" 
//                 value={this.state.password} 
//                 onChange={this.handleInputChange} 
//                 imageSrc="/assets/eye.svg" 
//               />
//               {this.state.errors.password && <p className="error">{this.state.errors.password}</p>}
//               <Inputs 
//                 type="password" 
//                 label="Repeat password*" 
//                 placeholder="Repeat password" 
//                 value={this.state.repeatPassword} 
//                 onChange={this.handleInputChange} 
//                 imageSrc="/assets/eye.svg" 
//               />
//               {this.state.errors.repeatPassword && <p className="error">{this.state.errors.repeatPassword}</p>}
//               <div className='checkbox'>
//                 <div>
//                   <input 
//                     type="checkbox" 
//                     id="checkbox" 
//                     checked={this.state.agreeTerms} 
//                     onChange={this.handleCheckboxChange} 
//                     defaultChecked 
//                   />
//                   <label htmlFor="checkbox">I agree to terms & conditions</label>
//                 </div>
//                 {this.state.errors.repeatPassword && <p className="error">{this.state.errors.agreeTerms}</p>}
//               </div>
//               <div className="register">
//                 <Button btnText="Register Account" />
//                 <span></span>
//               </div>
//               <button className='register-btn' onClick={this.props.togglePage}>login</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUpPage;

class SignUpPage extends Component {
  state = {
    username: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    myData: "initialData",
    agreeTerms: false,
    errors: {},
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    if (Object.keys(errors).length !== 0) {
      this.setState({ errors });
    }
  }

  validateForm = () => {
    const { username, email, phone, password, repeatPassword, agreeTerms } = this.state;
    const errors = {};
  
    // Validate username
    if (username.trim() === '') {
      errors.username = 'Username is required';
    }
  
    // Validate email
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!this.isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }
  
    // Validate phone
    if (phone.trim() === '') {
      errors.phone = 'Phone is required';
    }
  
    // Validate password
    if (password.trim() === '') {
      errors.password = 'Password is required';
    } else if (password.length > 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    // Validate repeat password
    if (repeatPassword.trim() === '') {
      errors.repeatPassword = 'Repeat password is required';
    } else if (password !== repeatPassword) {
      errors.repeatPassword = 'Passwords do not match';
    }
  
    // Validate agree terms
    if (!agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms and conditions';
    }
    return errors;
  };

  isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState((prevState) => ({
      agreeTerms: !prevState.agreeTerms,
    }));
  };

  render() {
    return (
      <div className='login-page'>
        <div className="login-info-box">
          <Logo logoImage="/assets/white-logo.svg"/>
          <Paragraph cornerImage="/assets/corner-image.svg"/>
        </div>
        <div className="login-box">
          <button className="back-btn">
            <i class="fa-solid fa-angle-left"></i>
            <span onClick={this.props.togglePage}>Back</span>
          </button>
          <div className="login">
            <div>
              <div className="title">
                <h1>Register Individual Account!</h1>
                <p>For the purpose of gamers regulation, your details are required.</p>
              </div>
              <form action="" onSubmit={this.handleSubmit}>
                <Inputs 
                  type="text" 
                  label="Username*" 
                  placeholder="Enter username" 
                  value={this.state.username} 
                  onChange={this.handleInputChange} 
                  imageHidden 
                />
                {this.state.errors.username && <p className="error">{this.state.errors.username}</p>}
                <Inputs 
                  type="email" 
                  label="Email address*" 
                  placeholder="Enter email address" 
                  value={this.state.email} 
                  onChange={this.handleInputChange} 
                  imageHidden 
                />
                {this.state.errors.email && <p className="error">{this.state.errors.email}</p>}
                <Inputs 
                  type="text" 
                  label="Phone*" 
                  placeholder="Enter phone" 
                  value={this.state.phone} 
                  onChange={this.handleInputChange} 
                  imageHidden 
                />
                {this.state.errors.phone && <p className="error">{this.state.errors.phone}</p>}
                <Inputs 
                  type="password" 
                  label="Create Password*" 
                  placeholder="Password" 
                  value={this.state.password} 
                  onChange={this.handleInputChange} 
                  imageSrc="/assets/eye.svg" 
                />
                {this.state.errors.password && <p className="error">{this.state.errors.password}</p>}
                <Inputs 
                  type="password" 
                  label="Repeat password*" 
                  placeholder="Repeat password" 
                  value={this.state.repeatPassword} 
                  onChange={this.handleInputChange} 
                  imageSrc="/assets/eye.svg" 
                />
                {this.state.errors.repeatPassword && <p className="error">{this.state.errors.repeatPassword}</p>}
                <div className='checkbox'>
                  <div>
                    <input 
                      type="checkbox" 
                      id="checkbox" 
                      checked={this.state.agreeTerms} 
                      onChange={this.handleCheckboxChange} 
                      defaultChecked 
                    />
                    <label htmlFor="checkbox">I agree to terms & conditions</label>
                  </div>
                  {this.state.errors.repeatPassword && <p className="error">{this.state.errors.agreeTerms}</p>}
                </div>
                <div className="register">
                  <Button btnText="Register Account" />
                  <span></span>
                </div>
                <button className='register-btn' onClick={this.props.togglePage}>login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpPage;