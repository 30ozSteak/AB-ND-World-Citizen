import React, { Component } from "react";
import "./icon.css";
import BrandName from "./BrandName";

class Butt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div className="icon">
        <div className="spinning-globe" />
        <BrandName />
        <p>Swipe to Learn More</p>
      </div>
    );
  }
}

export default Butt;
