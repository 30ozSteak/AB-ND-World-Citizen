import React from "react";
import { shallow, mount } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

    it("should have a default empty state", () => {
    expect(wrapper.state()).toEqual({});
  });

    it("should render the SlickSlider component", () => {
    expect(wrapper.find("SlickSlider").length).toEqual(1);
  });

      it("should render the NavLink component", () => {
    expect(wrapper.find("NavLink").length).toEqual(1);
  });

        it("should render the Login Button component", () => {
    expect(wrapper.find("LoginButton").length).toEqual(1);
  });

    it('should render a form that houses our input field', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });
});
  
  
