import React from "react";

const Welcome = props => {
  return (
    <div className="welcome-message">
      <div class="spinning-globe" />
      <h1>World Citizen</h1>
      <h5 className>A Simple Weather Searching App</h5>
      <a href="https://github.com/30ozSteak/KD-ND-Weatherly">
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default Welcome;
