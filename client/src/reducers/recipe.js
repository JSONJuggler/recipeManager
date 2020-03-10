import {
  ADD_RECIPE,
  DELETE_RECIPE,
  RECIPE_FAIL,
  GET_RECIPES,
  GET_USERRECIPES,
  CLEAR_RECIPES
} from "../actions/types";

const initialState = {
  recipe: null,
  userRecipes: [],
  recipes: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERRECIPES:
      return {
        ...state,
        userRecipes: payload,
        loading: false
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        loading: false
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipe: payload,
        recipes: [...state.recipes, payload],
        userRecipes: [...state.userRecipes, payload]
      };
    case DELETE_RECIPE:
      return { ...state, recipe: null, recipes: [payload], loading: false };
    case RECIPE_FAIL:
      return {
        ...state,
        // recipe: payload.duplicate,
        loading: false
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipe: null,
        userRecipes: [],
        recipes: [],
        loading: false
      };
    default:
      return state;
  }
}
