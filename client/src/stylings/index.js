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
  margin: 2%;
  flex-grow: 1;
  display: flex;
  line-height: 0.2;
  div {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Maindiv = styled.div`
  min-height: 92%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Styledbutton = styled.button`
  background: #d7d1a1;
  border: none;
  padding: 0.4rem 1.3rem;
  margin: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`;

const Styledinput = styled.input`
  margin: 0.5rem 0rem;
  padding: 0.4rem 0rem;
  font-size: 1rem;
  width: 100%;
`;

export { Nav, Navdiv, Styledbutton, Styledinput, Maindiv };
