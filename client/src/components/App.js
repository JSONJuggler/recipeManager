import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Addrecipe from "./recipes/Addrecipe";
import setAuthToken from "../utils/setAuthToken";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Alert from "./layout/Alert";
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
        <Alert />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/Addrecipe" component={Addrecipe} />
        </Switch>
        <Navbar />
      </Fragment>
    </Router>
  );
}

export default connect(null, { loadUser })(App);
