import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { register } from "../../actions/auth";
import { Styledlink, Styledinput, Styledsub, Darkbox } from "../../stylings";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const { username, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
      // password incorrect
      console.log("passwords do not match");
    } else {
      register({ username, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Darkbox>
        <h1>Register to save your own recipes or browse available recipes!</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div>
            <Styledinput
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div>
            <Styledinput
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div>
            <Styledinput
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => onChange(e)}
              required
              minLength="6"
            />
          </div>
          <div>
            <Styledinput
              type="text"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={e => onChange(e)}
              required
              minLength="6"
            />
          </div>
          <Styledsub type="submit" value="Register" />
        </form>
        <Styledlink to="/Login">
          Already have an account? Login here!
        </Styledlink>
      </Darkbox>
    </Fragment>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
