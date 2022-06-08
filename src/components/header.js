import React, { Component } from "react";
import logo from "../assets/a_logo.png";
import CartIcon2 from "../assets/CartIcon2.png";
import dollarsign from "../assets/dollarsign.png";
import classes from "./header.modules.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false };
  }

  openCart = (event) => {
    this.props.cartSelected(event);
  };

  handleSelectCurrency = ({ target }) => {
    this.props.selectCurrency(target.value);
  };

  populateCategory = (event) => {
    this.props.changeSelectedCategory(event);
  };

  render() {
    return (
      <>
        <div class="HeaderBar">
          <div class="CategoryContainer">
            <div
              class="CategoryButton"
              onClick={() => {
                this.populateCategory("clothes");
              }}
            >
              CLOTHES
            </div>
            <div
              class="CategoryButton"
              onClick={() => {
                this.populateCategory("tech");
              }}
            >
              TECH
            </div>
          </div>
          <div class="HeaderBar">
            <button class="Logo">
              <img src={logo} alt={" "}></img>
            </button>
          </div>
          <div class="ActionBar">
            <button
              class="CartButton"
              onClick={() => {
                this.openCart("test");
              }}
              src={CartIcon2}
            >
              cart
            </button>
            <select class="CurrencyButton" onChange={this.handleSelectCurrency}>
              {" "}
              {this.props.currencyData.currencies.map(
                ({ symbol, label }, index) => (
                  <option key={index} value={index}>
                    {symbol + " " + label}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
