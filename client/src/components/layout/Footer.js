import React, { Fragment } from "react";
import { Foot } from "../../stylings";

const Footer = () => {
  return (
    <Fragment>
      <Foot>
        Thank you for using my website!
        <p style={{ fontSize: ".75rem" }}>Created by Deleon Reescano</p>
      </Foot>
    </Fragment>
  );
};

export default Footer;
