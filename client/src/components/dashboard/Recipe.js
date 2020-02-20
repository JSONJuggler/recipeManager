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
  const ye = recipes.recipes[0];
  console.log(recipes.recipes);

  console.log(ye);
  const rec =
    ye &&
    ye.map(recipe => (
      <div key={recipe._id}>
        {recipe.name}
        <div>
          <button onClick={e => deleteRecipe(recipe._id)}>Delete</button>
          {/* <button onClick={deleteRecipe(recipe._id)}>Delete</button> */}
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
