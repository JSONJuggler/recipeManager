import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import validate from "./registerValidate";
import { Styledlink, Styledinput, Styledsub, Darkbox } from "../../stylings";

const Register = ({ register, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { username, email, password, password2 } = formData;

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsSubmitting(false);
      if (password !== password2) {
        console.log("passwords do not match");
        setAlert("Password do not match", "fail");
      } else {
        register({ username, email, password });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  useEffect(() => {
    if (isSubmitting) {
      setIsSubmitting(false);
      window.scrollTo(0, 0);
    }
  }, [isSubmitting]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    isSubmitting && setErrors(validate(formData));
  };

  const onSubmit = e => {
    e.preventDefault();

    if (e) {
      e.preventDefault();
      setErrors(validate(formData));
      setIsSubmitting(true);
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
              validated={errors.username}
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={e => onChange(e)}
            />
            {errors.username && (
              <p
                style={{
                  fontSize: ".7rem",
                  float: "left",
                  margin: "0px",
                  padding: "0px"
                }}
              >
                {errors.username}
              </p>
            )}
          </div>
          <div>
            <Styledinput
              validated={errors.email}
              name="email"
              placeholder="Email"
              value={email}
              onChange={e => onChange(e)}
            />
            {errors.email && (
              <p
                style={{
                  fontSize: ".7rem",
                  float: "left",
                  margin: "0px",
                  padding: "0px"
                }}
              >
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <Styledinput
              validated={errors.password}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => onChange(e)}
            />
            {errors.password && (
              <p
                style={{
                  fontSize: ".7rem",
                  float: "left",
                  margin: "0px",
                  padding: "0px"
                }}
              >
                {errors.password}
              </p>
            )}
          </div>
          <div>
            <Styledinput
              validated={errors.password2}
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={e => onChange(e)}
            />
            {errors.password2 && (
              <p
                style={{
                  fontSize: ".7rem",
                  float: "left",
                  margin: "0px",
                  padding: "0px"
                }}
              >
                {errors.password2}
              </p>
            )}
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
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, setAlert })(Register);
