import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";
import "./slick-theme.css";

export default class SlickSlider extends Component {
  render() {
    var settings = {
      swipeToSlide: true,
      fade: true,
      infinite: true,
      initialSlide: 0
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
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
