// import React, { Fragment, useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// import { Button } from "@material-ui/core";
// import validate from "./loginValidate";
// import { login } from "../../actions/auth";
// import { Styledsub, Styledinput, Styledlink, Darkbox } from "../../stylings";

// const Login = ({ isAuthenticated, login }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const [errors, setErrors] = useState({});

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { email, password } = formData;

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     isSubmitting && setErrors(validate(formData));
//   };

//   const onSubmit = async e => {
//     if (e) {
//       e.preventDefault();
//       setErrors(validate(formData));
//       setIsSubmitting(true);
//     }
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitting) {
//       setIsSubmitting(false);
//       login({ email, password });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [errors]);

//   useEffect(() => {
//     if (isSubmitting) {
//       setIsSubmitting(false);
//       window.scrollTo(0, 0);
//     }
//   }, [isSubmitting]);

//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <Fragment>
//       <Darkbox>
//         <h1>Login to access your personal recipes!</h1>
//         <form>
//           <div>
//             <Styledinput
//               validated={errors.email}
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={email}
//               onChange={e => onChange(e)}
//             />
//           </div>
//           {errors.email && (
//             <p
//               style={{
//                 fontSize: ".7rem",
//                 float: "left",
//                 margin: "0px",
//                 padding: "0px"
//               }}
//             >
//               {errors.email}
//             </p>
//           )}
//           <div>
//             <Styledinput
//               validated={errors.password}
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={e => onChange(e)}
//             />
//             {errors.password && (
//               <p
//                 style={{
//                   fontSize: ".7rem",
//                   float: "left",
//                   margin: "0px",
//                   padding: "0px"
//                 }}
//               >
//                 {errors.password}
//               </p>
//             )}
//           </div>

//           {/* <Styledsub type="submit" value="Login" /> */}
//         </form>
//         <Button variant="contained" onClick={e => onSubmit(e)}>
//           Login
//         </Button>
//         <div>
//           <Styledlink to="/Register">
//             Don't have an account? Register here!
//           </Styledlink>
//         </div>
//       </Darkbox>
//     </Fragment>
//   );
// };

// Login.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   login: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { login })(Login);

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
