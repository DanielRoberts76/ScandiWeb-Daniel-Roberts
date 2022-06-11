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
      selectedGalleryIndex: 0,
      productsInCart: [],
    };
    this.submitForm = this.submitForm.bind(this);
  }

  addProductToCart = (selectedProduct) => {
    let temporaryProductArray = this.state.productsInCart;
    temporaryProductArray.push(selectedProduct);
    this.setState({ productsInCart: temporaryProductArray });
  };

  switchGallery = (selectedGalleryIndex) => {
    this.setState({ selectedGalleryIndex: selectedGalleryIndex });
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
              onClick={() => {
                this.switchGallery(0);
              }}
              src={this.props.selectedProduct.gallery[0]}
            ></img>

            <img
              className="PreviewImages"
              onClick={() => {
                this.switchGallery(1);
              }}
              src={this.props.selectedProduct.gallery[1]}
            ></img>
            <img
              className="PreviewImages"
              onClick={() => {
                this.switchGallery(2);
              }}
              src={this.props.selectedProduct.gallery[2]}
            ></img>
            <img
              className="PreviewImages"
              onClick={() => {
                this.switchGallery(3);
              }}
              src={this.props.selectedProduct.gallery[3]}
            ></img>
          </div>
          <img
            className="ProductImage"
            src={
              this.props.selectedProduct.gallery[
                this.state.selectedGalleryIndex
              ]
            }
            alt={""}
          ></img>
          <div className="ProductBlurb">
            <div className="PDPHeader">{this.props.selectedProduct.name}</div>

            <SizeWidget></SizeWidget>
            <ColorWidget></ColorWidget>
            <div className="PricingBox">
              <div className="PriceHeader">PRICE : </div>
              <div className="Price">
                {
                  this.props.selectedProduct.prices[
                    this.props.selectedCurrencyIndex
                  ].currency.symbol
                }
                {
                  this.props.selectedProduct.prices[
                    this.props.selectedCurrencyIndex
                  ].amount
                }
              </div>
              <button
                onClick={() => {
                  this.addProductToCart(this.props.selectedProduct);
                }}
                className="AddToCartButton"
              >
                ADD TO CART
              </button>
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
          <BagComponent
            selectedCurrencyIndex={this.props.selectedCurrencyIndex}
            className="BagComponent"
            productsInCart={this.state.productsInCart}
          ></BagComponent>
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
