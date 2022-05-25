import React from "react";
import { widths } from "./styles";
import styled from "@emotion/styled";
import logo from "../assets/a_logo.png";

const Header = ({ children }) => {
  return (
    <HeaderBar>
      <Container>
        <CategoryContainer></CategoryContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>

        {children}
      </Container>
      <button>Beep</button>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 25px",
  minHeight: 80,
  backgroundColor: "white",
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
  display: "flex",
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
});

const CategoryButton = styled.div({
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  backgroundColor: "lightblue",
  maxWidth: 100,
});

const CategoryContainer = styled.div({
  display: "flex",
  flex: 1,
});

const LogoContainer = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  alignSelf: "center",
});

const Logo = styled.img({
  height: 40,
  width: 40,
  marginRight: 8,
});
