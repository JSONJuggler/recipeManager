import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSession, csrfToken } from "next-auth/client";

import Login from "components/Login";
import Dashboard from "components/Dashboard";
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

const Index = ({ session, csrfToken }) => {
  const classes = useStyles();
  //axios({
  //method: "get",
  //url: process.env.SITE + "/api/getToken",
  //});

  return (
    <div className={classes.root}>
      <Container className={classes.content} maxWidth="lg">
        {!session && <Login csrfToken={csrfToken} />}
        {session && <Dashboard session={session} />}
      </Container>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
      csrfToken: await csrfToken(context),
    },
  };
}
// Index.propTypes = {
//   rollbar: PropTypes.object.isRequired
// };

const mapStateToProps = (state) => ({
  translations: state.translations,
});

export default connect(mapStateToProps)(Index);
