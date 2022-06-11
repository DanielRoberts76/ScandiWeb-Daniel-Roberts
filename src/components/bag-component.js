import React from "react";
import classes from "./bag-component.modules.css";
import SizeWidget from "./size-widget";
import ColorWidget from "./color-widget";

class BagComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productsInCart: this.props.productsInCart };
  }

  render() {
    return (
      <div class="CartModal">
        <div class="ModalHeader">
          <b>My Bag, </b>
          {this.state.productsInCart.length} items
        </div>
        <div class="BagContainer">
          {this.state.productsInCart.map((product) => (
            <div className="CartCard">
              <div className="CartInfo">
                <div className="CartItemName">{product.name}</div>
                <div className="CartItemPrice">
                  {
                    product.prices[this.props.selectedCurrencyIndex].currency
                      .symbol
                  }
                  {product.prices[this.props.selectedCurrencyIndex].amount}
                </div>
                <SizeWidget className="CartItemSizeWidget"></SizeWidget>
                <ColorWidget className="ColorWidget"></ColorWidget>
              </div>
              <div className="CartGallery">
                <img
                  className="CartImagePreview"
                  src={product.gallery[0]}
                  alt=""
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default BagComponent;

// product={product}
// selectedCurrencyIndex={this.props.selectedCurrencyIndex}
