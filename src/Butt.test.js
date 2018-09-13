import React from "react";
import { shallow, mount } from "enzyme";
import Butt from "./Butt";

describe("Butt", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Butt />);
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

    it("should render the fancy AF spinning globe component nick custom made", () => {
    expect(wrapper.find(".spinning-globe").length).toEqual(1);
  });
});
