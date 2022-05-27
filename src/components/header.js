import React, { Component } from "react";
import { widths } from "./styles";
import styled from "@emotion/styled";
import logo from "../assets/a_logo.png";
import CartIcon2 from "../assets/CartIcon2.png";
import dollarsign from "../assets/dollarsign.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  populateCategory = (event) => {
    this.props.changeSelectedCategory(event);
  };

  render() {
    return (
      <HeaderBar>
        <CategoryContainer>
          <CategoryButton
            onClick={() => {
              this.populateCategory("clothes");
            }}
          >
            CLOTHES
          </CategoryButton>
          <CategoryButton
            onClick={() => {
              this.populateCategory("tech");
            }}
          >
            TECH
          </CategoryButton>
        </CategoryContainer>
        <Container>
          <CategoryContainer></CategoryContainer>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
        </Container>
        <ActionBar>
          <CartButton src={CartIcon2} />
          <CurrencyButton src={dollarsign} />
        </ActionBar>
      </HeaderBar>
    );
  }
}

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

const CartButton = styled.img({
  height: 40,
  width: 40,
});

const CurrencyButton = styled.img({
  height: 40,
  width: 40,
});

const CategoryButton = styled.div({
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  backgroundColor: "lightblue",
  maxWidth: 100,
  maxHeight: 50,
});

const CategoryContainer = styled.div({
  display: "flex",
  flex: 1,
});
