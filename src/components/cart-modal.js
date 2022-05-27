import React from "react";
import styled from "@emotion/styled";
import { ClassNames } from "./cart-modal.css";

function ShowCartModal() {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <header className="modalTitle"> My Bag </header>
        <div className="modalCards">PRODUCT CARDS</div>
        <button>VIEW BAG</button>
        <button>MY CART</button>
      </div>
    </div>
  );
}

export default ShowCartModal;
