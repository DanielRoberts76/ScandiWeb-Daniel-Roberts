import React, { Component } from "react";
import classes from "./size-widget.modules.css";

class SizeWidget extends React.Component {
  render() {
    return (
      <div className="SelectorWidget">
        <h1 className="SizeWidgetHeader">SIZE :</h1>
        <div className="SizeSelectorPanel">
          <button className="SelectorButton">XS</button>
          <button className="SelectorButton">S</button>
          <button className="SelectorButton">M</button>
          <button className="SelectorButton">L</button>
        </div>
      </div>
    );
  }
}

export default SizeWidget;
