import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRouter } from "next/router";
import { getSession, csrfToken } from "next-auth/client";

import Register from "components/Register";
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

const RegisterUser = ({ session, csrfToken }) => {
  const classes = useStyles();

  const router = useRouter();

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

  useEffect(() => {
    if (router.pathname === "/register" && session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className={classes.root}>
      <Container className={classes.content} maxWidth="lg">
        <Register csrfToken={csrfToken} />
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

export default connect(mapStateToProps)(RegisterUser);
