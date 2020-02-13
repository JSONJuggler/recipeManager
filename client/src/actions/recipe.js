import axios from "axios";

import { ADD_RECIPE, DELETE_RECIPE } from "./types";
import { setAlert } from "./alert";

export const addRecipe = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify(formData);

    const res = await axios.put("/api/recipes", body, config);

    dispatch({
      type: ADD_RECIPE,
      payload: res.data
    });

    dispatch(setAlert("Recipe succesfully added!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: RECIPE_FAIL,
      payload: {
        duplicate,
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

export const deleteRecipe = formData => async dispatch => {};
