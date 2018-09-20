import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Purchase.css";

export default class Purchase extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="purchase-container">
        <div className="business-header" />
        <h1 className="product-title"> Warby Parker </h1>
        <div className="purchase-body" />
      </div>
    );
  }
}
