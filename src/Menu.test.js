import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import { mount, shallow } from "enzyme";

describe("Menu", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("will direct you to the home route on click", () => {
    expect(
      wrapper
        .find("NavLink")
        .first()
        .props().to
    ).toEqual("/Home");
  });

  it("should have a default empty state", () => {
    expect(wrapper.state()).toEqual({});
  });

  it("should render the MenuButton component three times", () => {
    expect(wrapper.find("MenuButton").length).toEqual(3);
  });

  it("should render the NavLink component three times", () => {
    expect(wrapper.find("NavLink").length).toEqual(3);
  });
});
