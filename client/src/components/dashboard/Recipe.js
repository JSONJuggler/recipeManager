import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Recipe = ({ auth: { user, loading }, recipes }) => {
  console.log(user);
  console.log(recipes);
  return (
    user &&
    !loading && (
      <Fragment>
        <p>{user.email}</p>
        <small></small>
      </Fragment>
    )
  );
};

Recipe.propTypes = {
  auth: PropTypes.object.isRequired,
  recipes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  recipes: state.recipe
});

export default connect(mapStateToProps)(Recipe);
