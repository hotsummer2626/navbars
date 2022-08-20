import React from "react";
import styled from "styled-components";
import { navbarLinks } from "./navbarInfo";
import NavbarOne from "./components/NavbarOne/NavbarOne";
import NavbarTwo from "./components/NavbarTwo/NavbarTwo";

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
      <NavbarOne navbarLinks={navbarLinks} />
      <NavbarTwo navbarLinks={navbarLinks} />
    </Container>
  );
};

export default App;
