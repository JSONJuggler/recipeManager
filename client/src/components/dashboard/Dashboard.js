import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

import Nav from "../layout/Nav";
import Userrecipes from "../recipes/Userrecipes";

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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  centerFlexibleItem: {
    alignSelf: "center"
  },
  fixedHeight: {
    height: 260
  },
  appBarSpacer: theme.mixins.toolbar
}));

const Dashboard = ({ auth: { user, loading } }) => {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Nav />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {user && !loading && (
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Typography
                    component="h1"
                    variant="caption"
                    className={classes.centerFlexibleItem}
                  >
                    {user.username}
                  </Typography>
                  <img
                    className={classes.centerFlexibleItem}
                    src={user.avatar}
                    alt=""
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>{/* <Deposits /> */}</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Userrecipes />
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        )}
      </main>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
