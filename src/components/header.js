import React, { Component } from "react";
import logo from "../assets/a_logo.png";
import CartIcon2 from "../assets/CartIcon2.png";
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
        <div className="HeaderBar">
          <div className="CategoryContainer">
            <div
              className="CategoryButton"
              onClick={() => {
                this.populateCategory("clothes");
              }}
            >
              CLOTHES
            </div>
            <div
              className="CategoryButton"
              onClick={() => {
                this.populateCategory("tech");
              }}
            >
              TECH
            </div>
          </div>
          <div className="HeaderBar">
            <button className="Logo">
              <img src={logo} alt={" "}></img>
            </button>
          </div>
          <div className="ActionBar">
            <button
              className="CartButton"
              onClick={() => {
                this.openCart("test");
              }}
              src={CartIcon2}
            >
              cart
            </button>
            <select
              className="CurrencyButton"
              onChange={this.handleSelectCurrency}
            >
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
