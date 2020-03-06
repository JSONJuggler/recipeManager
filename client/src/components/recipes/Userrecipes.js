import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Recipeitem from "./Recipeitem";
import { getUserRecipes } from "../../actions/recipe";

const Userrecipes = ({ recipes: { loading, recipes }, getUserRecipes }) => {
  useEffect(() => {
    getUserRecipes();
  }, [getUserRecipes]);

  const userRecipes = recipes[0];

  return (
    <Fragment>
      <Link to="/Addrecipe">Click here to add a Recipe</Link>
      {!loading && (
        <Fragment>
          {userRecipes.map(recipe => (
            <Recipeitem key={recipe._id} recipe={recipe} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

Userrecipes.propTypes = {
  recipes: PropTypes.object.isRequired,
  getUserRecipes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  recipes: state.recipe
});

export default connect(mapStateToProps, { getUserRecipes })(Userrecipes);
