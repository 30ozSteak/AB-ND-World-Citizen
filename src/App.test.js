import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount, shallow } from "enzyme";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render a InfoButton component", () => {
    expect(wrapper.find("InfoButton").length).toEqual(1);
  });

  it("should render a Notifications component", () => {
    expect(wrapper.find("Notifications").length).toEqual(1);
  });

  it("should render the Menu component", () => {
    expect(wrapper.find("Menu").length).toEqual(1);
  });
});
