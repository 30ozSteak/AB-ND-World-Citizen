import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Purchase.css";

export default class Purchase extends Component {
  constructor() {
    super();

    this.state = {}
  }

  handlePurchase = (thingtopass) => {
    this.props.logPurchase(thingtopass);
  }

  render() {
    return (
      <div className="purchase-container">
        <div className="business-header" />
        <div className="purchase-body">
          <h1 className="product-title">
            {" "}
            Warby Parker
            <span>™️</span>{" "}
          </h1>
          <p class="product-more-info">Buy a Pair, Give a Pair</p>
          <a
            href="https://www.warbyparker.com/buy-a-pair-give-a-pair"
            class="product-learn-more"
          >
            Learn More
          </a>
          <div className="product-literal" />
          <h2 className="product-name">Percey</h2>
          <p className="product-subtitle">Rose Crystal with Riesling Endcaps</p>
          <p className="product-price">$145.00</p>
          <p className="log-purchase-button" onClick={() => this.handlePurchase('local')} > Log Purchase </p>{" "}
          <div className="product-literal two" />
          <h2 className="product-name">Hughes Narrow</h2>
          <p className="product-subtitle">Jasmine Crystal</p>
          <p className="product-price">$95.00</p>
          <p className="log-purchase-button"> Log Purchase </p>
          <div className="product-literal three" />
          <h2 className="product-name">Watts</h2>
          <p className="product-subtitle">Sugar Maple</p>
          <p className="product-price">$95.00</p>
          <p className="log-purchase-button last-item"> Log Purchase </p>
        </div>
      </div>
    );
  }
}
