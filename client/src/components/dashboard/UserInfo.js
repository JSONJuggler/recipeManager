import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserInfo = ({ auth: { user, loading } }) => {
  console.log(user);
  return (
    user &&
    !loading && (
      <Fragment>
        <img style={{ maxWidth: "200px", margin: "auto" }} src={user.avatar} />
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <small>
          Enter a brief description: "Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo."
        </small>
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
