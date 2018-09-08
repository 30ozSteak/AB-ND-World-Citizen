import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";
import "./slick-theme.css";
import Icon from "./icon";

export default class SlickSlider extends Component {
  render() {
    var settings = {
      swipeToSlide: true,
      fade: true,
      infinite: true,
      initialSlide: 0,
      buttons: false
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <Icon />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}
