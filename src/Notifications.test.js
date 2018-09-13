import React from "react";
import { shallow, mount } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

    it("should have a default empty state", () => {
    expect(wrapper.state()).toEqual({});
  });

    it("should render the fancy AF notification icon nick custom made that currently doesn't do anything", () => {
    expect(wrapper.find(".notification-dot").length).toEqual(1);
  });
});
