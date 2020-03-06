import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Recipeitem from "./Recipeitem";
import { getRecipes } from "../../actions/recipe";

const Recipes = ({
  auth: { isAuthenticated },
  recipes: { loading, recipes },
  getRecipes
}) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const allRecipes = recipes[0];

  return (
    !loading && (
      <Fragment>
        {allRecipes.map(recipe => (
          <Recipeitem key={recipe._id} recipe={recipe} />
        ))}
        {!isAuthenticated && (
          <small>Register to create your own recipes!</small>
        )}
      </Fragment>
    )
  );
};

Recipes.propTypes = {
  recipes: PropTypes.object.isRequired,
  getRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  recipes: state.recipe
});

export default connect(mapStateToProps, { getRecipes })(Recipes);
