// import React, { Fragment, useState, useEffect } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { Redirect } from "react-router-dom";

// import { register } from "../../actions/auth";
// import { setAlert } from "../../actions/alert";
// import validate from "./registerValidate";
// import { Styledlink, Styledinput, Styledsub, Darkbox } from "../../stylings";

// const Register = ({ register, setAlert, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     password2: ""
//   });

//   const [errors, setErrors] = useState({});

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { username, email, password, password2 } = formData;

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitting) {
//       setIsSubmitting(false);
//       if (password !== password2) {
//         setAlert("Passwords do not match", "fail");
//       } else {
//         register({ username, email, password });
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [errors]);

//   useEffect(() => {
//     if (isSubmitting) {
//       setIsSubmitting(false);
//       window.scrollTo(0, 0);
//     }
//   }, [isSubmitting]);

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     isSubmitting && setErrors(validate(formData));
//   };

//   const onSubmit = e => {
//     e.preventDefault();

//     if (e) {
//       e.preventDefault();
//       setErrors(validate(formData));
//       setIsSubmitting(true);
//     }
//   };

//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <Fragment>
//       <Darkbox>
//         <h1>Register to save your own recipes or browse available recipes!</h1>
//         <form onSubmit={e => onSubmit(e)}>
//           <div>
//             <Styledinput
//               validated={errors.username}
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={username}
//               onChange={e => onChange(e)}
//             />
//             {errors.username && (
//               <p
//                 style={{
//                   fontSize: ".7rem",
//                   float: "left",
//                   margin: "0px",
//                   padding: "0px"
//                 }}
//               >
//                 {errors.username}
//               </p>
//             )}
//           </div>
//           <div>
//             <Styledinput
//               validated={errors.email}
//               name="email"
//               placeholder="Email"
//               value={email}
//               onChange={e => onChange(e)}
//             />

//             {(errors.email && (
//               <p
//                 style={{
//                   fontSize: ".7rem",
//                   float: "left",
//                   margin: "0px",
//                   padding: "0px"
//                 }}
//               >
//                 {errors.email}
//               </p>
//             )) || (
//               <small>
//                 This site uses Gravatar. Use your gravatar email to use your
//                 gravatar avatar!
//               </small>
//             )}
//           </div>
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
//           <div>
//             <Styledinput
//               validated={errors.password2}
//               type="password"
//               name="password2"
//               placeholder="Confirm Password"
//               value={password2}
//               onChange={e => onChange(e)}
//             />
//             {errors.password2 && (
//               <p
//                 style={{
//                   fontSize: ".7rem",
//                   float: "left",
//                   margin: "0px",
//                   padding: "0px"
//                 }}
//               >
//                 {errors.password2}
//               </p>
//             )}
//           </div>
//           <Styledsub type="submit" value="Register" />
//         </form>
//         <Styledlink to="/Login">
//           Already have an account? Login here!
//         </Styledlink>
//       </Darkbox>
//     </Fragment>
//   );
// };

// Register.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   register: PropTypes.func.isRequired,
//   setAlert: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { register, setAlert })(Register);
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
