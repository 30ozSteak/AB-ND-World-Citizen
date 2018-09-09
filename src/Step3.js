import React, { Component } from "react";
import "./icon.css";

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="icon step3">
        <div className="step3icon" />
        <h1>Unlock Stickers, Camera Filters, Discounts, and More!</h1>
      </div>
    );
  }
}
