import React, { Fragment } from "react";
import {
  Header,
  Hero,
  Content,
  Sidebar,
  Footer,
  Flexcon
} from "../../stylings";
// import { Maindiv } from "../../stylings";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const pstyle = {
//   fontColor: "black",
//   fontSize: "20px",
//   marginTop: "50px"
// };

const Landing = () => {
  return (
    <Fragment>
      <Header>
        Header
        {window.screen.width}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda</p>
      </Header>
      <Hero>
        Hero
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda
          potius quam expetenda. Nihil opus est exemplis hoc facere longius.
        </p>
      </Hero>
      <Flexcon>
        <Content>
          Content
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda
            potius quam expetenda. Nihil opus est exemplis hoc facere
            longius.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sumenda potius quam expetenda. Nihil opus est exemplis hoc facere
            longius.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sumenda potius quam expetenda. Nihil opus est exemplis hoc facere
            longius.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sumenda potius quam expetenda. Nihil opus est exemplis hoc facere
            longius.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sumenda potius quam expetenda. Nihil opus est exemplis hoc facere
            longius.
          </p>
        </Content>
        <Sidebar>
          Sidebar
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda
            potius quam expetenda. Nihil opus est exemplis hoc facere
            longius.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sumenda potius quam expetenda. Nihil opus est exemplis hoc facere
            longius.
          </p>
        </Sidebar>
      </Flexcon>

      <Footer>
        Footer
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda
          potius quam expetenda. Nihil opus est exemplis hoc facere longius.
        </p>
      </Footer>
      {/* <Maindiv>
        <p style={pstyle}>Home/Landing</p>
        <ul>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </Maindiv> */}
    </Fragment>
  );
};

export default Landing;
