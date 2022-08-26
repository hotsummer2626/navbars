import React from "react";
import styled from "styled-components";
import "./global.scss";
import { navbarLinks } from "./navbarInfo";
import NavbarOne from "./components/NavbarOne/NavbarOne";
import NavbarTwo from "./components/NavbarTwo/NavbarTwo";
import NavbarThree from "./components/NavbarThree/NavbarThree";
import NavbarFour from "./components/NavbarFour/NavbarFour";
import NavbarFive from "./components/NavbarFive/NavbarFive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      {/* <NavbarOne navbarLinks={navbarLinks} />
      <NavbarTwo navbarLinks={navbarLinks} />
      <NavbarThree navbarLinks={navbarLinks} />
      <NavbarFour navbarLinks={navbarLinks} /> */}
      <NavbarFive navbarLinks={navbarLinks} />
    </Container>
  );
};

export default App;
