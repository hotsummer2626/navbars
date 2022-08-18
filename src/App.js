import React from "react";
import styled from "styled-components";
import NavbarOne from "./components/NavbarOne/NavbarOne";

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <NavbarOne />
    </Container>
  );
};

export default App;
