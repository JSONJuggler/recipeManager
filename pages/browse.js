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

const BrowseRecipes = ({ recipes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.content} maxWidth="lg">
        <Browse recipes={recipes} />
      </Container>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_STRAPI_API_URL + "/recipes"
  );

  const recipes = res.data;

  return {
    props: { recipes, session: await getSession(context) },
  };
}

// Index.propTypes = {
//   rollbar: PropTypes.object.isRequired
// };

const mapStateToProps = (state) => ({
  translations: state.translations,
});

export default connect(mapStateToProps)(BrowseRecipes);
