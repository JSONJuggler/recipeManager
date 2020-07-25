import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withRedux } from "lib/redux";
import Rollbar from "rollbar";
import { Provider } from "next-auth/client";

import Nav from "components/Nav";
import Footer from "components/Footer";
import theme from "themes/theme";

function getRollbar() {
  if (process.env.NODE_ENV === "development") {
    const rollbar = new Rollbar({
      // accessToken: process.env.ROLLBAR_CLIENT_TOKEN,
      captureUncaught: true,
      captureUnhandledRejections: true,
      environment: "development",
    });
    return rollbar;
  }

  if (process.env.NODE_ENV === "production") {
    const rollbar = new Rollbar({
      // accessToken: process.env.ROLLBAR_CLIENT_TOKEN,
      captureUncaught: true,
      captureUnhandledRejections: true,
      environment: "production",
    });
    return rollbar;
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(0),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
}));

function MyApp({ Component, pageProps, store }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const classes = useStyles();

  const [rollbar] = React.useState(getRollbar());

  const { session } = pageProps;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Head>
          <title>Beau | translator</title>
          <meta name="author" content="Beau Reescano" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Teacher friendly translator. English, Spanish, and other languages are currently supported"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider options={{ site: process.env.SITE }} session={session}>
            <Nav session={session} />
            <div className={classes.wrapper}>
              <div className={classes.appBarSpacer} />
              <Component rollbar={rollbar} {...pageProps} />
              <Footer />
            </div>
          </Provider>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default withRedux(MyApp);
