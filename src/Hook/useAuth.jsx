import { useReducer } from "react";
import { ROLES } from "../Constants";
import { AUTH_ACTIONS, AUTH_API_PATHS } from "../Constants/auth";
import axios from "axios";
import { AUTH_API_URL } from "../config/api";
import Swal from 'sweetalert2'

const initialState = {
  isAuth: false,
  user: null,
  token: null,
  role: ROLES.GUEST,
  isLoading: false,
  error: null,
};

const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_ACTIONS.AUTHORIZE:
      const token = action?.payload?.token || state?.token;
      const role = action?.payload?.isAdmin ? ROLES.ADMIN : ROLES.USER;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: token,
        role: role,
        isLoading: false,
        error: null,
      };

    case AUTH_ACTIONS.LOGOUT:
      ["token", "user", "role"].forEach((item) =>
        localStorage.removeItem(item)
      );
      return initialState;

    case AUTH_ACTIONS.SET_ERROR:
      return {
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const token = state.token || localStorage.getItem('token');
  const config = {headers: {Authorization: `Bearer ${token}`}};

  // Login
  const login = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API_URL + AUTH_API_PATHS.LOGIN, body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
      Swal.fire({
        icon : "success",
        title: 'Logged in Successfully',
        showConfirmButton: false,
        timer: 2000
      });
    } catch (error) {
      Swal.fire({
        icon : "error",
        title: 'The data is incorrect!',
        showConfirmButton: false,
        timer: 2000
      });
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  // Signup
  const signup = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API_URL + AUTH_API_PATHS.SIGNUP, body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
      Swal.fire({
        icon : "success",
        title: 'Registered Successfully',
        showConfirmButton: false,
        timer: 2000
      });
    } catch (error) {
      dispatch({ typeof: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };

  // Get Profile Data
  const getProfileData = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.get(AUTH_API_URL + AUTH_API_PATHS.PROFILE, config);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  }

  return {
    login,
    signup,
    logout,
    getProfileData,
  };
};

export default useAuth;
