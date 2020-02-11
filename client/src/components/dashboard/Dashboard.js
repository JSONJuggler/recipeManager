import React, { Fragment } from "react";
// import PropTypes from "prop-types";

import Userinfo from "./UserInfo";
import { Recipesec, Usersec } from "../../stylings";

const Dashboard = props => {
  return (
    <Fragment>
      <Usersec>
        <Userinfo />
      </Usersec>
      <Recipesec></Recipesec>
    </Fragment>
  );
};

// Dashboard.propTypes = {};

export default Dashboard;
