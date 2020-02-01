import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/button";
import { Styledinput, Maindiv } from "../../stylings";

const pstyle = {
  fontColor: "black",
  fontSize: "20px",
  marginTop: "50px"
};

const Login = () => {
  return (
    <Fragment>
      <Maindiv>
        <p style={pstyle}>Login to access your personal recipes!</p>
        <form>
          <div>
            <Styledinput type="text" placeholder="Email" />
          </div>
          <div>
            <Styledinput type="text" placeholder="Password" />
          </div>
        </form>
        <Button text={"Login"} />
        <Link to="/Register">Don't have an account? Register here!</Link>
      </Maindiv>
    </Fragment>
  );
};

export default Login;
