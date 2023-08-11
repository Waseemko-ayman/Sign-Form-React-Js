import { useReducer } from 'react';
import axios from 'axios';
import { AUTH_API_URL } from '../config/api';
import { AUTH_ACTIONS, AUTH_API_PATHS } from '../Constants/auth';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case AUTH_ACTIONS.GET: {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    }

    case AUTH_ACTIONS.DELETE:
      return {
        ...state,
        isLoading: false,
        users: {
          ...state.users,
          users:
            action.payload &&
            state.users?.users?.filter((user) => user._id !== action.payload),
        },
        message: 'Success!',
      };

    case AUTH_ACTIONS.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

const useAPI = (url, config) => {
  const [state, dispatch] = useReducer(reduce, initialState);

  const getUsers = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.get(url, config);
      dispatch({ type: AUTH_ACTIONS.GET, payload: data });
      // console.log(data)
      // console.log(state)
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const deleteUser = async (id) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      await axios.delete(
        AUTH_API_URL + AUTH_API_PATHS.DELETE_USER.replace(':id', id),
        config
      );
      dispatch({ type: AUTH_ACTIONS.DELETE, payload: id });
      console.log('success');
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
      console.log(error.message);
    }
  };
  return {
    ...state,
    getUsers,
    deleteUser,
  };
};

export default useAPI;