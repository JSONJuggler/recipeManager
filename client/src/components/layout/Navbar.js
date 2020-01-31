import React, { Fragment } from "react";
import { Navdiv, Nav } from "../../stylings";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <Nav>
        <Navdiv>
          <Link to="/">Home</Link>
        </Navdiv>
        <Navdiv style={{ justifyContent: "flex-end" }}>
          <div>
            <Link to="/Register">Register</Link>
          </div>
          <div>
            <Link to="/Login">Login</Link>
          </div>
        </Navdiv>
      </Nav>
    </Fragment>
  );
}

export default Navbar;
