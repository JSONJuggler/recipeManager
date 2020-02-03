import React, { Fragment } from "react";
import { Flexcon } from "../stylings";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const flex = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
};

function App() {
  return (
    <Router>
      <Fragment>
        <div style={flex}>
          <Navbar />
          <Flexcon>
            <Route exact path="/" component={Landing} />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Flexcon>
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
