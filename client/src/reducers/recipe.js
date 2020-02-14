import {
  ADD_RECIPE,
  DELETE_RECIPE,
  RECIPE_FAIL,
  GET_RECIPES
} from "../actions/types";

const initialState = {
  recipe: null,
  recipes: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RECIPES:
      return { ...state, recipes: payload, loading: false };
    case ADD_RECIPE:
      return { ...state, recipe: payload, loading: false };
    case DELETE_RECIPE:
      return { ...state, recipes: payload, loading: false };
    case RECIPE_FAIL:
      return {
        ...state,
        error: payload.error,
        recipe: payload.duplicate,
        loading: false
      };
    default:
      return state;
  }
}
