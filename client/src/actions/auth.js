import axios from "axios";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "./types";
import { setAlert } from "./alert";

export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    // load user after login
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "fail")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    // load user after registration
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "fail")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
