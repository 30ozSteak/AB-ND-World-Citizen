import React from "react";
import { shallow, mount } from "enzyme";
import Play from "./Play";

describe("Play", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Play />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });
  // we want to test state changes . not just the default state
  // all of our play components should be tested
  // mock out fetch like we did with local storage in weathrly / context in gametime
  it("should have a default empty state", () => {
    expect(wrapper.state()).toEqual({
      fetchSent: false,
      expanded: false,
      address: "",
      city: "",
      state: "",
      location: []
    });
  });
});
