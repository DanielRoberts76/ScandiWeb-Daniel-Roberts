import React, { Component } from "react";
import classes from "./color-widget.modules.css";

class ColorWidget extends React.Component {
  render() {
    return (
      <div className="ColorWidget">
        <h1 className="ColorWidgetHeader">COLOR :</h1>
        <button className="ColorSelectorButton1"></button>
        <button className="ColorSelectorButton2"></button>
        <button className="ColorSelectorButton3"></button>
      </div>
    );
  }
}

export default ColorWidget;
