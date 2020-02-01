import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/button";
import { Flexiblecontainer, Styledinput } from "../../stylings";

const pstyle = {
  fontColor: "black",
  fontSize: "20px"
};

const Register = () => {
  return (
    <Fragment>
      <Flexiblecontainer>
        <p style={pstyle}>
          Register to save your own recipes or browse available recipes!
        </p>
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
        </form>
        <Button text={"Register"} />
        <Link to="/Login">Already have an account? Login here!</Link>
      </Flexiblecontainer>
    </Fragment>
  );
};

export default Register;
