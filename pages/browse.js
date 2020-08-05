import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSession } from "next-auth/client";

import Browse from "components/Browse";
import Footer from "components/Footer";
import { getBrowseRecipes } from "src/actions/recipe";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    flexGrow: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  loadingContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  date: {
    visibility: "hidden",
    marginLeft: "auto",
    marginRight: "auto",
  },
  progress: {
    display: "flex",
    justifyContent: "center",
  },
}));

const BrowseRecipes = ({ getBrowseRecipes, recipe: { browseRecipes } }) => {
  const classes = useStyles();

  useEffect(() => {
    getBrowseRecipes();
  }, [getBrowseRecipes]);

  return (
    <div className={classes.root}>
      <Container className={classes.content} maxWidth="lg">
        <Browse recipes={browseRecipes} />
      </Container>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: { session: await getSession(context) },
  };
}

// BrowseRecipes.propTypes = {
//   rollbar: PropTypes.object.isRequired
// };

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { getBrowseRecipes })(BrowseRecipes);
