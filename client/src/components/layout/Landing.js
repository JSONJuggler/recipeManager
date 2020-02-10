import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Darkbox, Linkbutton } from "../../stylings";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Darkbox>
        <h1>Welcome! Plenty of recipes await!</h1>
        <Linkbutton to="/Register">Register</Linkbutton>
        <Linkbutton to="/Login">Login</Linkbutton>
      </Darkbox>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(Landing);
