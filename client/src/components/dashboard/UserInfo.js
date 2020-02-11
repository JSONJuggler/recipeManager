import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserInfo = ({ auth: { user, loading } }) => {
  console.log(user);
  return (
    user &&
    !loading && (
      <Fragment>
        {/* <h1 style={{ backgroundColor: "yellow" }}>{user.avatar}</h1> */}
        <h1>{user.username}</h1>
        {/* <h1>{user.email}</h1> */}
        <h1>bigbo1992@ya hoo.com</h1>
      </Fragment>
    )
  );
};

UserInfo.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(UserInfo);
