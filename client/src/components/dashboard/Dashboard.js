import React, { Fragment } from "react";

// import PropTypes from "prop-types";

import Userinfo from "./UserInfo";
import Recipe from "./Recipe";
import { Recipesec, Usersec } from "../../stylings";

const Dashboard = props => {
  return (
    <Fragment>
      <Usersec>
        <Userinfo />
      </Usersec>
      <Recipesec>
        <Recipe />
      </Recipesec>
    </Fragment>
  );
};

// Dashboard.propTypes = {};

export default Dashboard;
