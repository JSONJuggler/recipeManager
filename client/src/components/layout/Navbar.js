import React, { Fragment } from "react";
import {
  Header,
  Flexiblecontainer,
  Navul,
  Navli,
  div,
  Styledlink
} from "../../stylings";

function Navbar() {
  return (
    <Fragment>
      <Header>
        <Flexiblecontainer>
          <div style={div}>
            <Styledlink to="/">Home</Styledlink>
          </div>
          <nav>
            <Navul>
              <Navli>
                <Styledlink to="/Register">Register</Styledlink>
              </Navli>
              <Navli>
                <Styledlink to="/Login">Login</Styledlink>
              </Navli>
            </Navul>
          </nav>
        </Flexiblecontainer>
      </Header>
    </Fragment>
  );
}

export default Navbar;
