import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  centerFlexibleItem: {
    alignSelf: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: theme.spacing(1),
    },
  },
}));

function Register({ csrfToken, isAuthenticated }) {
  const { register, handleSubmit, errors } = useForm();

  const [usernameError, setUsernameError] = useState("");

  const [isUsernameError, setIsUsernameError] = useState(false);

  const [emailError, setEmailError] = useState(
    "This site uses Gravatar. Use your gravatar email to use your gravatar avatar!"
  );

  const [isEmailError, setIsEmailError] = useState(false);

  const [passwordError, setPasswordError] = useState("");

  const [isPasswordError, setIsPasswordError] = useState(false);

  const [password2Error, setPassword2Error] = useState("");

  const [isPassword2Error, setIsPassword2Error] = useState(false);

  const classes = useStyles();

  const router = useRouter();

  const [session, loading] = useSession();

  const [routing, setRouting] = useState({
    url: "",
    starting: true,
    complete: false,
  });

  const handleRouteChangeStart = (url) => {
    console.log("starting nav");
    setRouting((prev) => ({ ...prev, starting: true, complete: false, url }));
  };

  const handleRouteChangeComplete = (url) => {
    console.log("ending nav");
    setRouting((prev) => ({ ...prev, starting: false, complete: true }));
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  //useEffect(() => {
  //if (router.pathname === "/register" && session) {
  //router.push("/");
  //}
  //}, [session]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    window.scrollTo(0, 0);
    const res = await axios.post(
      process.env.NEXT_PUBLIC_STRAPI_API_URL + "/users",
      {
        username,
        email,
        password,
      }
    );

    if (res) {
      const credentialsRes = await axios.post(
        process.env.SITE +
          process.env.BASE_PATH +
          "/api/auth/callback/credentials",
        {
          csrfToken,
          email,
          password,
        }
      );
      if ((credentialsRes.status = "200")) {
        router.push("/");
      }
    }
  };

  useEffect(() => {
    if (errors.username) {
      setUsernameError(errors.username.message);
      setIsUsernameError(true);
    } else {
      setUsernameError("");
      setIsUsernameError(false);
    }
    if (errors.email) {
      setEmailError(errors.email.message);
      setIsEmailError(true);
    } else {
      setEmailError(
        "This site uses Gravatar. Use your gravatar email to use your gravatar avatar!"
      );
      setIsEmailError(false);
    }
    if (errors.password) {
      setPasswordError(errors.password.message);
      setIsPasswordError(true);
    } else {
      setPasswordError("");
      setIsPasswordError(false);
    }
    if (errors.password2) {
      setPassword2Error(errors.password2.message);
      setIsPassword2Error(true);
      console.log(errors.password2);
    } else {
      setPassword2Error("");
      setIsPassword2Error(false);
    }
  }, [errors.username, errors.email, errors.password, errors.password2]);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.root}>
      <Container
        className={classes.centerFlexibleItem}
        component="main"
        maxWidth="xs"
      >
        <Paper className={classes.paper}>
          <LockOutlinedIcon />
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Typography component="h1" variant="caption">
            Register below to get started!{" "}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  error={isUsernameError}
                  helperText={usernameError}
                  inputRef={register({
                    required: { value: true, message: "Username is required" },
                  })}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={isEmailError}
                  helperText={emailError}
                  inputRef={register({
                    required: {
                      value: true,
                      message: "Email address is required",
                    },
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={isPasswordError}
                  helperText={passwordError}
                  inputRef={register({
                    required: { value: true, message: "Password is required" },
                    minLength: {
                      value: 6,
                      message: "Password must be atleast 6 characters long",
                    },
                  })}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  autoComplete="off"
                  error={isPassword2Error}
                  helperText={password2Error}
                  inputRef={register({
                    required: {
                      value: true,
                      message: "Please confirm your password",
                    },
                    validate: {
                      validate: (password2) =>
                        password2 === password || "Password must match",
                    },
                  })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login">
                  <a className={classes.link}>
                    <Typography variant="caption">
                      Already have an account? Log in
                    </Typography>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  //registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Register);
