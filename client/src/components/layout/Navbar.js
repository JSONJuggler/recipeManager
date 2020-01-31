import React, { Fragment } from "react";
import { Navdiv, Nav } from "../../stylings";

function Navbar() {
  return (
    <Fragment>
      <Nav>
        <Navdiv>Home</Navdiv>
        <Navdiv style={{ justifyContent: "flex-end" }}>
          <div>Register</div> <div>Login</div>
        </Navdiv>
      </Nav>
    </Fragment>
  );
}

export default Navbar;
