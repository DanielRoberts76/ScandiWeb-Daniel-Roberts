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
    return (
      <>
        <Modal
          class="Modal"
          open={this.state.openModal}
          onClose={this.onCloseModal}
        >
          <BagComponent class="BagComponent"></BagComponent>
        </Modal>
        <Header
          changeSelectedCategory={this.handleCategoryChange}
          selectCurrency={this.handleSelectCurrency}
          currencyData={this.props.currencyData}
          cartSelected={this.handleCartSelected}
        ></Header>

        <div class="CategoryName">{this.state.selectedCategory}</div>
        <div class="PageContainer">{this.props.children}</div>
      </>
    );
  }
}

export default Layout;
