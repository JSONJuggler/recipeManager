// import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

// // import { Alertdiv } from "../../stylings/";

const Alert = ({ alerts }) => {
  //   return (
  //     alerts !== null &&
  //     alerts.length > 0 &&
  //     alerts.map(alert => (
  //       <Alertdiv key={alert.id} type={alert.alertType}>
  //         {alert.msg}
  //       </Alertdiv>
  //     ))
  //   );
};

// Alert.propTypes = {
//   alerts: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps, {})(Alert);
