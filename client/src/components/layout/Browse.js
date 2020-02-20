import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getRecipes } from "../../actions/recipe";
import { Recipesec } from "../../stylings";

const Browse = ({ getRecipes, recipes: { recipes, loading } }) => {
  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allRecipes = recipes[0];
  const rec =
    allRecipes &&
    allRecipes.map(recipe => (
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
      </div>
    ));

  return (
    !loading && (
      <Fragment>
        {/* <Link to="/Addrecipe">Click here to add a Recipe</Link> */}
        <Recipesec>{rec}</Recipesec>
      </Fragment>
    )
  );
};

// {
//   return (
//     <Darkbox>
//       <Linkbutton to='/Allrecipes'>Browse all recipes!</Linkbutton>
//     </Darkbox>
//   );
// };

Browse.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  recipes: state.recipe
});

export default connect(mapStateToProps, { getRecipes })(Browse);
