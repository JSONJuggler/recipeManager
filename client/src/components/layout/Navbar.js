import React, { Fragment } from "react";
import { Header } from "../../stylings";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <Header>
        <Link to="/">Home</Link>
        <div>
          <Link to="/Register">Register</Link>
        </div>
        <div>
          <Link to="/Login">Login</Link>
        </div>
      </Header>
    </Fragment>
  );
}

export default Navbar;
