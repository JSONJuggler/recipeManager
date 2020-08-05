import axios from "axios";

import {
  ADD_RECIPE,
  DELETE_RECIPE,
  RECIPE_FAIL,
  GET_RECIPES,
  GET_USERRECIPES,
  CLEAR_RECIPES,
  OPEN_ADDRECIPE,
  CLOSE_ADDRECIPE,
  UPDATE_ADDRECIPE,
  CLEAR_ADDRECIPE,
  GET_ATTRIBUTES,
  GET_BROWSERECIPES,
} from "./types";
//import { setAlert } from "./alert";

export const getBrowseRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_STRAPI_API_URL + "/recipes"
    );

    dispatch({
      type: GET_BROWSERECIPES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "fail")));
    }

    dispatch({
      type: CLEAR_RECIPES,
    });

    // dispatch({
    //   type: RECIPE_FAIL
    //   // option to star duplicate resturants
    //   // payload: res.data
    // });
  }
};

export const addRecipe = (recipeData) => async (dispatch) => {
  try {
    const res = await axios.get(process.env.BASE_PATH + "/api/getToken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${res.data.user.strapiToken}`,
      },
    };

    const formData = {
      ...recipeData,
      user: res.data.user.id,
      slug: recipeData.name,
      status: "published",
    };

    const body = JSON.stringify(formData);

    const resTwo = await axios.post(
      process.env.NEXT_PUBLIC_STRAPI_API_URL + "/recipes",
      body,
      config
    );
    //dispatch({
    //type: ADD_RECIPE,
    //payload: res.data,
    //});
    //dispatch(setAlert("Recipe succesfully added!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "fail")));
    }

    dispatch({
      type: RECIPE_FAIL,
      // option to star duplicate resturants
      // payload: res.data
    });
  }
};

export const getAttributes = () => async (dispatch) => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_STRAPI_API_URL + "/attributes"
    );
    dispatch({
      type: GET_ATTRIBUTES,
      payload: res.data,
    });
  } catch (err) {
    //const errors = err.response.data.errors;
    //if (errors) {
    //errors.forEach((error) => dispatch(setAlert(error.msg, "fail")));
    //}
  }
};

export const getUserRecipes = () => async (dispatch) => {
  try {
    const tokenRes = await axios.get(
      process.env.SITE + process.env.BASE_PATH + "/api/getToken"
    );

    const res = await axios.get(
      process.env.NEXT_PUBLIC_STRAPI_API_URL +
        `/recipes?user.username=${tokenRes.data.user.name}`
    );

    dispatch({
      type: GET_USERRECIPES,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "fail")));
    }

    dispatch({
      type: CLEAR_RECIPES,
    });

    // dispatch({
    //   type: RECIPE_FAIL
    //   // option to star duplicate resturants
    //   // payload: res.data
    // });
  }
};

export const openAddRecipe = () => async (dispatch) => {
  try {
    dispatch({
      type: OPEN_ADDRECIPE,
      payload: { backdropOpen: true },
    });
  } catch (err) {
    //handle error here
  }
};

export const closeAddRecipe = () => async (dispatch) => {
  try {
    dispatch({
      type: CLOSE_ADDRECIPE,
      payload: { backdropOpen: false },
    });
  } catch (err) {
    //handle error here
  }
};

export const clearAddRecipeInfo = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_ADDRECIPE,
    });
    dispatch(getUserRecipes());
    dispatch(getBrowseRecipes());
  } catch (err) {
    //handle error here
  }
};

export const updateAddRecipeInfo = (recipeData) => (dispatch) => {
  try {
    //console.log(recipeData);
    dispatch({
      type: UPDATE_ADDRECIPE,
      payload: recipeData,
    });
  } catch (err) {
    //handle error here
    console.log(err);
  }
};
//export const getRecipes = () => async (dispatch) => {
//try {
//const res = await axios.get("/recipemanager/api/recipes");
//dispatch({
//type: GET_RECIPES,
//payload: res.data,
//});
//} catch (err) {
//const errors = err.response.data.errors;

//if (errors) {
//errors.forEach((error) => dispatch(setAlert(error.msg, "fail")));
//}
//dispatch({
//type: CLEAR_RECIPES,
//});

//// dispatch({
////   type: RECIPE_FAIL
////   // option to star duplicate resturants
////   // payload: res.data
//// });
//}
//};

//export const deleteRecipe = (id) => async (dispatch) => {
//try {
//await axios.delete(`/recipemanager/api/recipes/${id}`);

//dispatch({
//type: DELETE_RECIPE,
//payload: id,
//});
//dispatch(setAlert("Recipe succesfully deleted!", "success"));
//} catch (err) {
//const errors = err.response.data.errors;

//if (errors) {
//errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
//}

//dispatch({
//type: RECIPE_FAIL,
//});
//}
//};
