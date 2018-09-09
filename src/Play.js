import React, { Component } from "react";
import Menu from "./Menu";
import "./App.css";
import { UsStates } from './NearbyPeople';


export default class Play extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
      address: '',
      city: '',
      state: ''
    };
  }

  expandSearch = () => {
    this.setState({
      expanded: true
    })
  }

  closeSearch = () => {
    this.setState({
      expanded: false
    })
  }

  render() {
    const states = UsStates
    return (
      <div className="play-container" >
        <form className="play-form" >
          <div className="play-search-first-line" >
            <input onFocus={this.expandSearch} className="play-input" type="text" placeholder="Address" />
            <article className="play-form-divider" ></article>
            <input className="play-button" type="button" onClick={this.closeSearch} value="Submit" />
          </div>
          {
            this.state.expanded && 
            <div className="play-search-dropdown">
              <input type="text" placeholder="City" className="play-city-input" />
              <select className="play-state-dropdown">
                {
                  states.map(state => {
                  return <option value={state} > {state} </option>
                  })
                }
              </select>
            </div>
          }
        </form>
        <Menu />
      </div>
    );
  }
}
