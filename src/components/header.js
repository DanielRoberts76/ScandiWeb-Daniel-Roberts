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
        <CategoryContainer></CategoryContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
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
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: "20px",
  backgroundColor: "white",
});

const CategoryButton = styled.div({
  flex: 1,
  flexDirection: "row",
  backgroundColor: "lightblue",
  maxWidth: 200,
  maxHeight: 50,
  padding: "30px 3` 0px",
});

const LogoContainer = styled.div({
  flex: 1,
  flexWrap: "wrap",
  alignSelf: "center",
});

const Logo = styled.img({
  height: "50px",
  width: "19%",
});

const ActionBar = styled.div({
  flex: 1,
  alignItems: "right",
  marginLeft: "20px",
});

const CartButton = styled.img({
  height: "70%",
  width: "10%",
});

const CurrencyButton = styled.img({
  height: "70%",
  width: "10%",
});

const CategoryContainer = styled.div({
  display: "flex",
  flex: 1,
});
