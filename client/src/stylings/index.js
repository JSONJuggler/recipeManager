import styled from "styled-components";

const Nav = styled.nav`
  background: #d7d1a1;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  font-weight: bold;
`;

const Navdiv = styled.div`
  color: black;
  margin: 20px;
  flex-grow: 1;
  display: flex;
  line-height: 0.2;
  div {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export { Nav, Navdiv };
