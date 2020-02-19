import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Styledlink } from "../../stylings";

import { getRecipes, deleteRecipe } from "../../actions/recipe";

const Recipe = ({
  auth: { user, loading },
  recipes,
  getRecipes,
  deleteRecipe
}) => {
  useEffect(() => {
    getRecipes();
  }, []);
  const ye = recipes.recipes;
  console.log(ye);
  const rec = ye.map(recipe => (
    <div key={recipe._id}>
      {recipe.name}
      <div>
        <button onClick={() => deleteRecipe(recipe._id)}>Delete</button>
        {/* <button onClick={deleteRecipe(recipe._id)}>Delete</button> */}
      </div>
    </div>
  ));

  return (
    user &&
    !loading && (
      <Fragment>
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
