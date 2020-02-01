import styled from "styled-components";

const Flexiblecontainer = styled.section`
  display: flex;
  background-color: white;
`;

const Header = styled.header`
  margin: 0;
  padding: 20px;
  border: 1px solid #000000;
  color: #ffffff;
  background: #03a9f4;
  box-sizing: border-box;
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
const Footer = styled.footer`
  margin: 0;
  padding: 20px;
  border: 1px solid #000000;
  color: #ffffff;
  background: #616161;
  box-sizing: border-box;
`;

const Flexcon = styled.div`
  @media (min-width: 640px) {
    display: flex;
  }
  margin: auto;
  max-width: 1200px;
`;

// const Nav = styled.nav`
//   background: #d7d1a1;
//   position: fixed;
//   top: 0;
//   right: 0;
//   left: 0;
//   display: flex;
//   font-weight: bold;
// `;

// const Navdiv = styled.div`
//   color: black;
//   margin: 2%;
//   flex-grow: 1;
//   display: flex;
//   line-height: 0.2;
//   div {
//     margin-left: 10px;
//     margin-right: 10px;
//   }
// `;

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

export {
  Header,
  Hero,
  Content,
  Sidebar,
  Footer,
  Flexcon,
  Flexiblecontainer,
  Styledbutton,
  Styledinput,
  Maindiv
};
