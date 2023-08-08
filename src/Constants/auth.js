export const AUTH_API_PATHS = {
  LOGIN: "users/login",
  SIGNUP: "users/signup",
  PROFILE: "users/profile",
}

export const AUTH_ACTIONS = {
  AUTHORIZE: 'AUTHORIZE', // (Login & Signup & Get Profile)
  LOGOUT: 'LOGOUT',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: "SET_ERROR",
}

export const LOGIN_INPUTS = [
  {
    label: 'Email',
    type:'text',
    id: 'email',
    name: "email"
  },
  {
    label: 'Password',
    type:'password',
    id: 'password',
    name: "password"
  },
];

export const SIGNUP_INPUTS = [
  {
    label: 'User Name',
    type:'text',
    id: 'username',
    name: "username"
  },
  {
    label: 'Email',
    type:'text',
    id: 'email',
    name: "email"
  },
  {
    label: 'Password',
    type:'password',
    id: 'password',
    name: "password"
  },
  {
    label: 'Repeat Password',
    type:'password',
    id: 'repassword',
    name: "repassword"
  },
];