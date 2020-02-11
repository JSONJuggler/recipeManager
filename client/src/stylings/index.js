import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Flexiblecontainer = styled.section`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Header = styled.header`
  padding: 10px;
  border-bottom: 4px solid powderblue;
  color: #ffffff;
  background: rgb(43, 43, 43);
  min-height: 60px;
  @media (min-width: 640px) {
    min-height: 10vh;
  }
  box-sizing: border-box;
  width: 100%;
`;

const Darkbox = styled.section`
  margin: auto;
  padding: 20px;
  color: #ffffff;
  background: rgb(43, 43, 43);
  box-sizing: border-box;
  text-align: center;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Usersec = styled.section`
  margin: auto;
  margin-top: 1%;
  margin-bottom: 1%;
  @media (min-width: 640px) {
    margin-left: 1%;
    margin-right: 1%;
  }
  padding: 20px;
  color: #ffffff;
  background: rgb(43, 43, 43);
  box-sizing: border-box;
  text-align: center;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 200px;
`;

const Recipesec = styled.section`
  margin: auto;
  margin-top: 1%;
  margin-bottom: 1%;
  @media (min-width: 640px) {
    margin-left: 1%;
    margin-right: 1%;
    max-height: none;
  }
  padding: 20px;
  color: #ffffff;
  background: rgb(43, 43, 43);
  box-sizing: border-box;
  text-align: center;
  max-width: 90%;
  max-height: 70vh;
  overflow: scroll;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  flex: 1;
`;

const Hero = styled.section`
  margin: 0;
  padding: 20px;
  border: 1px solid #000000;
  color: #ffffff;
  background: #d22b1f;
  box-sizing: border-box;
`;

const Content = styled.section`
  margin: 0;
  padding: 20px;
  border: 1px solid #000000;
  color: #ffffff;
  background: #129a22;
  box-sizing: border-box;
  flex: 1;
`;

const Sidebar = styled.aside`
  margin: 0;
  padding: 20px;
  border: 1px solid #000000;
  color: #ffffff;
  background: #673ab7;
  box-sizing: border-box;
  flex: 0 1 300px;
`;

const Foot = styled.footer`
  padding-top: 1vh;
  border-top: 4px solid powderblue;
  color: #ffffff;
  background: rgb(43, 43, 43);
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 10vh;
`;

const Flexcon = styled.div`
  @media (min-width: 640px) {
    display: flex;
    justify-content: center;
    max-height: 80vh;
  }
  margin: auto;
  max-height: 160vh;
  max-width: 1200px;
`;

const Navul = styled.ul`
  padding: 0;
  margin: 10px 0 0 0;
`;

const Navli = styled.li`
  display: inline;
  padding: 0 10px 0 10px;
`;

const div = {
  flex: 1,
  padding: "10px 0 0 10px"
};

const Styledlink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: yellow;
  }

  &:active {
    color: yellow;
  }
`;

const Linkbutton = styled(Link)`
  text-decoration: none;
  color: black;
  background: powderblue;
  padding: 0.4rem 0rem;
  margin: 1rem 0rem;
  font-size: 1rem;
  border: none;

  &:focus {
    border: 1px solid black;
  }
`;

const Styledinput = styled.input`
  margin: 0.5rem 0rem;
  padding: 0.4rem 0rem;
  font-size: 1rem;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 4px solid powderblue;
  outline: none;
  color: white;
  &:focus {
    border: 1px solid powderblue;
  }
  ${props =>
    props.validated &&
    css`
      box-shadow: ${props => "1px 1px 5px red"};
    `}
`;

const Styledsub = styled.input`
  margin: 0.5rem 0rem;
  padding: 0.4rem 0rem;
  font-size: 1rem;
  width: 100%;
  background: powderblue;
  color: black;
  border: none;
  &:focus {
    border: 1px solid black;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Alertdiv = styled.div`
  color: black;
  ${props =>
    props.type &&
    css`
      background-color: ${props => props.theme[props.type]};
    `};
  width: 100%;
  text-align: center;
  font-weight: bold;
  opacity: 0.8;
`;

export {
  Header,
  Hero,
  Content,
  Sidebar,
  Foot,
  Flexcon,
  Flexiblecontainer,
  Navul,
  Navli,
  div,
  Styledlink,
  Darkbox,
  Styledsub,
  Styledinput,
  Linkbutton,
  Alertdiv,
  Usersec,
  Recipesec
};
