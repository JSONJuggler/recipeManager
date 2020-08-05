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
} from "../actions/types";

const initialState = {
  recipe: null,
  userRecipes: [],
  recipes: [],
  loading: true,
  error: {},
  browseRecipes: [],
  tags: [],
  addRecipeData: {
    name: "",
    attributes: [],
    description: "",
    directions: "",
  },
  backdropOpen: false,
};

export default function recipe(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BROWSERECIPES:
      return {
        ...state,
        recipe: null,
        browseRecipes: payload,
        loading: false,
      };
    case GET_USERRECIPES:
      return {
        ...state,
        recipe: null,
        userRecipes: payload,
        loading: false,
      };
    case GET_RECIPES:
      return {
        ...state,
        recipe: null,
        recipes: payload,
        loading: false,
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipe: payload,
      };
    case RECIPE_FAIL:
      return {
        ...state,
        // recipe: payload.duplicate,
        loading: false,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipe: null,
        userRecipes: state.userRecipes.filter((recipe) => {
          return recipe._id !== payload;
        }),
        recipes: state.recipes.filter((recipe) => {
          return recipe._id !== payload;
        }),
        loading: false,
      };
    case OPEN_ADDRECIPE:
      return {
        ...state,
        backdropOpen: payload.backdropOpen,
        loading: false,
      };
    case CLOSE_ADDRECIPE:
      return {
        ...state,
        backdropOpen: payload.backdropOpen,
        loading: false,
      };
    case UPDATE_ADDRECIPE:
      const { name, attributes, description, directions } = payload;
      return {
        ...state,
        addRecipeData: { name, attributes, description, directions },
      };
    case GET_ATTRIBUTES:
      return {
        ...state,
        tags: payload,
      };
    case CLEAR_ADDRECIPE:
      return {
        ...state,
        addRecipeData: {
          name: "",
          attributes: [],
          description: "",
          directions: "",
        },
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipe: null,
        userRecipes: [],
        recipes: [],
        loading: false,
      };
    default:
      return state;
  }
}
