import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import Nav from "../layout/Nav";
import Recipes from "../recipes/Recipes";

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
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  appBarSpacer: theme.mixins.toolbar
}));

const Browse = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fragment>
        <Nav />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg">
            <Container className={classes.cardGrid}>
              <Grid container spacing={4}>
                <Recipes />
              </Grid>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </Container>
        </main>
      </Fragment>
    </div>
  );
};

export default Browse;
