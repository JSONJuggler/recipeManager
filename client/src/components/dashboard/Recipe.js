import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getRecipes, deleteRecipe } from "../../actions/recipe";

const Recipe = ({
  auth: { user, loading },
  recipes,
  getRecipes,
  deleteRecipe
}) => {
  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userRecipes = recipes.recipes[0];

  const rec =
    userRecipes &&
    userRecipes.map(recipe => (
      <div key={recipe._id}>
        <div>
          <small>Name:</small>
          <small> {recipe.name}</small>
        </div>
        <div>
          <small>Season:</small>
          <small>{recipe.season}</small>
        </div>
        <div>
          <small>Type:</small>
          <small>{recipe.type}</small>
        </div>
        <div>
          <small>Link:</small>
          <small>{recipe.link}</small>
        </div>
        <div>
          <small>Description:</small>
          <small>{recipe.description}</small>
        </div>
        <div>
          <button onClick={e => deleteRecipe(recipe._id)}>Delete</button>
        </div>
      </div>
    ));

  return (
    user &&
    !loading && (
      <Fragment>
        <Link to="/Addrecipe">Click here to add a Recipe</Link>
        {rec}
        <p>{user.email}</p>
        <small></small>
      </Fragment>
    )
  );
};

Recipe.propTypes = {
  auth: PropTypes.object.isRequired,
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  recipes: state.recipe
});

export default connect(mapStateToProps, { getRecipes, deleteRecipe })(Recipe);
