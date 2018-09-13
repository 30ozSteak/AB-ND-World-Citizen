import React from "react";
import { shallow, mount } from "enzyme";
import BrandName from "./BrandName";

describe("BrandName", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BrandName />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

    it("should have a default empty state", () => {
    expect(wrapper.state()).toEqual({});
  });

    it("should render the h1 that comprises the component", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
