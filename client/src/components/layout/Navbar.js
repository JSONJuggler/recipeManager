import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";
import {
  Header,
  Flexiblecontainer,
  Navul,
  Navli,
  div,
  Styledlink
} from "../../stylings";

function Navbar({ logout, auth: { isAuthenticated, loading } }) {
  const authLinks = (
    <Navul>
      <Navli>
        <Styledlink to="/browse">Browse Recipes</Styledlink>
      </Navli>
      <Navli>
        <Styledlink onClick={logout} to="/login">
          Logout
        </Styledlink>
      </Navli>
    </Navul>
  );

  const guestLinks = (
    <Navul>
      <Navli>
        <Styledlink to="/browse">Browse Recipes</Styledlink>
      </Navli>
      <Navli>
        <Styledlink to="/Register">Register</Styledlink>
      </Navli>
      <Navli>
        <Styledlink to="/Login">Login</Styledlink>
      </Navli>
    </Navul>
  );

  return (
    <Fragment>
      <Header>
        <Flexiblecontainer>
          <div style={div}>
            <Styledlink to="/login">Home</Styledlink>
          </div>
          <nav>
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </nav>
        </Flexiblecontainer>
      </Header>
    </Fragment>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
