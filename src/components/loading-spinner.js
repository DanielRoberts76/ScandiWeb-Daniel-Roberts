import React from "react";
import { a_logo } from "../assets/a_logo";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">{a_logo}</div>
    </div>
  );
}
