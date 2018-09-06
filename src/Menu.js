import React, { Component } from 'react';

import MenuButton from './MenuButton';
import homeImage from './Images/home.svg'
import searchImage from './Images/search.svg'
import nearbyImage from './Images/nearby.svg'


export default class Menu extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="menu">
        <MenuButton id="home-button" icon={homeImage} purpose={'home-button'} />
        <MenuButton id="search-button" icon={searchImage} purpose={'search-button'} />
        <MenuButton id="nearby-button" icon={nearbyImage} purpose={'nearby-button'} />
      </div>
    );
  }
}