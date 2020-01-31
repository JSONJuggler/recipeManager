import React, { Fragment } from "react";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Landing />
      </Fragment>
    </Router>
  );
}

export default App;
