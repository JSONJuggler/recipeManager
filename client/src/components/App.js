import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Addrecipe from "./recipes/Addrecipe";
import setAuthToken from "../utils/setAuthToken";
// import Alert from "./layout/Alert";
import Browse from "./layout/Browse";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./dashboard/Dashboard";
import { loadUser } from "../actions/auth";
import PrivateRoute from "./routing/PrivateRoute";

function App({ loadUser }) {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <Router>
      <Fragment>
        {/* <Alert /> */}
        <Route exact path="/" component={Login} />
        <Switch>
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/Addrecipe" component={Addrecipe} />
        </Switch>
      </Fragment>
    </Router>
  );
}

App.propTypes = {
  loadUser: PropTypes.func.isRequired
};

export default connect(null, { loadUser })(App);
