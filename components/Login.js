import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { useTheme } from "@material-ui/core/styles";

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

function Login({ isAuthenticated }) {
  // const theme = useTheme();

  const { register, handleSubmit, errors } = useForm();

  const [emailError, setEmailError] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);

  const [passwordError, setPasswordError] = useState("");

  const [isPasswordError, setIsPasswordError] = useState(false);

  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (errors.email) {
      setEmailError(errors.email.message);
      setIsEmailError(true);
    } else {
      setEmailError("");
      setIsEmailError(false);
    }
    if (errors.password) {
      setPasswordError(errors.password.message);
      setIsPasswordError(true);
    } else {
      setPasswordError("");
      setIsPasswordError(false);
    }
  }, [errors.email, errors.password]);

  return (
    <div className={classes.root}>
      <Container
        className={classes.centerFlexibleItem}
        component="main"
        maxWidth="xs"
      >
        <Paper className={classes.paper}>
          <LockOutlinedIcon />
          <Typography variant="h5">Log in</Typography>
          <Typography variant="subtitle2">
            Log in below to access you recipes!
          </Typography>
          <form
            action="http://localhost:3000/api/auth/callback/Credentials"
            method="POST"
          >
            <input
              type="hidden"
              name="csrfToken"
              value="d62513dc03e260eba46d6b6780d9a58a2d7b6215b07aaf64f08896507144462e"
            />
            <TextField
              variant="outlined"
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={emailError}
              error={isEmailError}
              inputRef={register({
                required: { value: true, message: "Email address is required" },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              onChange={(e) => onChange(e)}
            />
            <TextField
              variant="outlined"
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={passwordError}
              error={isPasswordError}
              inputRef={register({
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters long",
                },
              })}
              onChange={(e) => onChange(e)}
            />
            {/* <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container justify="flex-end">
              {/* <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid> */}
              <Grid item>
                <Link href="/register" as={process.env.BASE_PATH + "/register"}>
                  <a className={classes.link}>
                    <Typography variant="caption">
                      Don't have an account? Register here!
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

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  //login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Login);
