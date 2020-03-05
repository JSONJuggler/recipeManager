import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";
import validate from "./loginValidate";
import { login } from "../../actions/auth";
import { Styledsub, Styledinput, Styledlink, Darkbox } from "../../stylings";

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    isSubmitting && setErrors(validate(formData));
  };

  const onSubmit = async e => {
    if (e) {
      e.preventDefault();
      setErrors(validate(formData));
      setIsSubmitting(true);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setIsSubmitting(false);
      login({ email, password });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  useEffect(() => {
    if (isSubmitting) {
      setIsSubmitting(false);
      window.scrollTo(0, 0);
    }
  }, [isSubmitting]);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Darkbox>
        <h1>Login to access your personal recipes!</h1>
        <form>
          <div>
            <Styledinput
              validated={errors.email}
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
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

          {/* <Styledsub type="submit" value="Login" /> */}
        </form>
        <Button variant="contained" onClick={e => onSubmit(e)}>
          Login
        </Button>
        <div>
          <Styledlink to="/Register">
            Don't have an account? Register here!
          </Styledlink>
        </div>
      </Darkbox>
    </Fragment>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
