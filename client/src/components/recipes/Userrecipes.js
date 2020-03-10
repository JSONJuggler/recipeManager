import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Recipeitem from "./Recipeitem";
import { getUserRecipes } from "../../actions/recipe";

const Userrecipes = ({ recipes: { loading, recipes }, getUserRecipes }) => {
  useEffect(() => {
    getUserRecipes();
  }, [getUserRecipes]);

  const userRecipes = recipes[0];

  return (
    <Fragment>
      {!loading && (
        <Fragment>
          {userRecipes.map(recipe => (
            <Recipeitem recipe={recipe} />
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
