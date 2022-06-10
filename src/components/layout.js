import React, { Component } from "react";
import Header from "./header";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import BagComponent from "./bag-component";
import classes from "./layout.modules.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      selectedCategory: "All",
      openModal: false,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  handleCartSelected = () => {
    this.setState({ openModal: true });
  };
  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleCategoryChange = (newCategory) => {
    this.setState({ selectedCategory: newCategory });
    this.props.handleParentFunction(newCategory);
  };

  handleSelectCurrency = (newCurrency) => {
    this.props.handleSelectCurrency(newCurrency);
  };

  submitForm(values) {
    this.setState({ values });
  }
  render() {
    let showThis;
    if (this.state.page === 0) {
      showThis = (
        <div className="ProductListContainer">
          <div className="CategoryName">{this.state.selectedCategory}</div>
          <div className="PageContainer">{this.props.children}</div>
        </div>
      );
    }
    if (this.state.page === 1) {
      showThis = (
        <div className="ProductDisplayPageContainer">
          <div>
            <h3>We will display our product here</h3>
          </div>
        </div>
      );
    }
    return (
      <>
        <Modal
          className="Modal"
          open={this.state.openModal}
          onClose={this.onCloseModal}
        >
          <BagComponent className="BagComponent"></BagComponent>
        </Modal>
        <Header
          changeSelectedCategory={this.handleCategoryChange}
          selectCurrency={this.handleSelectCurrency}
          currencyData={this.props.currencyData}
          cartSelected={this.handleCartSelected}
        ></Header>{" "}
        {showThis}
      </>
    );
  }
}

export default Layout;
