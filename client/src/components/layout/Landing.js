import React, { Fragment } from "react";
import { Darkbox, Linkbutton } from "../../stylings";

const Landing = () => {
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

export default Landing;
