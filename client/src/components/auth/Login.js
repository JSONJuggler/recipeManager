import React, { Fragment } from "react";
import { Styledsub, Styledinput, Styledlink, Darkbox } from "../../stylings";

const onSubmit = async e => {
  e.preventDefault();

  console.log("hello");
};

const Login = () => {
  return (
    <Fragment>
      <Darkbox>
        <h1>Login to access your personal recipes!</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <Styledinput type="text" placeholder="Email" />
          </div>
          <div>
            <Styledinput type="text" placeholder="Password" />
          </div>
          <Styledsub type="submit" value="Login" />
        </form>
        <div>
          <Styledlink to="/Register">
            Don't have an account? Register here!
          </Styledlink>
        </div>
      </Darkbox>
    </Fragment>
  );
};

export default Login;
