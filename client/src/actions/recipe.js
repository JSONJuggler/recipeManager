import axios from "axios";

import { ADD_RECIPE, DELETE_RECIPE, RECIPE_FAIL, GET_RECIPES } from "./types";
import { setAlert } from "./alert";

export const getRecipes = () => async dispatch => {
  const res = await axios.get("/api/recipes/me");
  dispatch({
    type: GET_RECIPES,
    payload: res.data
  });
};

export const addRecipe = ({
  name,
  season,
  type,
  link,
  description
}) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const formData = { name, season, type, link, description };
    const body = JSON.stringify(formData);

    const res = await axios.put("/api/recipes", body, config);
    dispatch({
      type: ADD_RECIPE,
      payload: res.data
    });
    console.log("add succes");
    dispatch(setAlert("Recipe succesfully added!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "fail")));
    }

    dispatch({
      type: RECIPE_FAIL
      // payload: res.data
    });
  }
};

export const deleteRecipe = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/recipes/${id}`);

    dispatch({
      type: DELETE_RECIPE,
      payload: res.data
    });
    dispatch(setAlert("Recipe succesfully deleted!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: RECIPE_FAIL
    });
  }
};
