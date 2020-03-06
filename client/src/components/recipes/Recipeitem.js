import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteRecipe } from "../../actions/recipe";

const Recipeitem = ({ auth: { user, loading }, recipe, deleteRecipe }) => {
  return (
    <Fragment>
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
      {!loading && user && user._id === recipe.userId && (
        <div>
          <button onClick={e => deleteRecipe(recipe._id)}>Delete</button>
        </div>
      )}
    </Fragment>
  );
};

Recipeitem.propType = {
  recipe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteRecipe: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteRecipe })(Recipeitem);
