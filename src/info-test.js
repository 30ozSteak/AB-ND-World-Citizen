import React from "react";
import ReactDOM from "react-dom";
import Info from "./Info";
import { mount, shallow } from "enzyme";

describe("Info", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Info />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render three components without crashing", () => {
    expect(wrapper.find("InfoButton").length).toEqual(1);
    expect(wrapper.find("MiniGlobe").length).toEqual(1);
    expect(wrapper.find("NavLink").length).toEqual(1);
  });

  // it("should render a Notifications component", () => {
  //   expect(wrapper.find("Notifications").length).toEqual(1);
  // });

  // it("should render a PageContent component", () => {
  //   console.log(wrapper.class);
  //   expect(wrapper.find("PageContent").length).toEqual(1);
  // });

  // it("should render the Menu component", () => {
  //   expect(wrapper.find("Menu").length).toEqual(1);
  // });
});
