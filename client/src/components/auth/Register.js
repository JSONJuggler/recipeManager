import React, { Fragment } from "react";
import { connect } from "react-redux";

import { register } from "../../actions/auth";
import { Styledlink, Styledinput, Styledsub, Darkbox } from "../../stylings";

const Register = () => {
  return (
    <Fragment>
      <Darkbox>
        <h1>Register to save your own recipes or browse available recipes!</h1>
        <form>
          <div>
            <Styledinput type="text" placeholder="Name" />
          </div>
          <div>
            <Styledinput type="text" placeholder="Email" />
          </div>
          <div>
            <Styledinput type="text" placeholder="Password" />
          </div>
          <div>
            <Styledinput type="text" placeholder="Confirm Password" />
          </div>
          <Styledsub type="submit" value="Register" />
        </form>
        {/* <Button text={"Register"} /> */}
        <Styledlink to="/Login">
          Already have an account? Login here!
        </Styledlink>
      </Darkbox>
    </Fragment>
  );
};

export default Register;
