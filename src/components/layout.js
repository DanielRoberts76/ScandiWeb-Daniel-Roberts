import React, { Component } from "react";
import Header from "./header";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import BagComponent from "./bag-component";
import classes from "./layout.modules.css";
import SizeWidget from "./size-widget";
import ColorWidget from "./color-widget";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectedProduct: false,
      selectedCategory: "All",
      openModal: false,
      selectedProduct: null,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  // handleViewProduct = (selectedProduct) => {
  //   console.log("here!");
  //   this.setState({
  //     isSelectedProduct: selectedProduct != null,
  //     selectedProduct: selectedProduct,
  //   });
  // };

  switchGallery = () => {
    console.log("selectedImage");
  };

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
    if (this.props.selectedProduct === null) {
      showThis = (
        <div className="ProductListContainer">
          <div className="CategoryName">{this.state.selectedCategory}</div>
          <div className="PageContainer">{this.props.children}</div>
        </div>
      );
    }
    if (this.props.selectedProduct != null) {
      showThis = (
        <div className="ProductDisplayPageContainer">
          <div className="PreviewContainer">
            <img
              className="PreviewImages"
              onClick={this.switchGallery}
              src={this.props.selectedProduct.gallery[1]}
            ></img>
            <img
              className="PreviewImages"
              onClick={this.switchGallery}
              src={this.props.selectedProduct.gallery[2]}
            ></img>
            <img
              className="PreviewImages"
              onClick={this.switchGallery}
              src={this.props.selectedProduct.gallery[3]}
            ></img>
          </div>
          <img
            className="ProductImage"
            src={this.props.selectedProduct.gallery[0]}
            alt={""}
          ></img>
          <div className="ProductBlurb">
            <div className="PDPHeader">{this.props.selectedProduct.name}</div>

            <SizeWidget></SizeWidget>
            <ColorWidget></ColorWidget>
            <div className="Pricing">
              PRICE : {this.props.selectedProduct.prices[0].amount}
            </div>
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
