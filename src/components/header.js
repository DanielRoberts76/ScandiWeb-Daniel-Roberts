import React from "react";
import { widths } from "./styles";
import styled from "@emotion/styled";
import logo from "../assets/a_logo.png";
import CartIcon2 from "../assets/CartIcon2.png";
import dollarsign from "../assets/dollarsign.png";

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
      <ActionBar>
        <CartModal src={CartIcon2} />
        <CurrencyModal src={dollarsign} />
      </ActionBar>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div({
  display: "flex",
  flexDirection: "row",
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

const ActionBar = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  alignSelf: "right",
});

const CartModal = styled.img({
  height: 40,
  width: 40,
});

const CurrencyModal = styled.img({
  height: 40,
  width: 40,
});
