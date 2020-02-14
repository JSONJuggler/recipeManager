import { ADD_RECIPE, DELETE_RECIPE, RECIPE_FAIL } from "../actions/types";

const initialState = {
  recipe: null,
  recipes: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_RECIPE:
      return { ...state, recipe: payload, loading: false };
    case DELETE_RECIPE:
      return { ...state, recipe: payload, loading: false };
    case RECIPE_FAIL:
      return {
        ...state,
        error: payload.error,
        recipe: duplicate,
        loading: false
      };
    default:
      return state;
  }
}
