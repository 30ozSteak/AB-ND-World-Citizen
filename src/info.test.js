import React from "react";
import ReactDOM from "react-dom";
import Info from "./Info";
import { mount, shallow } from "enzyme";

describe("Info", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Info />);
  });

  it("will direct you to the home route on click", () => {
    expect(
      wrapper
        .find("NavLink")
        .first()
        .props().to
    ).toEqual("/");
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should have a default empty state", () => {
    expect(wrapper.state()).toEqual({});
  });

  it("should render the BrandName component", () => {
    expect(wrapper.find("BrandName").length).toEqual(1);
  });

  it("should render the NavLink component", () => {
    expect(wrapper.find("NavLink").length).toEqual(1);
  });
});
