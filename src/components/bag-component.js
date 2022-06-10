import React from "react";
import classes from "./bag-component.modules.css";

class BagComponent extends React.Component {
  render() {
    return (
      <div class="CartModal">
        <div class="ModalHeader">My Bag {"1 item"}</div>
        <div class="BagContainer">{this.props.children}</div>
      </div>
    );
  }
}
export default BagComponent;
